/**
 * GLSL for the orbital viewer. The 3D texture holds the complex field as four
 * half floats per voxel, (Re ψ_A, Im ψ_A, Re ψ_B, Im ψ_B), already scaled so
 * that |ψ|² is the display-normalized density. ψ = ψ_A + e^{iδ} ψ_B, where
 * (cos δ, sin δ) is the uPhase uniform; with a single energy ψ_B is zero.
 */

const COMMON = /* glsl */`
  uniform sampler2D uRocket;

  vec3 srgbToLinear(vec3 color) {
    vec3 low = color / 12.92;
    vec3 high = pow((color + 0.055) / 1.055, vec3(2.4));
    return mix(high, low, lessThanEqual(color, vec3(0.04045)));
  }

  vec3 rocketColor(float value) {
    float index = floor(clamp(value, 0.0, 1.0) * 255.0);
    vec3 srgb = texture2D(uRocket, vec2((index + 0.5) / 256.0, 0.5)).rgb;
    return srgbToLinear(srgb);
  }

  // Cyclic colour for arg ψ: +1 (phase 0) is red, -1 (phase π) is cyan.
  vec3 phaseColor(float angle) {
    vec3 srgb = 0.56 + 0.44 * cos(angle + vec3(0.0, 2.0943951, 4.1887902));
    return srgbToLinear(srgb);
  }
`;

export const VOLUME_VERTEX_SHADER = /* glsl */`
  varying vec3 vLocalPosition;
  void main() {
    vLocalPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const VOLUME_FRAGMENT_SHADER = /* glsl */`
  precision highp float;
  precision highp sampler3D;
  uniform sampler3D uPsi;
  uniform float uGamma;
  uniform vec2 uPhase;
  uniform int uRender;      // 0 volume, 1 isosurface, 2 slice
  uniform int uColorMode;   // 0 density, 1 phase
  uniform float uIsoLevel;
  uniform int uSliceAxis;
  uniform float uSlicePos;
  varying vec3 vLocalPosition;
  ${COMMON}

  const int VOLUME_STEPS = 160;
  const int SURFACE_STEPS = 220;

  vec2 psiAt(vec3 p) {
    vec4 s = texture(uPsi, p * 0.5 + 0.5);
    return vec2(
      s.x + uPhase.x * s.z - uPhase.y * s.w,
      s.y + uPhase.x * s.w + uPhase.y * s.z
    );
  }

  float densityAt(vec3 p) {
    vec2 q = psiAt(p);
    return dot(q, q);
  }

  vec3 densityGradient(vec3 p) {
    vec3 e = 2.0 / vec3(textureSize(uPsi, 0));
    return vec3(
      densityAt(p + vec3(e.x, 0.0, 0.0)) - densityAt(p - vec3(e.x, 0.0, 0.0)),
      densityAt(p + vec3(0.0, e.y, 0.0)) - densityAt(p - vec3(0.0, e.y, 0.0)),
      densityAt(p + vec3(0.0, 0.0, e.z)) - densityAt(p - vec3(0.0, 0.0, e.z))
    );
  }

  float hash(vec2 v) {
    return fract(sin(dot(v, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    vec3 rayOrigin = cameraPosition;
    vec3 rayDirection = normalize(vLocalPosition - rayOrigin);
    vec3 inverseDirection = 1.0 / rayDirection;
    vec3 nearPlanes = (-vec3(1.0) - rayOrigin) * inverseDirection;
    vec3 farPlanes = ( vec3(1.0) - rayOrigin) * inverseDirection;
    vec3 nearValues = min(nearPlanes, farPlanes);
    vec3 farValues = max(nearPlanes, farPlanes);
    float rayStart = max(max(nearValues.x, nearValues.y), max(nearValues.z, 0.0));
    float rayEnd = min(min(farValues.x, farValues.y), farValues.z);
    if (rayEnd <= rayStart) discard;

    vec3 accumulatedColor = vec3(0.0);
    float accumulatedAlpha = 0.0;

    if (uRender == 1) {
      // Isosurface: first crossings of |ψ|² = level, shaded and layered front to back.
      float stepLength = (rayEnd - rayStart) / float(SURFACE_STEPS);
      float previousT = rayStart;
      float previousValue = densityAt(rayOrigin + rayDirection * rayStart) - uIsoLevel;
      int hits = 0;
      for (int step = 1; step <= SURFACE_STEPS; step++) {
        float t = rayStart + float(step) * stepLength;
        float value = densityAt(rayOrigin + rayDirection * t) - uIsoLevel;
        if (value * previousValue < 0.0) {
          float low = previousT;
          float high = t;
          float lowValue = previousValue;
          for (int refine = 0; refine < 6; refine++) {
            float mid = 0.5 * (low + high);
            float midValue = densityAt(rayOrigin + rayDirection * mid) - uIsoLevel;
            if (midValue * lowValue < 0.0) {
              high = mid;
            } else {
              low = mid;
              lowValue = midValue;
            }
          }
          vec3 hit = rayOrigin + rayDirection * (0.5 * (low + high));
          vec3 normal = normalize(densityGradient(hit) + 1e-8);
          if (dot(normal, rayDirection) > 0.0) normal = -normal;
          float facing = max(dot(normal, -rayDirection), 0.0);
          float light = 0.22 + 0.62 * facing + 0.30 * pow(facing, 24.0);
          float rim = pow(1.0 - facing, 3.0) * 0.28;
          vec2 q = psiAt(hit);
          vec3 base = uColorMode == 1 ? phaseColor(atan(q.y, q.x)) : rocketColor(0.8);
          vec3 shaded = base * light + rim * vec3(0.12, 0.16, 0.30);
          float surfaceAlpha = 0.62;
          accumulatedColor += (1.0 - accumulatedAlpha) * shaded * surfaceAlpha;
          accumulatedAlpha += (1.0 - accumulatedAlpha) * surfaceAlpha;
          hits++;
          if (hits >= 4 || accumulatedAlpha > 0.94) break;
        }
        previousValue = value;
        previousT = t;
      }
    } else if (uRender == 2) {
      // Slice: the field on one axis-aligned plane through the box.
      float originAxis = uSliceAxis == 0 ? rayOrigin.x : (uSliceAxis == 1 ? rayOrigin.y : rayOrigin.z);
      float directionAxis = uSliceAxis == 0 ? rayDirection.x : (uSliceAxis == 1 ? rayDirection.y : rayDirection.z);
      if (abs(directionAxis) > 1e-5) {
        float t = (uSlicePos - originAxis) / directionAxis;
        if (t >= rayStart && t <= rayEnd) {
          vec3 point = rayOrigin + rayDirection * t;
          vec2 q = psiAt(point);
          float shown = pow(clamp(dot(q, q), 0.0, 1.0), uGamma);
          vec3 color = uColorMode == 1
            ? phaseColor(atan(q.y, q.x)) * (0.12 + 0.88 * pow(shown, 0.6))
            : rocketColor(shown);
          vec3 inside = 1.0 - abs(point);
          float edge = uSliceAxis == 0 ? min(inside.y, inside.z)
            : (uSliceAxis == 1 ? min(inside.x, inside.z) : min(inside.x, inside.y));
          color = mix(color, vec3(0.16, 0.20, 0.30), smoothstep(0.014, 0.0, edge) * 0.6);
          accumulatedColor = color;
          accumulatedAlpha = 1.0;
        }
      }
    } else {
      // Volume: front-to-back emission/absorption with per-pixel start jitter.
      float stepLength = (rayEnd - rayStart) / float(VOLUME_STEPS);
      float jitter = hash(gl_FragCoord.xy);
      for (int step = 0; step < VOLUME_STEPS; step++) {
        float distanceAlongRay = rayStart + (float(step) + jitter) * stepLength;
        if (distanceAlongRay >= rayEnd || accumulatedAlpha > 0.985) break;
        vec2 q = psiAt(rayOrigin + rayDirection * distanceAlongRay);
        float displayedDensity = pow(clamp(dot(q, q), 0.0, 1.0), uGamma);
        if (displayedDensity <= 0.0001) continue;
        float sampleAlpha = 1.0 - exp(-displayedDensity * 18.0 * stepLength);
        vec3 sampleColor = uColorMode == 1
          ? phaseColor(atan(q.y, q.x)) * (0.35 + 0.65 * displayedDensity)
          : rocketColor(displayedDensity);
        accumulatedColor += (1.0 - accumulatedAlpha) * sampleColor * sampleAlpha;
        accumulatedAlpha += (1.0 - accumulatedAlpha) * sampleAlpha;
      }
    }

    if (accumulatedAlpha <= 0.001) discard;
    gl_FragColor = vec4(accumulatedColor / accumulatedAlpha, accumulatedAlpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

export const POINTS_VERTEX_SHADER = /* glsl */`
  attribute vec2 aValue;   // (display density, arg ψ)
  uniform float uSize;
  uniform float uScale;
  uniform float uGamma;
  uniform int uColorMode;
  varying vec3 vColor;
  ${COMMON}

  void main() {
    float shown = pow(clamp(aValue.x, 0.0, 1.0), uGamma);
    vColor = uColorMode == 1 ? phaseColor(aValue.y) : rocketColor(0.25 + 0.75 * shown);
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    gl_PointSize = clamp(uSize * uScale / max(-viewPosition.z, 0.05), 1.5, 14.0);
  }
`;

export const POINTS_FRAGMENT_SHADER = /* glsl */`
  precision highp float;
  uniform float uAlpha;
  varying vec3 vColor;

  void main() {
    vec2 offset = gl_PointCoord - 0.5;
    float radiusSquared = dot(offset, offset) * 4.0;
    if (radiusSquared > 1.0) discard;
    gl_FragColor = vec4(vColor, uAlpha * (1.0 - radiusSquared));
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;
