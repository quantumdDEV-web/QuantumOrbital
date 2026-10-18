(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function F_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var fc={exports:{}},No={},dc={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function O_(){if(mp)return ft;mp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,w={};function y(U,ne,Ue){this.props=U,this.context=ne,this.refs=w,this.updater=Ue||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=y.prototype;function I(U,ne,Ue){this.props=U,this.context=ne,this.refs=w,this.updater=Ue||S}var N=I.prototype=new g;N.constructor=I,A(N,y.prototype),N.isPureReactComponent=!0;var P=Array.isArray,X=Object.prototype.hasOwnProperty,D={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function j(U,ne,Ue){var K,ue={},Me=null,ve=null;if(ne!=null)for(K in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(Me=""+ne.key),ne)X.call(ne,K)&&!F.hasOwnProperty(K)&&(ue[K]=ne[K]);var Ae=arguments.length-2;if(Ae===1)ue.children=Ue;else if(1<Ae){for(var Ie=Array(Ae),Qe=0;Qe<Ae;Qe++)Ie[Qe]=arguments[Qe+2];ue.children=Ie}if(U&&U.defaultProps)for(K in Ae=U.defaultProps,Ae)ue[K]===void 0&&(ue[K]=Ae[K]);return{$$typeof:s,type:U,key:Me,ref:ve,props:ue,_owner:D.current}}function R(U,ne){return{$$typeof:s,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function V(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ue){return ne[Ue]})}var ae=/\/+/g;function J(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?V(""+U.key):ne.toString(36)}function oe(U,ne,Ue,K,ue){var Me=typeof U;(Me==="undefined"||Me==="boolean")&&(U=null);var ve=!1;if(U===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(U.$$typeof){case s:case e:ve=!0}}if(ve)return ve=U,ue=ue(ve),U=K===""?"."+J(ve,0):K,P(ue)?(Ue="",U!=null&&(Ue=U.replace(ae,"$&/")+"/"),oe(ue,ne,Ue,"",function(Qe){return Qe})):ue!=null&&(C(ue)&&(ue=R(ue,Ue+(!ue.key||ve&&ve.key===ue.key?"":(""+ue.key).replace(ae,"$&/")+"/")+U)),ne.push(ue)),1;if(ve=0,K=K===""?".":K+":",P(U))for(var Ae=0;Ae<U.length;Ae++){Me=U[Ae];var Ie=K+J(Me,Ae);ve+=oe(Me,ne,Ue,Ie,ue)}else if(Ie=x(U),typeof Ie=="function")for(U=Ie.call(U),Ae=0;!(Me=U.next()).done;)Me=Me.value,Ie=K+J(Me,Ae++),ve+=oe(Me,ne,Ue,Ie,ue);else if(Me==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function pe(U,ne,Ue){if(U==null)return U;var K=[],ue=0;return oe(U,K,"","",function(Me){return ne.call(Ue,Me,ue++)}),K}function se(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(Ue){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ue)},function(Ue){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ue)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var he={current:null},k={transition:null},le={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:k,ReactCurrentOwner:D};function re(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:pe,forEach:function(U,ne,Ue){pe(U,function(){ne.apply(this,arguments)},Ue)},count:function(U){var ne=0;return pe(U,function(){ne++}),ne},toArray:function(U){return pe(U,function(ne){return ne})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ft.Component=y,ft.Fragment=n,ft.Profiler=a,ft.PureComponent=I,ft.StrictMode=r,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,ft.act=re,ft.cloneElement=function(U,ne,Ue){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var K=A({},U.props),ue=U.key,Me=U.ref,ve=U._owner;if(ne!=null){if(ne.ref!==void 0&&(Me=ne.ref,ve=D.current),ne.key!==void 0&&(ue=""+ne.key),U.type&&U.type.defaultProps)var Ae=U.type.defaultProps;for(Ie in ne)X.call(ne,Ie)&&!F.hasOwnProperty(Ie)&&(K[Ie]=ne[Ie]===void 0&&Ae!==void 0?Ae[Ie]:ne[Ie])}var Ie=arguments.length-2;if(Ie===1)K.children=Ue;else if(1<Ie){Ae=Array(Ie);for(var Qe=0;Qe<Ie;Qe++)Ae[Qe]=arguments[Qe+2];K.children=Ae}return{$$typeof:s,type:U.type,key:ue,ref:Me,props:K,_owner:ve}},ft.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:u,_context:U},U.Consumer=U},ft.createElement=j,ft.createFactory=function(U){var ne=j.bind(null,U);return ne.type=U,ne},ft.createRef=function(){return{current:null}},ft.forwardRef=function(U){return{$$typeof:f,render:U}},ft.isValidElement=C,ft.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:se}},ft.memo=function(U,ne){return{$$typeof:m,type:U,compare:ne===void 0?null:ne}},ft.startTransition=function(U){var ne=k.transition;k.transition={};try{U()}finally{k.transition=ne}},ft.unstable_act=re,ft.useCallback=function(U,ne){return he.current.useCallback(U,ne)},ft.useContext=function(U){return he.current.useContext(U)},ft.useDebugValue=function(){},ft.useDeferredValue=function(U){return he.current.useDeferredValue(U)},ft.useEffect=function(U,ne){return he.current.useEffect(U,ne)},ft.useId=function(){return he.current.useId()},ft.useImperativeHandle=function(U,ne,Ue){return he.current.useImperativeHandle(U,ne,Ue)},ft.useInsertionEffect=function(U,ne){return he.current.useInsertionEffect(U,ne)},ft.useLayoutEffect=function(U,ne){return he.current.useLayoutEffect(U,ne)},ft.useMemo=function(U,ne){return he.current.useMemo(U,ne)},ft.useReducer=function(U,ne,Ue){return he.current.useReducer(U,ne,Ue)},ft.useRef=function(U){return he.current.useRef(U)},ft.useState=function(U){return he.current.useState(U)},ft.useSyncExternalStore=function(U,ne,Ue){return he.current.useSyncExternalStore(U,ne,Ue)},ft.useTransition=function(){return he.current.useTransition()},ft.version="18.3.1",ft}var gp;function If(){return gp||(gp=1,dc.exports=O_()),dc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function B_(){if(_p)return No;_p=1;var s=If(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var _,v={},x=null,S=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(v[_]=p[_]);if(f&&f.defaultProps)for(_ in p=f.defaultProps,p)v[_]===void 0&&(v[_]=p[_]);return{$$typeof:e,type:f,key:x,ref:S,props:v,_owner:a.current}}return No.Fragment=n,No.jsx=d,No.jsxs=d,No}var vp;function k_(){return vp||(vp=1,fc.exports=B_()),fc.exports}var Ee=k_(),un=If();const z_=F_(un);var $a={},hc={exports:{}},Nn={},pc={exports:{}},mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function H_(){return xp||(xp=1,(function(s){function e(k,le){var re=k.length;k.push(le);e:for(;0<re;){var U=re-1>>>1,ne=k[U];if(0<a(ne,le))k[U]=le,k[re]=ne,re=U;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var le=k[0],re=k.pop();if(re!==le){k[0]=re;e:for(var U=0,ne=k.length,Ue=ne>>>1;U<Ue;){var K=2*(U+1)-1,ue=k[K],Me=K+1,ve=k[Me];if(0>a(ue,re))Me<ne&&0>a(ve,ue)?(k[U]=ve,k[Me]=re,U=Me):(k[U]=ue,k[K]=re,U=K);else if(Me<ne&&0>a(ve,re))k[U]=ve,k[Me]=re,U=Me;else break e}}return le}function a(k,le){var re=k.sortIndex-le.sortIndex;return re!==0?re:k.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],m=[],_=1,v=null,x=3,S=!1,A=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(k){for(var le=n(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=k)r(m),le.sortIndex=le.expirationTime,e(p,le);else break;le=n(m)}}function P(k){if(w=!1,N(k),!A)if(n(p)!==null)A=!0,se(X);else{var le=n(m);le!==null&&he(P,le.startTime-k)}}function X(k,le){A=!1,w&&(w=!1,g(j),j=-1),S=!0;var re=x;try{for(N(le),v=n(p);v!==null&&(!(v.expirationTime>le)||k&&!V());){var U=v.callback;if(typeof U=="function"){v.callback=null,x=v.priorityLevel;var ne=U(v.expirationTime<=le);le=s.unstable_now(),typeof ne=="function"?v.callback=ne:v===n(p)&&r(p),N(le)}else r(p);v=n(p)}if(v!==null)var Ue=!0;else{var K=n(m);K!==null&&he(P,K.startTime-le),Ue=!1}return Ue}finally{v=null,x=re,S=!1}}var D=!1,F=null,j=-1,R=5,C=-1;function V(){return!(s.unstable_now()-C<R)}function ae(){if(F!==null){var k=s.unstable_now();C=k;var le=!0;try{le=F(!0,k)}finally{le?J():(D=!1,F=null)}}else D=!1}var J;if(typeof I=="function")J=function(){I(ae)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,pe=oe.port2;oe.port1.onmessage=ae,J=function(){pe.postMessage(null)}}else J=function(){y(ae,0)};function se(k){F=k,D||(D=!0,J())}function he(k,le){j=y(function(){k(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(k){k.callback=null},s.unstable_continueExecution=function(){A||S||(A=!0,se(X))},s.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<k?Math.floor(1e3/k):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(k){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var re=x;x=le;try{return k()}finally{x=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(k,le){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var re=x;x=k;try{return le()}finally{x=re}},s.unstable_scheduleCallback=function(k,le,re){var U=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,k){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,k={id:_++,callback:le,priorityLevel:k,startTime:re,expirationTime:ne,sortIndex:-1},re>U?(k.sortIndex=re,e(m,k),n(p)===null&&k===n(m)&&(w?(g(j),j=-1):w=!0,he(P,re-U))):(k.sortIndex=ne,e(p,k),A||S||(A=!0,se(X))),k},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(k){var le=x;return function(){var re=x;x=le;try{return k.apply(this,arguments)}finally{x=re}}}})(mc)),mc}var yp;function V_(){return yp||(yp=1,pc.exports=H_()),pc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function G_(){if(Sp)return Nn;Sp=1;var s=If(),e=V_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return p.call(v,t)?!0:p.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,o,l,c,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,I);y[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,I);y[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,I);y[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function N(t,i,o,l){var c=y.hasOwnProperty(i)?y[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,o,c,l)&&(o=null),l||c===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),D=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),V=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),k=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,U;function ne(t){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Ue=!1;function K(t,i){if(!t||Ue)return"";Ue=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Q){var l=Q}Reflect.construct(t,[],i)}else{try{i.call()}catch(Q){l=Q}t.call(i.prototype)}else{try{throw Error()}catch(Q){l=Q}t()}}catch(Q){if(Q&&l&&typeof Q.stack=="string"){for(var c=Q.stack.split(`
`),h=l.stack.split(`
`),E=c.length-1,L=h.length-1;1<=E&&0<=L&&c[E]!==h[L];)L--;for(;1<=E&&0<=L;E--,L--)if(c[E]!==h[L]){if(E!==1||L!==1)do if(E--,L--,0>L||c[E]!==h[L]){var O=`
`+c[E].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=E&&0<=L);break}}}finally{Ue=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ne(t):""}function ue(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=K(t.type,!1),t;case 11:return t=K(t.type.render,!1),t;case 1:return t=K(t.type,!0),t;default:return""}}function Me(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case D:return"Portal";case R:return"Profiler";case j:return"StrictMode";case J:return"Suspense";case oe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case ae:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pe:return i=t.displayName||null,i!==null?i:Me(t.type)||"Memo";case se:i=t._payload,t=t._init;try{return Me(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ie(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(t){var i=Ie(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ct(t){t._valueTracker||(t._valueTracker=Qe(t))}function gt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ie(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function B(t,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function vn(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(t,i){i=i.checked,i!=null&&N(t,"checked",i,!1)}function ut(t,i){ht(t,i);var o=Ae(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?wt(t,i.type,o):i.hasOwnProperty("defaultValue")&&wt(t,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function wt(t,i,o){(i!=="number"||Lt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Xe=Array.isArray;function b(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function M(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Xe(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ae(o)}}function de(t,i){var o=Ae(i.value),l=Ae(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ce(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ce(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var we,Fe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=we.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function lt(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(t){ke.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Se[i]=Se[t]})});function $e(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Se.hasOwnProperty(t)&&Se[t]?(""+i).trim():i+"px"}function Je(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=$e(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var ze=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(t,i){if(i){if(ze[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function it(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function G(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ce=null,ie=null,fe=null;function De(t){if(t=vo(t)){if(typeof Ce!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ca(i),Ce(t.stateNode,t.type,i))}}function be(t){ie?fe?fe.push(t):fe=[t]:ie=t}function rt(){if(ie){var t=ie,i=fe;if(fe=ie=null,De(t),i)for(t=0;t<i.length;t++)De(i[t])}}function Ut(t,i){return t(i)}function $t(){}var xt=!1;function Cn(t,i,o){if(xt)return t(i,o);xt=!0;try{return Ut(t,i,o)}finally{xt=!1,(ie!==null||fe!==null)&&($t(),rt())}}function xn(t,i){var o=t.stateNode;if(o===null)return null;var l=ca(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var es=!1;if(f)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){es=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{es=!1}function Ei(t,i,o,l,c,h,E,L,O){var Q=Array.prototype.slice.call(arguments,3);try{i.apply(o,Q)}catch(_e){this.onError(_e)}}var Mi=!1,Er=null,Mr=!1,Yi=null,Go={onError:function(t){Mi=!0,Er=t}};function ts(t,i,o,l,c,h,E,L,O){Mi=!1,Er=null,Ei.apply(Go,arguments)}function Wo(t,i,o,l,c,h,E,L,O){if(ts.apply(this,arguments),Mi){if(Mi){var Q=Er;Mi=!1,Er=null}else throw Error(n(198));Mr||(Mr=!0,Yi=Q)}}function hi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Xo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function jo(t){if(hi(t)!==t)throw Error(n(188))}function Ul(t){var i=t.alternate;if(!i){if(i=hi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return jo(c),t;if(h===l)return jo(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=h;else{for(var E=!1,L=c.child;L;){if(L===o){E=!0,o=c,l=h;break}if(L===l){E=!0,l=c,o=h;break}L=L.sibling}if(!E){for(L=h.child;L;){if(L===o){E=!0,o=h,l=c;break}if(L===l){E=!0,l=h,o=c;break}L=L.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Yo(t){return t=Ul(t),t!==null?qo(t):null}function qo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=qo(t);if(i!==null)return i;t=t.sibling}return null}var T=e.unstable_scheduleCallback,W=e.unstable_cancelCallback,ee=e.unstable_shouldYield,te=e.unstable_requestPaint,z=e.unstable_now,ye=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,Ne=e.unstable_UserBlockingPriority,Oe=e.unstable_NormalPriority,et=e.unstable_LowPriority,tt=e.unstable_IdlePriority,je=null,st=null;function St(t){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(je,t,void 0,(t.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:qe,Ot=Math.log,vt=Math.LN2;function qe(t){return t>>>=0,t===0?32:31-(Ot(t)/vt|0)|0}var Ht=64,_t=4194304;function on(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ni(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,E=o&268435455;if(E!==0){var L=E&~c;L!==0?l=on(L):(h&=E,h!==0&&(l=on(h)))}else E=o&~c,E!==0?l=on(E):h!==0&&(l=on(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-Et(i),c=1<<o,l|=t[o],i&=~c;return l}function yn(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tr(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-Et(h),L=1<<E,O=c[E];O===-1?((L&o)===0||(L&l)!==0)&&(c[E]=yn(L,i)):O<=i&&(t.expiredLanes|=L),h&=~L}}function Rt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sn(){var t=Ht;return Ht<<=1,(Ht&4194240)===0&&(Ht=64),t}function cn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Gt(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Et(i),t[i]=o}function fn(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Et(o),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~h}}function Ar(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-Et(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var pt=0;function Yf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var qf,Il,$f,Kf,Zf,Fl=!1,$o=[],qi=null,$i=null,Ki=null,to=new Map,no=new Map,Zi=[],rg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qf(t,i){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":to.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(i.pointerId)}}function io(t,i,o,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=vo(i),i!==null&&Il(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function sg(t,i,o,l,c){switch(i){case"focusin":return qi=io(qi,t,i,o,l,c),!0;case"dragenter":return $i=io($i,t,i,o,l,c),!0;case"mouseover":return Ki=io(Ki,t,i,o,l,c),!0;case"pointerover":var h=c.pointerId;return to.set(h,io(to.get(h)||null,t,i,o,l,c)),!0;case"gotpointercapture":return h=c.pointerId,no.set(h,io(no.get(h)||null,t,i,o,l,c)),!0}return!1}function Jf(t){var i=wr(t.target);if(i!==null){var o=hi(i);if(o!==null){if(i=o.tag,i===13){if(i=Xo(o),i!==null){t.blockedOn=i,Zf(t.priority,function(){$f(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ko(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Bl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);At=l,o.target.dispatchEvent(l),At=null}else return i=vo(o),i!==null&&Il(i),t.blockedOn=o,!1;i.shift()}return!0}function ed(t,i,o){Ko(t)&&o.delete(i)}function og(){Fl=!1,qi!==null&&Ko(qi)&&(qi=null),$i!==null&&Ko($i)&&($i=null),Ki!==null&&Ko(Ki)&&(Ki=null),to.forEach(ed),no.forEach(ed)}function ro(t,i){t.blockedOn===i&&(t.blockedOn=null,Fl||(Fl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,og)))}function so(t){function i(c){return ro(c,t)}if(0<$o.length){ro($o[0],t);for(var o=1;o<$o.length;o++){var l=$o[o];l.blockedOn===t&&(l.blockedOn=null)}}for(qi!==null&&ro(qi,t),$i!==null&&ro($i,t),Ki!==null&&ro(Ki,t),to.forEach(i),no.forEach(i),o=0;o<Zi.length;o++)l=Zi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Zi.length&&(o=Zi[0],o.blockedOn===null);)Jf(o),o.blockedOn===null&&Zi.shift()}var ns=P.ReactCurrentBatchConfig,Zo=!0;function ag(t,i,o,l){var c=pt,h=ns.transition;ns.transition=null;try{pt=1,Ol(t,i,o,l)}finally{pt=c,ns.transition=h}}function lg(t,i,o,l){var c=pt,h=ns.transition;ns.transition=null;try{pt=4,Ol(t,i,o,l)}finally{pt=c,ns.transition=h}}function Ol(t,i,o,l){if(Zo){var c=Bl(t,i,o,l);if(c===null)tu(t,i,l,Qo,o),Qf(t,l);else if(sg(c,t,i,o,l))l.stopPropagation();else if(Qf(t,l),i&4&&-1<rg.indexOf(t)){for(;c!==null;){var h=vo(c);if(h!==null&&qf(h),h=Bl(t,i,o,l),h===null&&tu(t,i,l,Qo,o),h===c)break;c=h}c!==null&&l.stopPropagation()}else tu(t,i,l,null,o)}}var Qo=null;function Bl(t,i,o,l){if(Qo=null,t=G(l),t=wr(t),t!==null)if(i=hi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Xo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Qo=t,null}function td(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ye()){case Re:return 1;case Ne:return 4;case Oe:case et:return 16;case tt:return 536870912;default:return 16}default:return 16}}var Qi=null,kl=null,Jo=null;function nd(){if(Jo)return Jo;var t,i=kl,o=i.length,l,c="value"in Qi?Qi.value:Qi.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var E=o-t;for(l=1;l<=E&&i[o-l]===c[h-l];l++);return Jo=c.slice(t,1<l?1-l:void 0)}function ea(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ta(){return!0}function id(){return!1}function On(t){function i(o,l,c,h,E){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(o=t[L],this[L]=o?o(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ta:id,this.isPropagationStopped=id,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),i}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=On(is),oo=re({},is,{view:0,detail:0}),ug=On(oo),Hl,Vl,ao,na=re({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ao&&(ao&&t.type==="mousemove"?(Hl=t.screenX-ao.screenX,Vl=t.screenY-ao.screenY):Vl=Hl=0,ao=t),Hl)},movementY:function(t){return"movementY"in t?t.movementY:Vl}}),rd=On(na),cg=re({},na,{dataTransfer:0}),fg=On(cg),dg=re({},oo,{relatedTarget:0}),Gl=On(dg),hg=re({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),pg=On(hg),mg=re({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gg=On(mg),_g=re({},is,{data:0}),sd=On(_g),vg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=yg[t])?!!i[t]:!1}function Wl(){return Sg}var Eg=re({},oo,{key:function(t){if(t.key){var i=vg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ea(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wl,charCode:function(t){return t.type==="keypress"?ea(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ea(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Mg=On(Eg),Tg=re({},na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),od=On(Tg),Ag=re({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wl}),wg=On(Ag),Cg=re({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rg=On(Cg),Pg=re({},na,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bg=On(Pg),Dg=[9,13,27,32],Xl=f&&"CompositionEvent"in window,lo=null;f&&"documentMode"in document&&(lo=document.documentMode);var Lg=f&&"TextEvent"in window&&!lo,ad=f&&(!Xl||lo&&8<lo&&11>=lo),ld=" ",ud=!1;function cd(t,i){switch(t){case"keyup":return Dg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function Ng(t,i){switch(t){case"compositionend":return fd(i);case"keypress":return i.which!==32?null:(ud=!0,ld);case"textInput":return t=i.data,t===ld&&ud?null:t;default:return null}}function Ug(t,i){if(rs)return t==="compositionend"||!Xl&&cd(t,i)?(t=nd(),Jo=kl=Qi=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ad&&i.locale!=="ko"?null:i.data;default:return null}}var Ig={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Ig[t.type]:i==="textarea"}function hd(t,i,o,l){be(l),i=aa(i,"onChange"),0<i.length&&(o=new zl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var uo=null,co=null;function Fg(t){Dd(t,0)}function ia(t){var i=us(t);if(gt(i))return t}function Og(t,i){if(t==="change")return i}var pd=!1;if(f){var jl;if(f){var Yl="oninput"in document;if(!Yl){var md=document.createElement("div");md.setAttribute("oninput","return;"),Yl=typeof md.oninput=="function"}jl=Yl}else jl=!1;pd=jl&&(!document.documentMode||9<document.documentMode)}function gd(){uo&&(uo.detachEvent("onpropertychange",_d),co=uo=null)}function _d(t){if(t.propertyName==="value"&&ia(co)){var i=[];hd(i,co,t,G(t)),Cn(Fg,i)}}function Bg(t,i,o){t==="focusin"?(gd(),uo=i,co=o,uo.attachEvent("onpropertychange",_d)):t==="focusout"&&gd()}function kg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ia(co)}function zg(t,i){if(t==="click")return ia(i)}function Hg(t,i){if(t==="input"||t==="change")return ia(i)}function Vg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ii=typeof Object.is=="function"?Object.is:Vg;function fo(t,i){if(ii(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!p.call(i,c)||!ii(t[c],i[c]))return!1}return!0}function vd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xd(t,i){var o=vd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=vd(o)}}function yd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?yd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Sd(){for(var t=window,i=Lt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Lt(t.document)}return i}function ql(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Gg(t){var i=Sd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&yd(o.ownerDocument.documentElement,o)){if(l!==null&&ql(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=xd(o,h);var E=xd(o,l);c&&E&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Wg=f&&"documentMode"in document&&11>=document.documentMode,ss=null,$l=null,ho=null,Kl=!1;function Ed(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Kl||ss==null||ss!==Lt(l)||(l=ss,"selectionStart"in l&&ql(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ho&&fo(ho,l)||(ho=l,l=aa($l,"onSelect"),0<l.length&&(i=new zl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=ss)))}function ra(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var os={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},Zl={},Md={};f&&(Md=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function sa(t){if(Zl[t])return Zl[t];if(!os[t])return t;var i=os[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Md)return Zl[t]=i[o];return t}var Td=sa("animationend"),Ad=sa("animationiteration"),wd=sa("animationstart"),Cd=sa("transitionend"),Rd=new Map,Pd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(t,i){Rd.set(t,i),u(i,[t])}for(var Ql=0;Ql<Pd.length;Ql++){var Jl=Pd[Ql],Xg=Jl.toLowerCase(),jg=Jl[0].toUpperCase()+Jl.slice(1);Ji(Xg,"on"+jg)}Ji(Td,"onAnimationEnd"),Ji(Ad,"onAnimationIteration"),Ji(wd,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(Cd,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yg=new Set("cancel close invalid load scroll toggle".split(" ").concat(po));function bd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Wo(l,i,void 0,t),t.currentTarget=null}function Dd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var L=l[E],O=L.instance,Q=L.currentTarget;if(L=L.listener,O!==h&&c.isPropagationStopped())break e;bd(c,L,Q),h=O}else for(E=0;E<l.length;E++){if(L=l[E],O=L.instance,Q=L.currentTarget,L=L.listener,O!==h&&c.isPropagationStopped())break e;bd(c,L,Q),h=O}}}if(Mr)throw t=Yi,Mr=!1,Yi=null,t}function It(t,i){var o=i[au];o===void 0&&(o=i[au]=new Set);var l=t+"__bubble";o.has(l)||(Ld(i,t,2,!1),o.add(l))}function eu(t,i,o){var l=0;i&&(l|=4),Ld(o,t,l,i)}var oa="_reactListening"+Math.random().toString(36).slice(2);function mo(t){if(!t[oa]){t[oa]=!0,r.forEach(function(o){o!=="selectionchange"&&(Yg.has(o)||eu(o,!1,t),eu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[oa]||(i[oa]=!0,eu("selectionchange",!1,i))}}function Ld(t,i,o,l){switch(td(i)){case 1:var c=ag;break;case 4:c=lg;break;default:c=Ol}o=c.bind(null,i,o,t),c=void 0,!es||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function tu(t,i,o,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var L=l.stateNode.containerInfo;if(L===c||L.nodeType===8&&L.parentNode===c)break;if(E===4)for(E=l.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===c||O.nodeType===8&&O.parentNode===c))return;E=E.return}for(;L!==null;){if(E=wr(L),E===null)return;if(O=E.tag,O===5||O===6){l=h=E;continue e}L=L.parentNode}}l=l.return}Cn(function(){var Q=h,_e=G(o),xe=[];e:{var me=Rd.get(t);if(me!==void 0){var Le=zl,He=t;switch(t){case"keypress":if(ea(o)===0)break e;case"keydown":case"keyup":Le=Mg;break;case"focusin":He="focus",Le=Gl;break;case"focusout":He="blur",Le=Gl;break;case"beforeblur":case"afterblur":Le=Gl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=wg;break;case Td:case Ad:case wd:Le=pg;break;case Cd:Le=Rg;break;case"scroll":Le=ug;break;case"wheel":Le=bg;break;case"copy":case"cut":case"paste":Le=gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=od}var Ve=(i&4)!==0,Wt=!Ve&&t==="scroll",Y=Ve?me!==null?me+"Capture":null:me;Ve=[];for(var H=Q,q;H!==null;){q=H;var Te=q.stateNode;if(q.tag===5&&Te!==null&&(q=Te,Y!==null&&(Te=xn(H,Y),Te!=null&&Ve.push(go(H,Te,q)))),Wt)break;H=H.return}0<Ve.length&&(me=new Le(me,He,null,o,_e),xe.push({event:me,listeners:Ve}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",Le=t==="mouseout"||t==="pointerout",me&&o!==At&&(He=o.relatedTarget||o.fromElement)&&(wr(He)||He[Ti]))break e;if((Le||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,Le?(He=o.relatedTarget||o.toElement,Le=Q,He=He?wr(He):null,He!==null&&(Wt=hi(He),He!==Wt||He.tag!==5&&He.tag!==6)&&(He=null)):(Le=null,He=Q),Le!==He)){if(Ve=rd,Te="onMouseLeave",Y="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=od,Te="onPointerLeave",Y="onPointerEnter",H="pointer"),Wt=Le==null?me:us(Le),q=He==null?me:us(He),me=new Ve(Te,H+"leave",Le,o,_e),me.target=Wt,me.relatedTarget=q,Te=null,wr(_e)===Q&&(Ve=new Ve(Y,H+"enter",He,o,_e),Ve.target=q,Ve.relatedTarget=Wt,Te=Ve),Wt=Te,Le&&He)t:{for(Ve=Le,Y=He,H=0,q=Ve;q;q=as(q))H++;for(q=0,Te=Y;Te;Te=as(Te))q++;for(;0<H-q;)Ve=as(Ve),H--;for(;0<q-H;)Y=as(Y),q--;for(;H--;){if(Ve===Y||Y!==null&&Ve===Y.alternate)break t;Ve=as(Ve),Y=as(Y)}Ve=null}else Ve=null;Le!==null&&Nd(xe,me,Le,Ve,!1),He!==null&&Wt!==null&&Nd(xe,Wt,He,Ve,!0)}}e:{if(me=Q?us(Q):window,Le=me.nodeName&&me.nodeName.toLowerCase(),Le==="select"||Le==="input"&&me.type==="file")var We=Og;else if(dd(me))if(pd)We=Hg;else{We=kg;var Ke=Bg}else(Le=me.nodeName)&&Le.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(We=zg);if(We&&(We=We(t,Q))){hd(xe,We,o,_e);break e}Ke&&Ke(t,me,Q),t==="focusout"&&(Ke=me._wrapperState)&&Ke.controlled&&me.type==="number"&&wt(me,"number",me.value)}switch(Ke=Q?us(Q):window,t){case"focusin":(dd(Ke)||Ke.contentEditable==="true")&&(ss=Ke,$l=Q,ho=null);break;case"focusout":ho=$l=ss=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,Ed(xe,o,_e);break;case"selectionchange":if(Wg)break;case"keydown":case"keyup":Ed(xe,o,_e)}var Ze;if(Xl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else rs?cd(t,o)&&(nt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(ad&&o.locale!=="ko"&&(rs||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&rs&&(Ze=nd()):(Qi=_e,kl="value"in Qi?Qi.value:Qi.textContent,rs=!0)),Ke=aa(Q,nt),0<Ke.length&&(nt=new sd(nt,t,null,o,_e),xe.push({event:nt,listeners:Ke}),Ze?nt.data=Ze:(Ze=fd(o),Ze!==null&&(nt.data=Ze)))),(Ze=Lg?Ng(t,o):Ug(t,o))&&(Q=aa(Q,"onBeforeInput"),0<Q.length&&(_e=new sd("onBeforeInput","beforeinput",null,o,_e),xe.push({event:_e,listeners:Q}),_e.data=Ze))}Dd(xe,i)})}function go(t,i,o){return{instance:t,listener:i,currentTarget:o}}function aa(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=xn(t,o),h!=null&&l.unshift(go(t,h,c)),h=xn(t,i),h!=null&&l.push(go(t,h,c))),t=t.return}return l}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nd(t,i,o,l,c){for(var h=i._reactName,E=[];o!==null&&o!==l;){var L=o,O=L.alternate,Q=L.stateNode;if(O!==null&&O===l)break;L.tag===5&&Q!==null&&(L=Q,c?(O=xn(o,h),O!=null&&E.unshift(go(o,O,L))):c||(O=xn(o,h),O!=null&&E.push(go(o,O,L)))),o=o.return}E.length!==0&&t.push({event:i,listeners:E})}var qg=/\r\n?/g,$g=/\u0000|\uFFFD/g;function Ud(t){return(typeof t=="string"?t:""+t).replace(qg,`
`).replace($g,"")}function la(t,i,o){if(i=Ud(i),Ud(t)!==i&&o)throw Error(n(425))}function ua(){}var nu=null,iu=null;function ru(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var su=typeof setTimeout=="function"?setTimeout:void 0,Kg=typeof clearTimeout=="function"?clearTimeout:void 0,Id=typeof Promise=="function"?Promise:void 0,Zg=typeof queueMicrotask=="function"?queueMicrotask:typeof Id<"u"?function(t){return Id.resolve(null).then(t).catch(Qg)}:su;function Qg(t){setTimeout(function(){throw t})}function ou(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),so(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);so(i)}function er(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Fd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),pi="__reactFiber$"+ls,_o="__reactProps$"+ls,Ti="__reactContainer$"+ls,au="__reactEvents$"+ls,Jg="__reactListeners$"+ls,e_="__reactHandles$"+ls;function wr(t){var i=t[pi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ti]||o[pi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Fd(t);t!==null;){if(o=t[pi])return o;t=Fd(t)}return i}t=o,o=t.parentNode}return null}function vo(t){return t=t[pi]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ca(t){return t[_o]||null}var lu=[],cs=-1;function tr(t){return{current:t}}function Ft(t){0>cs||(t.current=lu[cs],lu[cs]=null,cs--)}function Nt(t,i){cs++,lu[cs]=t.current,t.current=i}var nr={},dn=tr(nr),Rn=tr(!1),Cr=nr;function fs(t,i){var o=t.type.contextTypes;if(!o)return nr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function Pn(t){return t=t.childContextTypes,t!=null}function fa(){Ft(Rn),Ft(dn)}function Od(t,i,o){if(dn.current!==nr)throw Error(n(168));Nt(dn,i),Nt(Rn,o)}function Bd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ve(t)||"Unknown",c));return re({},o,l)}function da(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Cr=dn.current,Nt(dn,t),Nt(Rn,Rn.current),!0}function kd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Bd(t,i,Cr),l.__reactInternalMemoizedMergedChildContext=t,Ft(Rn),Ft(dn),Nt(dn,t)):Ft(Rn),Nt(Rn,o)}var Ai=null,ha=!1,uu=!1;function zd(t){Ai===null?Ai=[t]:Ai.push(t)}function t_(t){ha=!0,zd(t)}function ir(){if(!uu&&Ai!==null){uu=!0;var t=0,i=pt;try{var o=Ai;for(pt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ai=null,ha=!1}catch(c){throw Ai!==null&&(Ai=Ai.slice(t+1)),T(Re,ir),c}finally{pt=i,uu=!1}}return null}var ds=[],hs=0,pa=null,ma=0,Xn=[],jn=0,Rr=null,wi=1,Ci="";function Pr(t,i){ds[hs++]=ma,ds[hs++]=pa,pa=t,ma=i}function Hd(t,i,o){Xn[jn++]=wi,Xn[jn++]=Ci,Xn[jn++]=Rr,Rr=t;var l=wi;t=Ci;var c=32-Et(l)-1;l&=~(1<<c),o+=1;var h=32-Et(i)+c;if(30<h){var E=c-c%5;h=(l&(1<<E)-1).toString(32),l>>=E,c-=E,wi=1<<32-Et(i)+c|o<<c|l,Ci=h+t}else wi=1<<h|o<<c|l,Ci=t}function cu(t){t.return!==null&&(Pr(t,1),Hd(t,1,0))}function fu(t){for(;t===pa;)pa=ds[--hs],ds[hs]=null,ma=ds[--hs],ds[hs]=null;for(;t===Rr;)Rr=Xn[--jn],Xn[jn]=null,Ci=Xn[--jn],Xn[jn]=null,wi=Xn[--jn],Xn[jn]=null}var Bn=null,kn=null,Bt=!1,ri=null;function Vd(t,i){var o=Kn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Gd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Bn=t,kn=er(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Bn=t,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Rr!==null?{id:wi,overflow:Ci}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Kn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Bn=t,kn=null,!0):!1;default:return!1}}function du(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hu(t){if(Bt){var i=kn;if(i){var o=i;if(!Gd(t,i)){if(du(t))throw Error(n(418));i=er(o.nextSibling);var l=Bn;i&&Gd(t,i)?Vd(l,o):(t.flags=t.flags&-4097|2,Bt=!1,Bn=t)}}else{if(du(t))throw Error(n(418));t.flags=t.flags&-4097|2,Bt=!1,Bn=t}}}function Wd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bn=t}function ga(t){if(t!==Bn)return!1;if(!Bt)return Wd(t),Bt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ru(t.type,t.memoizedProps)),i&&(i=kn)){if(du(t))throw Xd(),Error(n(418));for(;i;)Vd(t,i),i=er(i.nextSibling)}if(Wd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){kn=er(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}kn=null}}else kn=Bn?er(t.stateNode.nextSibling):null;return!0}function Xd(){for(var t=kn;t;)t=er(t.nextSibling)}function ps(){kn=Bn=null,Bt=!1}function pu(t){ri===null?ri=[t]:ri.push(t)}var n_=P.ReactCurrentBatchConfig;function xo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var L=c.refs;E===null?delete L[h]:L[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function _a(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function jd(t){var i=t._init;return i(t._payload)}function Yd(t){function i(Y,H){if(t){var q=Y.deletions;q===null?(Y.deletions=[H],Y.flags|=16):q.push(H)}}function o(Y,H){if(!t)return null;for(;H!==null;)i(Y,H),H=H.sibling;return null}function l(Y,H){for(Y=new Map;H!==null;)H.key!==null?Y.set(H.key,H):Y.set(H.index,H),H=H.sibling;return Y}function c(Y,H){return Y=fr(Y,H),Y.index=0,Y.sibling=null,Y}function h(Y,H,q){return Y.index=q,t?(q=Y.alternate,q!==null?(q=q.index,q<H?(Y.flags|=2,H):q):(Y.flags|=2,H)):(Y.flags|=1048576,H)}function E(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function L(Y,H,q,Te){return H===null||H.tag!==6?(H=sc(q,Y.mode,Te),H.return=Y,H):(H=c(H,q),H.return=Y,H)}function O(Y,H,q,Te){var We=q.type;return We===F?_e(Y,H,q.props.children,Te,q.key):H!==null&&(H.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===se&&jd(We)===H.type)?(Te=c(H,q.props),Te.ref=xo(Y,H,q),Te.return=Y,Te):(Te=Ha(q.type,q.key,q.props,null,Y.mode,Te),Te.ref=xo(Y,H,q),Te.return=Y,Te)}function Q(Y,H,q,Te){return H===null||H.tag!==4||H.stateNode.containerInfo!==q.containerInfo||H.stateNode.implementation!==q.implementation?(H=oc(q,Y.mode,Te),H.return=Y,H):(H=c(H,q.children||[]),H.return=Y,H)}function _e(Y,H,q,Te,We){return H===null||H.tag!==7?(H=Or(q,Y.mode,Te,We),H.return=Y,H):(H=c(H,q),H.return=Y,H)}function xe(Y,H,q){if(typeof H=="string"&&H!==""||typeof H=="number")return H=sc(""+H,Y.mode,q),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case X:return q=Ha(H.type,H.key,H.props,null,Y.mode,q),q.ref=xo(Y,null,H),q.return=Y,q;case D:return H=oc(H,Y.mode,q),H.return=Y,H;case se:var Te=H._init;return xe(Y,Te(H._payload),q)}if(Xe(H)||le(H))return H=Or(H,Y.mode,q,null),H.return=Y,H;_a(Y,H)}return null}function me(Y,H,q,Te){var We=H!==null?H.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return We!==null?null:L(Y,H,""+q,Te);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case X:return q.key===We?O(Y,H,q,Te):null;case D:return q.key===We?Q(Y,H,q,Te):null;case se:return We=q._init,me(Y,H,We(q._payload),Te)}if(Xe(q)||le(q))return We!==null?null:_e(Y,H,q,Te,null);_a(Y,q)}return null}function Le(Y,H,q,Te,We){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get(q)||null,L(H,Y,""+Te,We);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case X:return Y=Y.get(Te.key===null?q:Te.key)||null,O(H,Y,Te,We);case D:return Y=Y.get(Te.key===null?q:Te.key)||null,Q(H,Y,Te,We);case se:var Ke=Te._init;return Le(Y,H,q,Ke(Te._payload),We)}if(Xe(Te)||le(Te))return Y=Y.get(q)||null,_e(H,Y,Te,We,null);_a(H,Te)}return null}function He(Y,H,q,Te){for(var We=null,Ke=null,Ze=H,nt=H=0,rn=null;Ze!==null&&nt<q.length;nt++){Ze.index>nt?(rn=Ze,Ze=null):rn=Ze.sibling;var Mt=me(Y,Ze,q[nt],Te);if(Mt===null){Ze===null&&(Ze=rn);break}t&&Ze&&Mt.alternate===null&&i(Y,Ze),H=h(Mt,H,nt),Ke===null?We=Mt:Ke.sibling=Mt,Ke=Mt,Ze=rn}if(nt===q.length)return o(Y,Ze),Bt&&Pr(Y,nt),We;if(Ze===null){for(;nt<q.length;nt++)Ze=xe(Y,q[nt],Te),Ze!==null&&(H=h(Ze,H,nt),Ke===null?We=Ze:Ke.sibling=Ze,Ke=Ze);return Bt&&Pr(Y,nt),We}for(Ze=l(Y,Ze);nt<q.length;nt++)rn=Le(Ze,Y,nt,q[nt],Te),rn!==null&&(t&&rn.alternate!==null&&Ze.delete(rn.key===null?nt:rn.key),H=h(rn,H,nt),Ke===null?We=rn:Ke.sibling=rn,Ke=rn);return t&&Ze.forEach(function(dr){return i(Y,dr)}),Bt&&Pr(Y,nt),We}function Ve(Y,H,q,Te){var We=le(q);if(typeof We!="function")throw Error(n(150));if(q=We.call(q),q==null)throw Error(n(151));for(var Ke=We=null,Ze=H,nt=H=0,rn=null,Mt=q.next();Ze!==null&&!Mt.done;nt++,Mt=q.next()){Ze.index>nt?(rn=Ze,Ze=null):rn=Ze.sibling;var dr=me(Y,Ze,Mt.value,Te);if(dr===null){Ze===null&&(Ze=rn);break}t&&Ze&&dr.alternate===null&&i(Y,Ze),H=h(dr,H,nt),Ke===null?We=dr:Ke.sibling=dr,Ke=dr,Ze=rn}if(Mt.done)return o(Y,Ze),Bt&&Pr(Y,nt),We;if(Ze===null){for(;!Mt.done;nt++,Mt=q.next())Mt=xe(Y,Mt.value,Te),Mt!==null&&(H=h(Mt,H,nt),Ke===null?We=Mt:Ke.sibling=Mt,Ke=Mt);return Bt&&Pr(Y,nt),We}for(Ze=l(Y,Ze);!Mt.done;nt++,Mt=q.next())Mt=Le(Ze,Y,nt,Mt.value,Te),Mt!==null&&(t&&Mt.alternate!==null&&Ze.delete(Mt.key===null?nt:Mt.key),H=h(Mt,H,nt),Ke===null?We=Mt:Ke.sibling=Mt,Ke=Mt);return t&&Ze.forEach(function(I_){return i(Y,I_)}),Bt&&Pr(Y,nt),We}function Wt(Y,H,q,Te){if(typeof q=="object"&&q!==null&&q.type===F&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case X:e:{for(var We=q.key,Ke=H;Ke!==null;){if(Ke.key===We){if(We=q.type,We===F){if(Ke.tag===7){o(Y,Ke.sibling),H=c(Ke,q.props.children),H.return=Y,Y=H;break e}}else if(Ke.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===se&&jd(We)===Ke.type){o(Y,Ke.sibling),H=c(Ke,q.props),H.ref=xo(Y,Ke,q),H.return=Y,Y=H;break e}o(Y,Ke);break}else i(Y,Ke);Ke=Ke.sibling}q.type===F?(H=Or(q.props.children,Y.mode,Te,q.key),H.return=Y,Y=H):(Te=Ha(q.type,q.key,q.props,null,Y.mode,Te),Te.ref=xo(Y,H,q),Te.return=Y,Y=Te)}return E(Y);case D:e:{for(Ke=q.key;H!==null;){if(H.key===Ke)if(H.tag===4&&H.stateNode.containerInfo===q.containerInfo&&H.stateNode.implementation===q.implementation){o(Y,H.sibling),H=c(H,q.children||[]),H.return=Y,Y=H;break e}else{o(Y,H);break}else i(Y,H);H=H.sibling}H=oc(q,Y.mode,Te),H.return=Y,Y=H}return E(Y);case se:return Ke=q._init,Wt(Y,H,Ke(q._payload),Te)}if(Xe(q))return He(Y,H,q,Te);if(le(q))return Ve(Y,H,q,Te);_a(Y,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,H!==null&&H.tag===6?(o(Y,H.sibling),H=c(H,q),H.return=Y,Y=H):(o(Y,H),H=sc(q,Y.mode,Te),H.return=Y,Y=H),E(Y)):o(Y,H)}return Wt}var ms=Yd(!0),qd=Yd(!1),va=tr(null),xa=null,gs=null,mu=null;function gu(){mu=gs=xa=null}function _u(t){var i=va.current;Ft(va),t._currentValue=i}function vu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function _s(t,i){xa=t,mu=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(bn=!0),t.firstContext=null)}function Yn(t){var i=t._currentValue;if(mu!==t)if(t={context:t,memoizedValue:i,next:null},gs===null){if(xa===null)throw Error(n(308));gs=t,xa.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return i}var br=null;function xu(t){br===null?br=[t]:br.push(t)}function $d(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,xu(i)):(o.next=c.next,c.next=o),i.interleaved=o,Ri(t,l)}function Ri(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var rr=!1;function yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function sr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(yt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ri(t,o)}return c=l.interleaved,c===null?(i.next=i,xu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ri(t,o)}function ya(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Ar(t,o)}}function Zd(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=E:h=h.next=E,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Sa(t,i,o,l){var c=t.updateQueue;rr=!1;var h=c.firstBaseUpdate,E=c.lastBaseUpdate,L=c.shared.pending;if(L!==null){c.shared.pending=null;var O=L,Q=O.next;O.next=null,E===null?h=Q:E.next=Q,E=O;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,L=_e.lastBaseUpdate,L!==E&&(L===null?_e.firstBaseUpdate=Q:L.next=Q,_e.lastBaseUpdate=O))}if(h!==null){var xe=c.baseState;E=0,_e=Q=O=null,L=h;do{var me=L.lane,Le=L.eventTime;if((l&me)===me){_e!==null&&(_e=_e.next={eventTime:Le,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var He=t,Ve=L;switch(me=i,Le=o,Ve.tag){case 1:if(He=Ve.payload,typeof He=="function"){xe=He.call(Le,xe,me);break e}xe=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ve.payload,me=typeof He=="function"?He.call(Le,xe,me):He,me==null)break e;xe=re({},xe,me);break e;case 2:rr=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[L]:me.push(L))}else Le={eventTime:Le,lane:me,tag:L.tag,payload:L.payload,callback:L.callback,next:null},_e===null?(Q=_e=Le,O=xe):_e=_e.next=Le,E|=me;if(L=L.next,L===null){if(L=c.shared.pending,L===null)break;me=L,L=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(_e===null&&(O=xe),c.baseState=O,c.firstBaseUpdate=Q,c.lastBaseUpdate=_e,i=c.shared.interleaved,i!==null){c=i;do E|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Nr|=E,t.lanes=E,t.memoizedState=xe}}function Qd(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var yo={},mi=tr(yo),So=tr(yo),Eo=tr(yo);function Dr(t){if(t===yo)throw Error(n(174));return t}function Su(t,i){switch(Nt(Eo,i),Nt(So,t),Nt(mi,yo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ge(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ge(i,t)}Ft(mi),Nt(mi,i)}function vs(){Ft(mi),Ft(So),Ft(Eo)}function Jd(t){Dr(Eo.current);var i=Dr(mi.current),o=Ge(i,t.type);i!==o&&(Nt(So,t),Nt(mi,o))}function Eu(t){So.current===t&&(Ft(mi),Ft(So))}var kt=tr(0);function Ea(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Mu=[];function Tu(){for(var t=0;t<Mu.length;t++)Mu[t]._workInProgressVersionPrimary=null;Mu.length=0}var Ma=P.ReactCurrentDispatcher,Au=P.ReactCurrentBatchConfig,Lr=0,zt=null,Kt=null,tn=null,Ta=!1,Mo=!1,To=0,i_=0;function hn(){throw Error(n(321))}function wu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ii(t[o],i[o]))return!1;return!0}function Cu(t,i,o,l,c,h){if(Lr=h,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ma.current=t===null||t.memoizedState===null?a_:l_,t=o(l,c),Mo){h=0;do{if(Mo=!1,To=0,25<=h)throw Error(n(301));h+=1,tn=Kt=null,i.updateQueue=null,Ma.current=u_,t=o(l,c)}while(Mo)}if(Ma.current=Ca,i=Kt!==null&&Kt.next!==null,Lr=0,tn=Kt=zt=null,Ta=!1,i)throw Error(n(300));return t}function Ru(){var t=To!==0;return To=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?zt.memoizedState=tn=t:tn=tn.next=t,tn}function qn(){if(Kt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var i=tn===null?zt.memoizedState:tn.next;if(i!==null)tn=i,Kt=t;else{if(t===null)throw Error(n(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},tn===null?zt.memoizedState=tn=t:tn=tn.next=t}return tn}function Ao(t,i){return typeof i=="function"?i(t):i}function Pu(t){var i=qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Kt,c=l.baseQueue,h=o.pending;if(h!==null){if(c!==null){var E=c.next;c.next=h.next,h.next=E}l.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,l=l.baseState;var L=E=null,O=null,Q=h;do{var _e=Q.lane;if((Lr&_e)===_e)O!==null&&(O=O.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),l=Q.hasEagerState?Q.eagerState:t(l,Q.action);else{var xe={lane:_e,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};O===null?(L=O=xe,E=l):O=O.next=xe,zt.lanes|=_e,Nr|=_e}Q=Q.next}while(Q!==null&&Q!==h);O===null?E=l:O.next=L,ii(l,i.memoizedState)||(bn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=O,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do h=c.lane,zt.lanes|=h,Nr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function bu(t){var i=qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var E=c=c.next;do h=t(h,E.action),E=E.next;while(E!==c);ii(h,i.memoizedState)||(bn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function eh(){}function th(t,i){var o=zt,l=qn(),c=i(),h=!ii(l.memoizedState,c);if(h&&(l.memoizedState=c,bn=!0),l=l.queue,Du(rh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||tn!==null&&tn.memoizedState.tag&1){if(o.flags|=2048,wo(9,ih.bind(null,o,l,c,i),void 0,null),nn===null)throw Error(n(349));(Lr&30)!==0||nh(o,i,c)}return c}function nh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function ih(t,i,o,l){i.value=o,i.getSnapshot=l,sh(i)&&oh(t)}function rh(t,i,o){return o(function(){sh(i)&&oh(t)})}function sh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ii(t,o)}catch{return!0}}function oh(t){var i=Ri(t,1);i!==null&&li(i,t,1,-1)}function ah(t){var i=gi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},i.queue=t,t=t.dispatch=o_.bind(null,zt,t),[i.memoizedState,t]}function wo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function lh(){return qn().memoizedState}function Aa(t,i,o,l){var c=gi();zt.flags|=t,c.memoizedState=wo(1|i,o,void 0,l===void 0?null:l)}function wa(t,i,o,l){var c=qn();l=l===void 0?null:l;var h=void 0;if(Kt!==null){var E=Kt.memoizedState;if(h=E.destroy,l!==null&&wu(l,E.deps)){c.memoizedState=wo(i,o,h,l);return}}zt.flags|=t,c.memoizedState=wo(1|i,o,h,l)}function uh(t,i){return Aa(8390656,8,t,i)}function Du(t,i){return wa(2048,8,t,i)}function ch(t,i){return wa(4,2,t,i)}function fh(t,i){return wa(4,4,t,i)}function dh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function hh(t,i,o){return o=o!=null?o.concat([t]):null,wa(4,4,dh.bind(null,i,t),o)}function Lu(){}function ph(t,i){var o=qn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&wu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function mh(t,i){var o=qn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&wu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function gh(t,i,o){return(Lr&21)===0?(t.baseState&&(t.baseState=!1,bn=!0),t.memoizedState=o):(ii(o,i)||(o=Sn(),zt.lanes|=o,Nr|=o,t.baseState=!0),i)}function r_(t,i){var o=pt;pt=o!==0&&4>o?o:4,t(!0);var l=Au.transition;Au.transition={};try{t(!1),i()}finally{pt=o,Au.transition=l}}function _h(){return qn().memoizedState}function s_(t,i,o){var l=ur(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},vh(t))xh(i,o);else if(o=$d(t,i,o,l),o!==null){var c=Mn();li(o,t,l,c),yh(o,i,l)}}function o_(t,i,o){var l=ur(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(vh(t))xh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,L=h(E,o);if(c.hasEagerState=!0,c.eagerState=L,ii(L,E)){var O=i.interleaved;O===null?(c.next=c,xu(i)):(c.next=O.next,O.next=c),i.interleaved=c;return}}catch{}finally{}o=$d(t,i,c,l),o!==null&&(c=Mn(),li(o,t,l,c),yh(o,i,l))}}function vh(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function xh(t,i){Mo=Ta=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function yh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Ar(t,o)}}var Ca={readContext:Yn,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},a_={readContext:Yn,useCallback:function(t,i){return gi().memoizedState=[t,i===void 0?null:i],t},useContext:Yn,useEffect:uh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Aa(4194308,4,dh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Aa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Aa(4,2,t,i)},useMemo:function(t,i){var o=gi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=gi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=s_.bind(null,zt,t),[l.memoizedState,t]},useRef:function(t){var i=gi();return t={current:t},i.memoizedState=t},useState:ah,useDebugValue:Lu,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=ah(!1),i=t[0];return t=r_.bind(null,t[1]),gi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=zt,c=gi();if(Bt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),nn===null)throw Error(n(349));(Lr&30)!==0||nh(l,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,uh(rh.bind(null,l,h,t),[t]),l.flags|=2048,wo(9,ih.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=gi(),i=nn.identifierPrefix;if(Bt){var o=Ci,l=wi;o=(l&~(1<<32-Et(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=To++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=i_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},l_={readContext:Yn,useCallback:ph,useContext:Yn,useEffect:Du,useImperativeHandle:hh,useInsertionEffect:ch,useLayoutEffect:fh,useMemo:mh,useReducer:Pu,useRef:lh,useState:function(){return Pu(Ao)},useDebugValue:Lu,useDeferredValue:function(t){var i=qn();return gh(i,Kt.memoizedState,t)},useTransition:function(){var t=Pu(Ao)[0],i=qn().memoizedState;return[t,i]},useMutableSource:eh,useSyncExternalStore:th,useId:_h,unstable_isNewReconciler:!1},u_={readContext:Yn,useCallback:ph,useContext:Yn,useEffect:Du,useImperativeHandle:hh,useInsertionEffect:ch,useLayoutEffect:fh,useMemo:mh,useReducer:bu,useRef:lh,useState:function(){return bu(Ao)},useDebugValue:Lu,useDeferredValue:function(t){var i=qn();return Kt===null?i.memoizedState=t:gh(i,Kt.memoizedState,t)},useTransition:function(){var t=bu(Ao)[0],i=qn().memoizedState;return[t,i]},useMutableSource:eh,useSyncExternalStore:th,useId:_h,unstable_isNewReconciler:!1};function si(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Nu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:re({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ra={isMounted:function(t){return(t=t._reactInternals)?hi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=Mn(),c=ur(t),h=Pi(l,c);h.payload=i,o!=null&&(h.callback=o),i=sr(t,h,c),i!==null&&(li(i,t,c,l),ya(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=Mn(),c=ur(t),h=Pi(l,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=sr(t,h,c),i!==null&&(li(i,t,c,l),ya(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Mn(),l=ur(t),c=Pi(o,l);c.tag=2,i!=null&&(c.callback=i),i=sr(t,c,l),i!==null&&(li(i,t,l,o),ya(i,t,l))}};function Sh(t,i,o,l,c,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!fo(o,l)||!fo(c,h):!0}function Eh(t,i,o){var l=!1,c=nr,h=i.contextType;return typeof h=="object"&&h!==null?h=Yn(h):(c=Pn(i)?Cr:dn.current,l=i.contextTypes,h=(l=l!=null)?fs(t,c):nr),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ra,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Mh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Ra.enqueueReplaceState(i,i.state,null)}function Uu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},yu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Yn(h):(h=Pn(i)?Cr:dn.current,c.context=fs(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Nu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Ra.enqueueReplaceState(c,c.state,null),Sa(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,i){try{var o="",l=i;do o+=ue(l),l=l.return;while(l);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Iu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Fu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var c_=typeof WeakMap=="function"?WeakMap:Map;function Th(t,i,o){o=Pi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ia||(Ia=!0,Zu=l),Fu(t,i)},o}function Ah(t,i,o){o=Pi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Fu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Fu(t,i),typeof l!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function wh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new c_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=T_.bind(null,t,i,o),i.then(t,t))}function Ch(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Rh(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Pi(-1,1),i.tag=2,sr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var f_=P.ReactCurrentOwner,bn=!1;function En(t,i,o,l){i.child=t===null?qd(i,null,o,l):ms(i,t.child,o,l)}function Ph(t,i,o,l,c){o=o.render;var h=i.ref;return _s(i,c),l=Cu(t,i,o,l,h,c),o=Ru(),t!==null&&!bn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,bi(t,i,c)):(Bt&&o&&cu(i),i.flags|=1,En(t,i,l,c),i.child)}function bh(t,i,o,l,c){if(t===null){var h=o.type;return typeof h=="function"&&!rc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Dh(t,i,h,l,c)):(t=Ha(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var E=h.memoizedProps;if(o=o.compare,o=o!==null?o:fo,o(E,l)&&t.ref===i.ref)return bi(t,i,c)}return i.flags|=1,t=fr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Dh(t,i,o,l,c){if(t!==null){var h=t.memoizedProps;if(fo(h,l)&&t.ref===i.ref)if(bn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(bn=!0);else return i.lanes=t.lanes,bi(t,i,c)}return Ou(t,i,o,l,c)}function Lh(t,i,o){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(Ss,zn),zn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Nt(Ss,zn),zn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Nt(Ss,zn),zn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Nt(Ss,zn),zn|=l;return En(t,i,c,o),i.child}function Nh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Ou(t,i,o,l,c){var h=Pn(o)?Cr:dn.current;return h=fs(i,h),_s(i,c),o=Cu(t,i,o,l,h,c),l=Ru(),t!==null&&!bn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,bi(t,i,c)):(Bt&&l&&cu(i),i.flags|=1,En(t,i,o,c),i.child)}function Uh(t,i,o,l,c){if(Pn(o)){var h=!0;da(i)}else h=!1;if(_s(i,c),i.stateNode===null)ba(t,i),Eh(i,o,l),Uu(i,o,l,c),l=!0;else if(t===null){var E=i.stateNode,L=i.memoizedProps;E.props=L;var O=E.context,Q=o.contextType;typeof Q=="object"&&Q!==null?Q=Yn(Q):(Q=Pn(o)?Cr:dn.current,Q=fs(i,Q));var _e=o.getDerivedStateFromProps,xe=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(L!==l||O!==Q)&&Mh(i,E,l,Q),rr=!1;var me=i.memoizedState;E.state=me,Sa(i,l,E,c),O=i.memoizedState,L!==l||me!==O||Rn.current||rr?(typeof _e=="function"&&(Nu(i,o,_e,l),O=i.memoizedState),(L=rr||Sh(i,o,L,l,me,O,Q))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),E.props=l,E.state=O,E.context=Q,l=L):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,Kd(t,i),L=i.memoizedProps,Q=i.type===i.elementType?L:si(i.type,L),E.props=Q,xe=i.pendingProps,me=E.context,O=o.contextType,typeof O=="object"&&O!==null?O=Yn(O):(O=Pn(o)?Cr:dn.current,O=fs(i,O));var Le=o.getDerivedStateFromProps;(_e=typeof Le=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(L!==xe||me!==O)&&Mh(i,E,l,O),rr=!1,me=i.memoizedState,E.state=me,Sa(i,l,E,c);var He=i.memoizedState;L!==xe||me!==He||Rn.current||rr?(typeof Le=="function"&&(Nu(i,o,Le,l),He=i.memoizedState),(Q=rr||Sh(i,o,Q,l,me,He,O)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,He,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,He,O)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=He),E.props=l,E.state=He,E.context=O,l=Q):(typeof E.componentDidUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Bu(t,i,o,l,h,c)}function Bu(t,i,o,l,c,h){Nh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return c&&kd(i,o,!1),bi(t,i,h);l=i.stateNode,f_.current=i;var L=E&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=ms(i,t.child,null,h),i.child=ms(i,null,L,h)):En(t,i,L,h),i.memoizedState=l.state,c&&kd(i,o,!0),i.child}function Ih(t){var i=t.stateNode;i.pendingContext?Od(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Od(t,i.context,!1),Su(t,i.containerInfo)}function Fh(t,i,o,l,c){return ps(),pu(c),i.flags|=256,En(t,i,o,l),i.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Oh(t,i,o){var l=i.pendingProps,c=kt.current,h=!1,E=(i.flags&128)!==0,L;if((L=E)||(L=t!==null&&t.memoizedState===null?!1:(c&2)!==0),L?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Nt(kt,c&1),t===null)return hu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=Va(E,l,0,null),t=Or(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=zu(o),i.memoizedState=ku,t):Hu(i,E));if(c=t.memoizedState,c!==null&&(L=c.dehydrated,L!==null))return d_(t,i,E,l,L,c,o);if(h){h=l.fallback,E=i.mode,c=t.child,L=c.sibling;var O={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=fr(c,O),l.subtreeFlags=c.subtreeFlags&14680064),L!==null?h=fr(L,h):(h=Or(h,E,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E=E===null?zu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~o,i.memoizedState=ku,l}return h=t.child,t=h.sibling,l=fr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Hu(t,i){return i=Va({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Pa(t,i,o,l){return l!==null&&pu(l),ms(i,t.child,null,o),t=Hu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function d_(t,i,o,l,c,h,E){if(o)return i.flags&256?(i.flags&=-257,l=Iu(Error(n(422))),Pa(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=Va({mode:"visible",children:l.children},c,0,null),h=Or(h,c,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&ms(i,t.child,null,E),i.child.memoizedState=zu(E),i.memoizedState=ku,h);if((i.mode&1)===0)return Pa(t,i,E,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var L=l.dgst;return l=L,h=Error(n(419)),l=Iu(h,l,void 0),Pa(t,i,E,l)}if(L=(E&t.childLanes)!==0,bn||L){if(l=nn,l!==null){switch(E&-E){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|E))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ri(t,c),li(l,t,c,-1))}return ic(),l=Iu(Error(n(421))),Pa(t,i,E,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=A_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,kn=er(c.nextSibling),Bn=i,Bt=!0,ri=null,t!==null&&(Xn[jn++]=wi,Xn[jn++]=Ci,Xn[jn++]=Rr,wi=t.id,Ci=t.overflow,Rr=i),i=Hu(i,l.children),i.flags|=4096,i)}function Bh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),vu(t.return,i,o)}function Vu(t,i,o,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=c)}function kh(t,i,o){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(En(t,i,l.children,o),l=kt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bh(t,o,i);else if(t.tag===19)Bh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Nt(kt,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&Ea(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Vu(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Ea(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Vu(i,!0,o,null,h);break;case"together":Vu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ba(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function bi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Nr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=fr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=fr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function h_(t,i,o){switch(i.tag){case 3:Ih(i),ps();break;case 5:Jd(i);break;case 1:Pn(i.type)&&da(i);break;case 4:Su(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Nt(va,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Nt(kt,kt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Oh(t,i,o):(Nt(kt,kt.current&1),t=bi(t,i,o),t!==null?t.sibling:null);Nt(kt,kt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return kh(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Nt(kt,kt.current),l)break;return null;case 22:case 23:return i.lanes=0,Lh(t,i,o)}return bi(t,i,o)}var zh,Gu,Hh,Vh;zh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Gu=function(){},Hh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Dr(mi.current);var h=null;switch(o){case"input":c=B(t,c),l=B(t,l),h=[];break;case"select":c=re({},c,{value:void 0}),l=re({},l,{value:void 0}),h=[];break;case"textarea":c=M(t,c),l=M(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ua)}ct(o,l);var E;o=null;for(Q in c)if(!l.hasOwnProperty(Q)&&c.hasOwnProperty(Q)&&c[Q]!=null)if(Q==="style"){var L=c[Q];for(E in L)L.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(a.hasOwnProperty(Q)?h||(h=[]):(h=h||[]).push(Q,null));for(Q in l){var O=l[Q];if(L=c!=null?c[Q]:void 0,l.hasOwnProperty(Q)&&O!==L&&(O!=null||L!=null))if(Q==="style")if(L){for(E in L)!L.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in O)O.hasOwnProperty(E)&&L[E]!==O[E]&&(o||(o={}),o[E]=O[E])}else o||(h||(h=[]),h.push(Q,o)),o=O;else Q==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,L=L?L.__html:void 0,O!=null&&L!==O&&(h=h||[]).push(Q,O)):Q==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(Q,""+O):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(a.hasOwnProperty(Q)?(O!=null&&Q==="onScroll"&&It("scroll",t),h||L===O||(h=[])):(h=h||[]).push(Q,O))}o&&(h=h||[]).push("style",o);var Q=h;(i.updateQueue=Q)&&(i.flags|=4)}},Vh=function(t,i,o,l){o!==l&&(i.flags|=4)};function Co(t,i){if(!Bt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function pn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function p_(t,i,o){var l=i.pendingProps;switch(fu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return Pn(i.type)&&fa(),pn(i),null;case 3:return l=i.stateNode,vs(),Ft(Rn),Ft(dn),Tu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ga(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ri!==null&&(ec(ri),ri=null))),Gu(t,i),pn(i),null;case 5:Eu(i);var c=Dr(Eo.current);if(o=i.type,t!==null&&i.stateNode!=null)Hh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return pn(i),null}if(t=Dr(mi.current),ga(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[pi]=i,l[_o]=h,t=(i.mode&1)!==0,o){case"dialog":It("cancel",l),It("close",l);break;case"iframe":case"object":case"embed":It("load",l);break;case"video":case"audio":for(c=0;c<po.length;c++)It(po[c],l);break;case"source":It("error",l);break;case"img":case"image":case"link":It("error",l),It("load",l);break;case"details":It("toggle",l);break;case"input":vn(l,h),It("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},It("invalid",l);break;case"textarea":$(l,h),It("invalid",l)}ct(o,h),c=null;for(var E in h)if(h.hasOwnProperty(E)){var L=h[E];E==="children"?typeof L=="string"?l.textContent!==L&&(h.suppressHydrationWarning!==!0&&la(l.textContent,L,t),c=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(h.suppressHydrationWarning!==!0&&la(l.textContent,L,t),c=["children",""+L]):a.hasOwnProperty(E)&&L!=null&&E==="onScroll"&&It("scroll",l)}switch(o){case"input":Ct(l),Ye(l,h,!0);break;case"textarea":Ct(l),ge(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=ua)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ce(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(o,{is:l.is}):(t=E.createElement(o),o==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,o),t[pi]=i,t[_o]=l,zh(t,i,!1,!1),i.stateNode=t;e:{switch(E=it(o,l),o){case"dialog":It("cancel",t),It("close",t),c=l;break;case"iframe":case"object":case"embed":It("load",t),c=l;break;case"video":case"audio":for(c=0;c<po.length;c++)It(po[c],t);c=l;break;case"source":It("error",t),c=l;break;case"img":case"image":case"link":It("error",t),It("load",t),c=l;break;case"details":It("toggle",t),c=l;break;case"input":vn(t,l),c=B(t,l),It("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=re({},l,{value:void 0}),It("invalid",t);break;case"textarea":$(t,l),c=M(t,l),It("invalid",t);break;default:c=l}ct(o,c),L=c;for(h in L)if(L.hasOwnProperty(h)){var O=L[h];h==="style"?Je(t,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Fe(t,O)):h==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&lt(t,O):typeof O=="number"&&lt(t,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?O!=null&&h==="onScroll"&&It("scroll",t):O!=null&&N(t,h,O,E))}switch(o){case"input":Ct(t),Ye(t,l,!1);break;case"textarea":Ct(t),ge(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ae(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?b(t,!!l.multiple,h,!1):l.defaultValue!=null&&b(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=ua)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return pn(i),null;case 6:if(t&&i.stateNode!=null)Vh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Dr(Eo.current),Dr(mi.current),ga(i)){if(l=i.stateNode,o=i.memoizedProps,l[pi]=i,(h=l.nodeValue!==o)&&(t=Bn,t!==null))switch(t.tag){case 3:la(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&la(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[pi]=i,i.stateNode=l}return pn(i),null;case 13:if(Ft(kt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Bt&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Xd(),ps(),i.flags|=98560,h=!1;else if(h=ga(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[pi]=i}else ps(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),h=!1}else ri!==null&&(ec(ri),ri=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(kt.current&1)!==0?Zt===0&&(Zt=3):ic())),i.updateQueue!==null&&(i.flags|=4),pn(i),null);case 4:return vs(),Gu(t,i),t===null&&mo(i.stateNode.containerInfo),pn(i),null;case 10:return _u(i.type._context),pn(i),null;case 17:return Pn(i.type)&&fa(),pn(i),null;case 19:if(Ft(kt),h=i.memoizedState,h===null)return pn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)Co(h,!1);else{if(Zt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Ea(t),E!==null){for(i.flags|=128,Co(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Nt(kt,kt.current&1|2),i.child}t=t.sibling}h.tail!==null&&z()>Es&&(i.flags|=128,l=!0,Co(h,!1),i.lanes=4194304)}else{if(!l)if(t=Ea(E),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Co(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Bt)return pn(i),null}else 2*z()-h.renderingStartTime>Es&&o!==1073741824&&(i.flags|=128,l=!0,Co(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(o=h.last,o!==null?o.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=z(),i.sibling=null,o=kt.current,Nt(kt,l?o&1|2:o&1),i):(pn(i),null);case 22:case 23:return nc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(zn&1073741824)!==0&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function m_(t,i){switch(fu(i),i.tag){case 1:return Pn(i.type)&&fa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return vs(),Ft(Rn),Ft(dn),Tu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Eu(i),null;case 13:if(Ft(kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ps()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ft(kt),null;case 4:return vs(),null;case 10:return _u(i.type._context),null;case 22:case 23:return nc(),null;case 24:return null;default:return null}}var Da=!1,mn=!1,g_=typeof WeakSet=="function"?WeakSet:Set,Be=null;function ys(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Vt(t,i,l)}else o.current=null}function Wu(t,i,o){try{o()}catch(l){Vt(t,i,l)}}var Gh=!1;function __(t,i){if(nu=Zo,t=Sd(),ql(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var E=0,L=-1,O=-1,Q=0,_e=0,xe=t,me=null;t:for(;;){for(var Le;xe!==o||c!==0&&xe.nodeType!==3||(L=E+c),xe!==h||l!==0&&xe.nodeType!==3||(O=E+l),xe.nodeType===3&&(E+=xe.nodeValue.length),(Le=xe.firstChild)!==null;)me=xe,xe=Le;for(;;){if(xe===t)break t;if(me===o&&++Q===c&&(L=E),me===h&&++_e===l&&(O=E),(Le=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Le}o=L===-1||O===-1?null:{start:L,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(iu={focusedElem:t,selectionRange:o},Zo=!1,Be=i;Be!==null;)if(i=Be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Be=t;else for(;Be!==null;){i=Be;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ve=He.memoizedProps,Wt=He.memoizedState,Y=i.stateNode,H=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:si(i.type,Ve),Wt);Y.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var q=i.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Vt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Be=t;break}Be=i.return}return He=Gh,Gh=!1,He}function Ro(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Wu(i,o,h)}c=c.next}while(c!==l)}}function La(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Xu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Wh(t){var i=t.alternate;i!==null&&(t.alternate=null,Wh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[pi],delete i[_o],delete i[au],delete i[Jg],delete i[e_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xh(t){return t.tag===5||t.tag===3||t.tag===4}function jh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ju(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ua));else if(l!==4&&(t=t.child,t!==null))for(ju(t,i,o),t=t.sibling;t!==null;)ju(t,i,o),t=t.sibling}function Yu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Yu(t,i,o),t=t.sibling;t!==null;)Yu(t,i,o),t=t.sibling}var an=null,oi=!1;function or(t,i,o){for(o=o.child;o!==null;)Yh(t,i,o),o=o.sibling}function Yh(t,i,o){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(je,o)}catch{}switch(o.tag){case 5:mn||ys(o,i);case 6:var l=an,c=oi;an=null,or(t,i,o),an=l,oi=c,an!==null&&(oi?(t=an,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):an.removeChild(o.stateNode));break;case 18:an!==null&&(oi?(t=an,o=o.stateNode,t.nodeType===8?ou(t.parentNode,o):t.nodeType===1&&ou(t,o),so(t)):ou(an,o.stateNode));break;case 4:l=an,c=oi,an=o.stateNode.containerInfo,oi=!0,or(t,i,o),an=l,oi=c;break;case 0:case 11:case 14:case 15:if(!mn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&Wu(o,i,E),c=c.next}while(c!==l)}or(t,i,o);break;case 1:if(!mn&&(ys(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(L){Vt(o,i,L)}or(t,i,o);break;case 21:or(t,i,o);break;case 22:o.mode&1?(mn=(l=mn)||o.memoizedState!==null,or(t,i,o),mn=l):or(t,i,o);break;default:or(t,i,o)}}function qh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new g_),i.forEach(function(l){var c=w_.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function ai(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var h=t,E=i,L=E;e:for(;L!==null;){switch(L.tag){case 5:an=L.stateNode,oi=!1;break e;case 3:an=L.stateNode.containerInfo,oi=!0;break e;case 4:an=L.stateNode.containerInfo,oi=!0;break e}L=L.return}if(an===null)throw Error(n(160));Yh(h,E,c),an=null,oi=!1;var O=c.alternate;O!==null&&(O.return=null),c.return=null}catch(Q){Vt(c,i,Q)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)$h(i,t),i=i.sibling}function $h(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ai(i,t),_i(t),l&4){try{Ro(3,t,t.return),La(3,t)}catch(Ve){Vt(t,t.return,Ve)}try{Ro(5,t,t.return)}catch(Ve){Vt(t,t.return,Ve)}}break;case 1:ai(i,t),_i(t),l&512&&o!==null&&ys(o,o.return);break;case 5:if(ai(i,t),_i(t),l&512&&o!==null&&ys(o,o.return),t.flags&32){var c=t.stateNode;try{lt(c,"")}catch(Ve){Vt(t,t.return,Ve)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,E=o!==null?o.memoizedProps:h,L=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{L==="input"&&h.type==="radio"&&h.name!=null&&ht(c,h),it(L,E);var Q=it(L,h);for(E=0;E<O.length;E+=2){var _e=O[E],xe=O[E+1];_e==="style"?Je(c,xe):_e==="dangerouslySetInnerHTML"?Fe(c,xe):_e==="children"?lt(c,xe):N(c,_e,xe,Q)}switch(L){case"input":ut(c,h);break;case"textarea":de(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Le=h.value;Le!=null?b(c,!!h.multiple,Le,!1):me!==!!h.multiple&&(h.defaultValue!=null?b(c,!!h.multiple,h.defaultValue,!0):b(c,!!h.multiple,h.multiple?[]:"",!1))}c[_o]=h}catch(Ve){Vt(t,t.return,Ve)}}break;case 6:if(ai(i,t),_i(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(Ve){Vt(t,t.return,Ve)}}break;case 3:if(ai(i,t),_i(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{so(i.containerInfo)}catch(Ve){Vt(t,t.return,Ve)}break;case 4:ai(i,t),_i(t);break;case 13:ai(i,t),_i(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Ku=z())),l&4&&qh(t);break;case 22:if(_e=o!==null&&o.memoizedState!==null,t.mode&1?(mn=(Q=mn)||_e,ai(i,t),mn=Q):ai(i,t),_i(t),l&8192){if(Q=t.memoizedState!==null,(t.stateNode.isHidden=Q)&&!_e&&(t.mode&1)!==0)for(Be=t,_e=t.child;_e!==null;){for(xe=Be=_e;Be!==null;){switch(me=Be,Le=me.child,me.tag){case 0:case 11:case 14:case 15:Ro(4,me,me.return);break;case 1:ys(me,me.return);var He=me.stateNode;if(typeof He.componentWillUnmount=="function"){l=me,o=me.return;try{i=l,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ve){Vt(l,o,Ve)}}break;case 5:ys(me,me.return);break;case 22:if(me.memoizedState!==null){Qh(xe);continue}}Le!==null?(Le.return=me,Be=Le):Qh(xe)}_e=_e.sibling}e:for(_e=null,xe=t;;){if(xe.tag===5){if(_e===null){_e=xe;try{c=xe.stateNode,Q?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(L=xe.stateNode,O=xe.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,L.style.display=$e("display",E))}catch(Ve){Vt(t,t.return,Ve)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=Q?"":xe.memoizedProps}catch(Ve){Vt(t,t.return,Ve)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ai(i,t),_i(t),l&4&&qh(t);break;case 21:break;default:ai(i,t),_i(t)}}function _i(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Xh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(lt(c,""),l.flags&=-33);var h=jh(t);Yu(t,h,c);break;case 3:case 4:var E=l.stateNode.containerInfo,L=jh(t);ju(t,L,E);break;default:throw Error(n(161))}}catch(O){Vt(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function v_(t,i,o){Be=t,Kh(t)}function Kh(t,i,o){for(var l=(t.mode&1)!==0;Be!==null;){var c=Be,h=c.child;if(c.tag===22&&l){var E=c.memoizedState!==null||Da;if(!E){var L=c.alternate,O=L!==null&&L.memoizedState!==null||mn;L=Da;var Q=mn;if(Da=E,(mn=O)&&!Q)for(Be=c;Be!==null;)E=Be,O=E.child,E.tag===22&&E.memoizedState!==null?Jh(c):O!==null?(O.return=E,Be=O):Jh(c);for(;h!==null;)Be=h,Kh(h),h=h.sibling;Be=c,Da=L,mn=Q}Zh(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Be=h):Zh(t)}}function Zh(t){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:mn||La(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!mn)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:si(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Qd(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Qd(i,E,o)}break;case 5:var L=i.stateNode;if(o===null&&i.flags&4){o=L;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Q=i.alternate;if(Q!==null){var _e=Q.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&so(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}mn||i.flags&512&&Xu(i)}catch(me){Vt(i,i.return,me)}}if(i===t){Be=null;break}if(o=i.sibling,o!==null){o.return=i.return,Be=o;break}Be=i.return}}function Qh(t){for(;Be!==null;){var i=Be;if(i===t){Be=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Be=o;break}Be=i.return}}function Jh(t){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{La(4,i)}catch(O){Vt(i,o,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(O){Vt(i,c,O)}}var h=i.return;try{Xu(i)}catch(O){Vt(i,h,O)}break;case 5:var E=i.return;try{Xu(i)}catch(O){Vt(i,E,O)}}}catch(O){Vt(i,i.return,O)}if(i===t){Be=null;break}var L=i.sibling;if(L!==null){L.return=i.return,Be=L;break}Be=i.return}}var x_=Math.ceil,Na=P.ReactCurrentDispatcher,qu=P.ReactCurrentOwner,$n=P.ReactCurrentBatchConfig,yt=0,nn=null,jt=null,ln=0,zn=0,Ss=tr(0),Zt=0,Po=null,Nr=0,Ua=0,$u=0,bo=null,Dn=null,Ku=0,Es=1/0,Di=null,Ia=!1,Zu=null,ar=null,Fa=!1,lr=null,Oa=0,Do=0,Qu=null,Ba=-1,ka=0;function Mn(){return(yt&6)!==0?z():Ba!==-1?Ba:Ba=z()}function ur(t){return(t.mode&1)===0?1:(yt&2)!==0&&ln!==0?ln&-ln:n_.transition!==null?(ka===0&&(ka=Sn()),ka):(t=pt,t!==0||(t=window.event,t=t===void 0?16:td(t.type)),t)}function li(t,i,o,l){if(50<Do)throw Do=0,Qu=null,Error(n(185));Gt(t,o,l),((yt&2)===0||t!==nn)&&(t===nn&&((yt&2)===0&&(Ua|=o),Zt===4&&cr(t,ln)),Ln(t,l),o===1&&yt===0&&(i.mode&1)===0&&(Es=z()+500,ha&&ir()))}function Ln(t,i){var o=t.callbackNode;Tr(t,i);var l=ni(t,t===nn?ln:0);if(l===0)o!==null&&W(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&W(o),i===1)t.tag===0?t_(tp.bind(null,t)):zd(tp.bind(null,t)),Zg(function(){(yt&6)===0&&ir()}),o=null;else{switch(Yf(l)){case 1:o=Re;break;case 4:o=Ne;break;case 16:o=Oe;break;case 536870912:o=tt;break;default:o=Oe}o=up(o,ep.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function ep(t,i){if(Ba=-1,ka=0,(yt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ms()&&t.callbackNode!==o)return null;var l=ni(t,t===nn?ln:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=za(t,l);else{i=l;var c=yt;yt|=2;var h=ip();(nn!==t||ln!==i)&&(Di=null,Es=z()+500,Ir(t,i));do try{E_();break}catch(L){np(t,L)}while(!0);gu(),Na.current=h,yt=c,jt!==null?i=0:(nn=null,ln=0,i=Zt)}if(i!==0){if(i===2&&(c=Rt(t),c!==0&&(l=c,i=Ju(t,c))),i===1)throw o=Po,Ir(t,0),cr(t,l),Ln(t,z()),o;if(i===6)cr(t,l);else{if(c=t.current.alternate,(l&30)===0&&!y_(c)&&(i=za(t,l),i===2&&(h=Rt(t),h!==0&&(l=h,i=Ju(t,h))),i===1))throw o=Po,Ir(t,0),cr(t,l),Ln(t,z()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Fr(t,Dn,Di);break;case 3:if(cr(t,l),(l&130023424)===l&&(i=Ku+500-z(),10<i)){if(ni(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){Mn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=su(Fr.bind(null,t,Dn,Di),i);break}Fr(t,Dn,Di);break;case 4:if(cr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var E=31-Et(l);h=1<<E,E=i[E],E>c&&(c=E),l&=~h}if(l=c,l=z()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*x_(l/1960))-l,10<l){t.timeoutHandle=su(Fr.bind(null,t,Dn,Di),l);break}Fr(t,Dn,Di);break;case 5:Fr(t,Dn,Di);break;default:throw Error(n(329))}}}return Ln(t,z()),t.callbackNode===o?ep.bind(null,t):null}function Ju(t,i){var o=bo;return t.current.memoizedState.isDehydrated&&(Ir(t,i).flags|=256),t=za(t,i),t!==2&&(i=Dn,Dn=o,i!==null&&ec(i)),t}function ec(t){Dn===null?Dn=t:Dn.push.apply(Dn,t)}function y_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],h=c.getSnapshot;c=c.value;try{if(!ii(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(t,i){for(i&=~$u,i&=~Ua,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Et(i),l=1<<o;t[o]=-1,i&=~l}}function tp(t){if((yt&6)!==0)throw Error(n(327));Ms();var i=ni(t,0);if((i&1)===0)return Ln(t,z()),null;var o=za(t,i);if(t.tag!==0&&o===2){var l=Rt(t);l!==0&&(i=l,o=Ju(t,l))}if(o===1)throw o=Po,Ir(t,0),cr(t,i),Ln(t,z()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Fr(t,Dn,Di),Ln(t,z()),null}function tc(t,i){var o=yt;yt|=1;try{return t(i)}finally{yt=o,yt===0&&(Es=z()+500,ha&&ir())}}function Ur(t){lr!==null&&lr.tag===0&&(yt&6)===0&&Ms();var i=yt;yt|=1;var o=$n.transition,l=pt;try{if($n.transition=null,pt=1,t)return t()}finally{pt=l,$n.transition=o,yt=i,(yt&6)===0&&ir()}}function nc(){zn=Ss.current,Ft(Ss)}function Ir(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Kg(o)),jt!==null)for(o=jt.return;o!==null;){var l=o;switch(fu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&fa();break;case 3:vs(),Ft(Rn),Ft(dn),Tu();break;case 5:Eu(l);break;case 4:vs();break;case 13:Ft(kt);break;case 19:Ft(kt);break;case 10:_u(l.type._context);break;case 22:case 23:nc()}o=o.return}if(nn=t,jt=t=fr(t.current,null),ln=zn=i,Zt=0,Po=null,$u=Ua=Nr=0,Dn=bo=null,br!==null){for(i=0;i<br.length;i++)if(o=br[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,h=o.pending;if(h!==null){var E=h.next;h.next=c,l.next=E}o.pending=l}br=null}return t}function np(t,i){do{var o=jt;try{if(gu(),Ma.current=Ca,Ta){for(var l=zt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ta=!1}if(Lr=0,tn=Kt=zt=null,Mo=!1,To=0,qu.current=null,o===null||o.return===null){Zt=1,Po=i,jt=null;break}e:{var h=t,E=o.return,L=o,O=i;if(i=ln,L.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var Q=O,_e=L,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Le=Ch(E);if(Le!==null){Le.flags&=-257,Rh(Le,E,L,h,i),Le.mode&1&&wh(h,Q,i),i=Le,O=Q;var He=i.updateQueue;if(He===null){var Ve=new Set;Ve.add(O),i.updateQueue=Ve}else He.add(O);break e}else{if((i&1)===0){wh(h,Q,i),ic();break e}O=Error(n(426))}}else if(Bt&&L.mode&1){var Wt=Ch(E);if(Wt!==null){(Wt.flags&65536)===0&&(Wt.flags|=256),Rh(Wt,E,L,h,i),pu(xs(O,L));break e}}h=O=xs(O,L),Zt!==4&&(Zt=2),bo===null?bo=[h]:bo.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=Th(h,O,i);Zd(h,Y);break e;case 1:L=O;var H=h.type,q=h.stateNode;if((h.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(ar===null||!ar.has(q)))){h.flags|=65536,i&=-i,h.lanes|=i;var Te=Ah(h,L,i);Zd(h,Te);break e}}h=h.return}while(h!==null)}sp(o)}catch(We){i=We,jt===o&&o!==null&&(jt=o=o.return);continue}break}while(!0)}function ip(){var t=Na.current;return Na.current=Ca,t===null?Ca:t}function ic(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),nn===null||(Nr&268435455)===0&&(Ua&268435455)===0||cr(nn,ln)}function za(t,i){var o=yt;yt|=2;var l=ip();(nn!==t||ln!==i)&&(Di=null,Ir(t,i));do try{S_();break}catch(c){np(t,c)}while(!0);if(gu(),yt=o,Na.current=l,jt!==null)throw Error(n(261));return nn=null,ln=0,Zt}function S_(){for(;jt!==null;)rp(jt)}function E_(){for(;jt!==null&&!ee();)rp(jt)}function rp(t){var i=lp(t.alternate,t,zn);t.memoizedProps=t.pendingProps,i===null?sp(t):jt=i,qu.current=null}function sp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=p_(o,i,zn),o!==null){jt=o;return}}else{if(o=m_(o,i),o!==null){o.flags&=32767,jt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Zt=6,jt=null;return}}if(i=i.sibling,i!==null){jt=i;return}jt=i=t}while(i!==null);Zt===0&&(Zt=5)}function Fr(t,i,o){var l=pt,c=$n.transition;try{$n.transition=null,pt=1,M_(t,i,o,l)}finally{$n.transition=c,pt=l}return null}function M_(t,i,o,l){do Ms();while(lr!==null);if((yt&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(fn(t,h),t===nn&&(jt=nn=null,ln=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Fa||(Fa=!0,up(Oe,function(){return Ms(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=$n.transition,$n.transition=null;var E=pt;pt=1;var L=yt;yt|=4,qu.current=null,__(t,o),$h(o,t),Gg(iu),Zo=!!nu,iu=nu=null,t.current=o,v_(o),te(),yt=L,pt=E,$n.transition=h}else t.current=o;if(Fa&&(Fa=!1,lr=t,Oa=c),h=t.pendingLanes,h===0&&(ar=null),St(o.stateNode),Ln(t,z()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(Ia)throw Ia=!1,t=Zu,Zu=null,t;return(Oa&1)!==0&&t.tag!==0&&Ms(),h=t.pendingLanes,(h&1)!==0?t===Qu?Do++:(Do=0,Qu=t):Do=0,ir(),null}function Ms(){if(lr!==null){var t=Yf(Oa),i=$n.transition,o=pt;try{if($n.transition=null,pt=16>t?16:t,lr===null)var l=!1;else{if(t=lr,lr=null,Oa=0,(yt&6)!==0)throw Error(n(331));var c=yt;for(yt|=4,Be=t.current;Be!==null;){var h=Be,E=h.child;if((Be.flags&16)!==0){var L=h.deletions;if(L!==null){for(var O=0;O<L.length;O++){var Q=L[O];for(Be=Q;Be!==null;){var _e=Be;switch(_e.tag){case 0:case 11:case 15:Ro(8,_e,h)}var xe=_e.child;if(xe!==null)xe.return=_e,Be=xe;else for(;Be!==null;){_e=Be;var me=_e.sibling,Le=_e.return;if(Wh(_e),_e===Q){Be=null;break}if(me!==null){me.return=Le,Be=me;break}Be=Le}}}var He=h.alternate;if(He!==null){var Ve=He.child;if(Ve!==null){He.child=null;do{var Wt=Ve.sibling;Ve.sibling=null,Ve=Wt}while(Ve!==null)}}Be=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,Be=E;else e:for(;Be!==null;){if(h=Be,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Ro(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,Be=Y;break e}Be=h.return}}var H=t.current;for(Be=H;Be!==null;){E=Be;var q=E.child;if((E.subtreeFlags&2064)!==0&&q!==null)q.return=E,Be=q;else e:for(E=H;Be!==null;){if(L=Be,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:La(9,L)}}catch(We){Vt(L,L.return,We)}if(L===E){Be=null;break e}var Te=L.sibling;if(Te!==null){Te.return=L.return,Be=Te;break e}Be=L.return}}if(yt=c,ir(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(je,t)}catch{}l=!0}return l}finally{pt=o,$n.transition=i}}return!1}function op(t,i,o){i=xs(o,i),i=Th(t,i,1),t=sr(t,i,1),i=Mn(),t!==null&&(Gt(t,1,i),Ln(t,i))}function Vt(t,i,o){if(t.tag===3)op(t,t,o);else for(;i!==null;){if(i.tag===3){op(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ar===null||!ar.has(l))){t=xs(o,t),t=Ah(i,t,1),i=sr(i,t,1),t=Mn(),i!==null&&(Gt(i,1,t),Ln(i,t));break}}i=i.return}}function T_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=Mn(),t.pingedLanes|=t.suspendedLanes&o,nn===t&&(ln&o)===o&&(Zt===4||Zt===3&&(ln&130023424)===ln&&500>z()-Ku?Ir(t,0):$u|=o),Ln(t,i)}function ap(t,i){i===0&&((t.mode&1)===0?i=1:(i=_t,_t<<=1,(_t&130023424)===0&&(_t=4194304)));var o=Mn();t=Ri(t,i),t!==null&&(Gt(t,i,o),Ln(t,o))}function A_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),ap(t,o)}function w_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),ap(t,o)}var lp;lp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Rn.current)bn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return bn=!1,h_(t,i,o);bn=(t.flags&131072)!==0}else bn=!1,Bt&&(i.flags&1048576)!==0&&Hd(i,ma,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;ba(t,i),t=i.pendingProps;var c=fs(i,dn.current);_s(i,o),c=Cu(null,i,l,t,c,o);var h=Ru();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(l)?(h=!0,da(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,yu(i),c.updater=Ra,i.stateNode=c,c._reactInternals=i,Uu(i,l,t,o),i=Bu(null,i,l,!0,h,o)):(i.tag=0,Bt&&h&&cu(i),En(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(ba(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=R_(l),t=si(l,t),c){case 0:i=Ou(null,i,l,t,o);break e;case 1:i=Uh(null,i,l,t,o);break e;case 11:i=Ph(null,i,l,t,o);break e;case 14:i=bh(null,i,l,si(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:si(l,c),Ou(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:si(l,c),Uh(t,i,l,c,o);case 3:e:{if(Ih(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,Kd(t,i),Sa(i,l,null,o);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=xs(Error(n(423)),i),i=Fh(t,i,l,o,c);break e}else if(l!==c){c=xs(Error(n(424)),i),i=Fh(t,i,l,o,c);break e}else for(kn=er(i.stateNode.containerInfo.firstChild),Bn=i,Bt=!0,ri=null,o=qd(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ps(),l===c){i=bi(t,i,o);break e}En(t,i,l,o)}i=i.child}return i;case 5:return Jd(i),t===null&&hu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,E=c.children,ru(l,c)?E=null:h!==null&&ru(l,h)&&(i.flags|=32),Nh(t,i),En(t,i,E,o),i.child;case 6:return t===null&&hu(i),null;case 13:return Oh(t,i,o);case 4:return Su(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ms(i,null,l,o):En(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:si(l,c),Ph(t,i,l,c,o);case 7:return En(t,i,i.pendingProps,o),i.child;case 8:return En(t,i,i.pendingProps.children,o),i.child;case 12:return En(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,E=c.value,Nt(va,l._currentValue),l._currentValue=E,h!==null)if(ii(h.value,E)){if(h.children===c.children&&!Rn.current){i=bi(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var L=h.dependencies;if(L!==null){E=h.child;for(var O=L.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=Pi(-1,o&-o),O.tag=2;var Q=h.updateQueue;if(Q!==null){Q=Q.shared;var _e=Q.pending;_e===null?O.next=O:(O.next=_e.next,_e.next=O),Q.pending=O}}h.lanes|=o,O=h.alternate,O!==null&&(O.lanes|=o),vu(h.return,o,i),L.lanes|=o;break}O=O.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=o,L=E.alternate,L!==null&&(L.lanes|=o),vu(E,o,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}En(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,_s(i,o),c=Yn(c),l=l(c),i.flags|=1,En(t,i,l,o),i.child;case 14:return l=i.type,c=si(l,i.pendingProps),c=si(l.type,c),bh(t,i,l,c,o);case 15:return Dh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:si(l,c),ba(t,i),i.tag=1,Pn(l)?(t=!0,da(i)):t=!1,_s(i,o),Eh(i,l,c),Uu(i,l,c,o),Bu(null,i,l,!0,t,o);case 19:return kh(t,i,o);case 22:return Lh(t,i,o)}throw Error(n(156,i.tag))};function up(t,i){return T(t,i)}function C_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,o,l){return new C_(t,i,o,l)}function rc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function R_(t){if(typeof t=="function")return rc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ae)return 11;if(t===pe)return 14}return 2}function fr(t,i){var o=t.alternate;return o===null?(o=Kn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ha(t,i,o,l,c,h){var E=2;if(l=t,typeof t=="function")rc(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case F:return Or(o.children,c,h,i);case j:E=8,c|=8;break;case R:return t=Kn(12,o,i,c|2),t.elementType=R,t.lanes=h,t;case J:return t=Kn(13,o,i,c),t.elementType=J,t.lanes=h,t;case oe:return t=Kn(19,o,i,c),t.elementType=oe,t.lanes=h,t;case he:return Va(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:E=10;break e;case V:E=9;break e;case ae:E=11;break e;case pe:E=14;break e;case se:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Kn(E,o,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Or(t,i,o,l){return t=Kn(7,t,l,i),t.lanes=o,t}function Va(t,i,o,l){return t=Kn(22,t,l,i),t.elementType=he,t.lanes=o,t.stateNode={isHidden:!1},t}function sc(t,i,o){return t=Kn(6,t,null,i),t.lanes=o,t}function oc(t,i,o){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function P_(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cn(0),this.expirationTimes=cn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cn(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function ac(t,i,o,l,c,h,E,L,O){return t=new P_(t,i,o,L,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Kn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},yu(h),t}function b_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function cp(t){if(!t)return nr;t=t._reactInternals;e:{if(hi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Pn(o))return Bd(t,o,i)}return i}function fp(t,i,o,l,c,h,E,L,O){return t=ac(o,l,!0,t,c,h,E,L,O),t.context=cp(null),o=t.current,l=Mn(),c=ur(o),h=Pi(l,c),h.callback=i??null,sr(o,h,c),t.current.lanes=c,Gt(t,c,l),Ln(t,l),t}function Ga(t,i,o,l){var c=i.current,h=Mn(),E=ur(c);return o=cp(o),i.context===null?i.context=o:i.pendingContext=o,i=Pi(h,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=sr(c,i,E),t!==null&&(li(t,c,E,h),ya(t,c,E)),E}function Wa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function lc(t,i){dp(t,i),(t=t.alternate)&&dp(t,i)}function D_(){return null}var hp=typeof reportError=="function"?reportError:function(t){console.error(t)};function uc(t){this._internalRoot=t}Xa.prototype.render=uc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ga(t,i,null,null)},Xa.prototype.unmount=uc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ur(function(){Ga(null,t,null,null)}),i[Ti]=null}};function Xa(t){this._internalRoot=t}Xa.prototype.unstable_scheduleHydration=function(t){if(t){var i=Kf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Zi.length&&i!==0&&i<Zi[o].priority;o++);Zi.splice(o,0,t),o===0&&Jf(t)}};function cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ja(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pp(){}function L_(t,i,o,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var Q=Wa(E);h.call(Q)}}var E=fp(i,l,t,0,null,!1,!1,"",pp);return t._reactRootContainer=E,t[Ti]=E.current,mo(t.nodeType===8?t.parentNode:t),Ur(),E}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var L=l;l=function(){var Q=Wa(O);L.call(Q)}}var O=ac(t,0,!1,null,null,!1,!1,"",pp);return t._reactRootContainer=O,t[Ti]=O.current,mo(t.nodeType===8?t.parentNode:t),Ur(function(){Ga(i,O,o,l)}),O}function Ya(t,i,o,l,c){var h=o._reactRootContainer;if(h){var E=h;if(typeof c=="function"){var L=c;c=function(){var O=Wa(E);L.call(O)}}Ga(i,E,t,c)}else E=L_(o,i,t,c,l);return Wa(E)}qf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=on(i.pendingLanes);o!==0&&(Ar(i,o|1),Ln(i,z()),(yt&6)===0&&(Es=z()+500,ir()))}break;case 13:Ur(function(){var l=Ri(t,1);if(l!==null){var c=Mn();li(l,t,1,c)}}),lc(t,1)}},Il=function(t){if(t.tag===13){var i=Ri(t,134217728);if(i!==null){var o=Mn();li(i,t,134217728,o)}lc(t,134217728)}},$f=function(t){if(t.tag===13){var i=ur(t),o=Ri(t,i);if(o!==null){var l=Mn();li(o,t,i,l)}lc(t,i)}},Kf=function(){return pt},Zf=function(t,i){var o=pt;try{return pt=t,i()}finally{pt=o}},Ce=function(t,i,o){switch(i){case"input":if(ut(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=ca(l);if(!c)throw Error(n(90));gt(l),ut(l,c)}}}break;case"textarea":de(t,o);break;case"select":i=o.value,i!=null&&b(t,!!o.multiple,i,!1)}},Ut=tc,$t=Ur;var N_={usingClientEntryPoint:!1,Events:[vo,us,ca,be,rt,tc]},Lo={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},U_={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yo(t),t===null?null:t.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||D_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{je=qa.inject(U_),st=qa}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N_,Nn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cc(i))throw Error(n(200));return b_(t,i,null,o)},Nn.createRoot=function(t,i){if(!cc(t))throw Error(n(299));var o=!1,l="",c=hp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=ac(t,1,!1,null,null,o,!1,l,c),t[Ti]=i.current,mo(t.nodeType===8?t.parentNode:t),new uc(i)},Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Yo(i),t=t===null?null:t.stateNode,t},Nn.flushSync=function(t){return Ur(t)},Nn.hydrate=function(t,i,o){if(!ja(i))throw Error(n(200));return Ya(null,t,i,!0,o)},Nn.hydrateRoot=function(t,i,o){if(!cc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,h="",E=hp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=fp(i,null,t,1,o??null,c,!1,h,E),t[Ti]=i.current,mo(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Xa(i)},Nn.render=function(t,i,o){if(!ja(i))throw Error(n(200));return Ya(null,t,i,!1,o)},Nn.unmountComponentAtNode=function(t){if(!ja(t))throw Error(n(40));return t._reactRootContainer?(Ur(function(){Ya(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1},Nn.unstable_batchedUpdates=tc,Nn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!ja(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ya(t,i,o,!1,l)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var Ep;function W_(){if(Ep)return hc.exports;Ep=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),hc.exports=G_(),hc.exports}var Mp;function X_(){if(Mp)return $a;Mp=1;var s=W_();return $a.createRoot=s.createRoot,$a.hydrateRoot=s.hydrateRoot,$a}var j_=X_();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ff="171",Hs={ROTATE:0,DOLLY:1,PAN:2},ks={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Y_=0,Tp=1,q_=2,Tm=1,$_=2,Oi=3,Gi=0,Fn=1,Bi=2,Sr=0,Vs=1,Ap=2,wp=3,Cp=4,K_=5,Xr=100,Z_=101,Q_=102,J_=103,ev=104,tv=200,nv=201,iv=202,rv=203,jc=204,Yc=205,sv=206,ov=207,av=208,lv=209,uv=210,cv=211,fv=212,dv=213,hv=214,qc=0,$c=1,Kc=2,Xs=3,Zc=4,Qc=5,Jc=6,ef=7,Am=0,pv=1,mv=2,Hi=0,gv=1,_v=2,vv=3,xv=4,yv=5,Sv=6,Ev=7,wm=300,js=301,Ys=302,tf=303,nf=304,bl=306,rf=1e3,Jn=1001,sf=1002,An=1003,Mv=1004,Ka=1005,ei=1006,gc=1007,Yr=1008,Si=1009,Cm=1010,Rm=1011,qs=1012,Of=1013,$r=1014,ki=1015,zo=1016,Bf=1017,kf=1018,$s=1020,Pm=35902,bm=1021,Dm=1022,ti=1023,Lm=1024,Nm=1025,Gs=1026,Ks=1027,zf=1028,Hf=1029,Um=1030,Vf=1031,Gf=1033,xl=33776,yl=33777,Sl=33778,El=33779,of=35840,af=35841,lf=35842,uf=35843,cf=36196,ff=37492,df=37496,hf=37808,pf=37809,mf=37810,gf=37811,_f=37812,vf=37813,xf=37814,yf=37815,Sf=37816,Ef=37817,Mf=37818,Tf=37819,Af=37820,wf=37821,Ml=36492,Cf=36494,Rf=36495,Im=36283,Pf=36284,bf=36285,Df=36286,Tv=3200,Av=3201,wv=0,Cv=1,yr="",Gn="srgb",Zs="srgb-linear",Cl="linear",Pt="srgb",Ts=7680,Rp=519,Rv=512,Pv=513,bv=514,Fm=515,Dv=516,Lv=517,Nv=518,Uv=519,Pp=35044,bp="300 es",zi=2e3,Rl=2001;class Qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,d=a.length;u<d;u++)a[u].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tl=Math.PI/180,Lf=180/Math.PI;function Ho(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[n&63|128]+gn[n>>8&255]+"-"+gn[n>>16&255]+gn[n>>24&255]+gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]).toLowerCase()}function mt(s,e,n){return Math.max(e,Math.min(n,s))}function Iv(s,e){return(s%e+e)%e}function _c(s,e,n){return(1-n)*s+n*e}function Uo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Fv={DEG2RAD:Tl};class dt{constructor(e=0,n=0){dt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*a+e.x,this.y=u*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,u,d,f,p,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,d,f,p,m)}set(e,n,r,a,u,d,f,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=f,_[3]=n,_[4]=u,_[5]=p,_[6]=r,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,d=r[0],f=r[3],p=r[6],m=r[1],_=r[4],v=r[7],x=r[2],S=r[5],A=r[8],w=a[0],y=a[3],g=a[6],I=a[1],N=a[4],P=a[7],X=a[2],D=a[5],F=a[8];return u[0]=d*w+f*I+p*X,u[3]=d*y+f*N+p*D,u[6]=d*g+f*P+p*F,u[1]=m*w+_*I+v*X,u[4]=m*y+_*N+v*D,u[7]=m*g+_*P+v*F,u[2]=x*w+S*I+A*X,u[5]=x*y+S*N+A*D,u[8]=x*g+S*P+A*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],f=e[5],p=e[6],m=e[7],_=e[8];return n*d*_-n*f*m-r*u*_+r*f*p+a*u*m-a*d*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],f=e[5],p=e[6],m=e[7],_=e[8],v=_*d-f*m,x=f*p-_*u,S=m*u-d*p,A=n*v+r*x+a*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=v*w,e[1]=(a*m-_*r)*w,e[2]=(f*r-a*d)*w,e[3]=x*w,e[4]=(_*n-a*p)*w,e[5]=(a*u-f*n)*w,e[6]=S*w,e[7]=(r*p-m*n)*w,e[8]=(d*n-r*u)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,d,f){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*f)+d+e,-a*m,a*p,-a*(-m*d+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(vc.makeScale(e,n)),this}rotate(e){return this.premultiply(vc.makeRotation(-e)),this}translate(e,n){return this.premultiply(vc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vc=new ot;function Om(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Pl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ov(){const s=Pl("canvas");return s.style.display="block",s}const Dp={};function Bs(s){s in Dp||(Dp[s]=!0,console.warn(s))}function Bv(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function kv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Lp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Np=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hv(){const s={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(a,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Pt&&(a.r=Vi(a.r),a.g=Vi(a.g),a.b=Vi(a.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Pt&&(a.r=Ws(a.r),a.g=Ws(a.g),a.b=Ws(a.b))),a},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===yr?Cl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,d){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Zs]:{primaries:e,whitePoint:r,transfer:Cl,toXYZ:Lp,fromXYZ:Np,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:r,transfer:Pt,toXYZ:Lp,fromXYZ:Np,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),s}const Tt=Hv();function Vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let As;class Vv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{As===void 0&&(As=Pl("canvas")),As.width=e.width,As.height=e.height;const r=As.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=As}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Pl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let d=0;d<u.length;d++)u[d]=Vi(u[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Vi(n[r]/255)*255):n[r]=Vi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gv=0;class Bm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let d=0,f=a.length;d<f;d++)a[d].isDataTexture?u.push(xc(a[d].image)):u.push(xc(a[d]))}else u=xc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function xc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Vv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wv=0;class wn extends Qr{constructor(e=wn.DEFAULT_IMAGE,n=wn.DEFAULT_MAPPING,r=Jn,a=Jn,u=ei,d=Yr,f=ti,p=Si,m=wn.DEFAULT_ANISOTROPY,_=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=Ho(),this.name="",this.source=new Bm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rf:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case sf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rf:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case sf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=wm;wn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,n=0,r=0,a=1){Xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*u,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*u,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*u,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],_=p[4],v=p[8],x=p[1],S=p[5],A=p[9],w=p[2],y=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(v-w)<.01&&Math.abs(A-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+w)<.1&&Math.abs(A+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(m+1)/2,P=(S+1)/2,X=(g+1)/2,D=(_+x)/4,F=(v+w)/4,j=(A+y)/4;return N>P&&N>X?N<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(N),a=D/r,u=F/r):P>X?P<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(P),r=D/a,u=j/a):X<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(X),r=F/u,a=j/u),this.set(r,a,u,n),this}let I=Math.sqrt((y-A)*(y-A)+(v-w)*(v-w)+(x-_)*(x-_));return Math.abs(I)<.001&&(I=1),this.x=(y-A)/I,this.y=(v-w)/I,this.z=(x-_)/I,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this.z=mt(this.z,e.z,n.z),this.w=mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this.z=mt(this.z,e,n),this.w=mt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xv extends Qr{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Xt(0,0,e,n),this.scissorTest=!1,this.viewport=new Xt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new wn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=u.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Bm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends Xv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class km extends wn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zm extends wn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zr{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,d,f){let p=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=u[d+0],S=u[d+1],A=u[d+2],w=u[d+3];if(f===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(f===1){e[n+0]=x,e[n+1]=S,e[n+2]=A,e[n+3]=w;return}if(v!==w||p!==x||m!==S||_!==A){let y=1-f;const g=p*x+m*S+_*A+v*w,I=g>=0?1:-1,N=1-g*g;if(N>Number.EPSILON){const X=Math.sqrt(N),D=Math.atan2(X,g*I);y=Math.sin(y*D)/X,f=Math.sin(f*D)/X}const P=f*I;if(p=p*y+x*P,m=m*y+S*P,_=_*y+A*P,v=v*y+w*P,y===1-f){const X=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=X,m*=X,_*=X,v*=X}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,u,d){const f=r[a],p=r[a+1],m=r[a+2],_=r[a+3],v=u[d],x=u[d+1],S=u[d+2],A=u[d+3];return e[n]=f*A+_*v+p*S-m*x,e[n+1]=p*A+_*x+m*v-f*S,e[n+2]=m*A+_*S+f*x-p*v,e[n+3]=_*A-f*v-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(r/2),_=f(a/2),v=f(u/2),x=p(r/2),S=p(a/2),A=p(u/2);switch(d){case"XYZ":this._x=x*_*v+m*S*A,this._y=m*S*v-x*_*A,this._z=m*_*A+x*S*v,this._w=m*_*v-x*S*A;break;case"YXZ":this._x=x*_*v+m*S*A,this._y=m*S*v-x*_*A,this._z=m*_*A-x*S*v,this._w=m*_*v+x*S*A;break;case"ZXY":this._x=x*_*v-m*S*A,this._y=m*S*v+x*_*A,this._z=m*_*A+x*S*v,this._w=m*_*v-x*S*A;break;case"ZYX":this._x=x*_*v-m*S*A,this._y=m*S*v+x*_*A,this._z=m*_*A-x*S*v,this._w=m*_*v+x*S*A;break;case"YZX":this._x=x*_*v+m*S*A,this._y=m*S*v+x*_*A,this._z=m*_*A-x*S*v,this._w=m*_*v-x*S*A;break;case"XZY":this._x=x*_*v-m*S*A,this._y=m*S*v-x*_*A,this._z=m*_*A+x*S*v,this._w=m*_*v+x*S*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],d=n[1],f=n[5],p=n[9],m=n[2],_=n[6],v=n[10],x=r+f+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-p)*S,this._y=(u-m)*S,this._z=(d-a)*S}else if(r>f&&r>v){const S=2*Math.sqrt(1+r-f-v);this._w=(_-p)/S,this._x=.25*S,this._y=(a+d)/S,this._z=(u+m)/S}else if(f>v){const S=2*Math.sqrt(1+f-r-v);this._w=(u-m)/S,this._x=(a+d)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+v-r-f);this._w=(d-a)/S,this._x=(u+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,d=e._w,f=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+d*f+a*m-u*p,this._y=a*_+d*p+u*f-r*m,this._z=u*_+d*m+r*p-a*f,this._w=d*_-r*f-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,d=this._w;let f=d*e._w+r*e._x+a*e._y+u*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=a,this._z=u,this;const p=1-f*f;if(p<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,f),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=d*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Up.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Up.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,d=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*d,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*d,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*a-f*r),_=2*(f*n-u*a),v=2*(u*r-d*n);return this.x=n+p*m+d*v-f*_,this.y=r+p*_+f*m-u*v,this.z=a+p*v+u*_-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this.z=mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this.z=mt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,d=n.x,f=n.y,p=n.z;return this.x=a*p-u*f,this.y=u*d-r*p,this.z=r*f-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yc=new Z,Up=new Zr;class Vo{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ui.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ui.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ui.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=u.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,ui):ui.fromBufferAttribute(u,d),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Za.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Za.copy(r.boundingBox)),Za.applyMatrix4(e.matrixWorld),this.union(Za)}const a=e.children;for(let u=0,d=a.length;u<d;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),Qa.subVectors(this.max,Io),ws.subVectors(e.a,Io),Cs.subVectors(e.b,Io),Rs.subVectors(e.c,Io),hr.subVectors(Cs,ws),pr.subVectors(Rs,Cs),Br.subVectors(ws,Rs);let n=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-Br.z,Br.y,hr.z,0,-hr.x,pr.z,0,-pr.x,Br.z,0,-Br.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-Br.y,Br.x,0];return!Sc(n,ws,Cs,Rs,Qa)||(n=[1,0,0,0,1,0,0,0,1],!Sc(n,ws,Cs,Rs,Qa))?!1:(Ja.crossVectors(hr,pr),n=[Ja.x,Ja.y,Ja.z],Sc(n,ws,Cs,Rs,Qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ui=new Z,Za=new Vo,ws=new Z,Cs=new Z,Rs=new Z,hr=new Z,pr=new Z,Br=new Z,Io=new Z,Qa=new Z,Ja=new Z,kr=new Z;function Sc(s,e,n,r,a){for(let u=0,d=s.length-3;u<=d;u+=3){kr.fromArray(s,u);const f=a.x*Math.abs(kr.x)+a.y*Math.abs(kr.y)+a.z*Math.abs(kr.z),p=e.dot(kr),m=n.dot(kr),_=r.dot(kr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>f)return!1}return!0}const jv=new Vo,Fo=new Z,Ec=new Z;class Wf{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):jv.setFromPoints(e).getCenter(r);let a=0;for(let u=0,d=e.length;u<d;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const n=Fo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Fo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(Ec)),this.expandByPoint(Fo.copy(e.center).sub(Ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new Z,Mc=new Z,el=new Z,mr=new Z,Tc=new Z,tl=new Z,Ac=new Z;class Hm{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,n),Ni.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Mc.copy(e).add(n).multiplyScalar(.5),el.copy(n).sub(e).normalize(),mr.copy(this.origin).sub(Mc);const u=e.distanceTo(n)*.5,d=-this.direction.dot(el),f=mr.dot(this.direction),p=-mr.dot(el),m=mr.lengthSq(),_=Math.abs(1-d*d);let v,x,S,A;if(_>0)if(v=d*p-f,x=d*f-p,A=u*_,v>=0)if(x>=-A)if(x<=A){const w=1/_;v*=w,x*=w,S=v*(v+d*x+2*f)+x*(d*v+x+2*p)+m}else x=u,v=Math.max(0,-(d*x+f)),S=-v*v+x*(x+2*p)+m;else x=-u,v=Math.max(0,-(d*x+f)),S=-v*v+x*(x+2*p)+m;else x<=-A?(v=Math.max(0,-(-d*u+f)),x=v>0?-u:Math.min(Math.max(-u,-p),u),S=-v*v+x*(x+2*p)+m):x<=A?(v=0,x=Math.min(Math.max(-u,-p),u),S=x*(x+2*p)+m):(v=Math.max(0,-(d*u+f)),x=v>0?u:Math.min(Math.max(-u,-p),u),S=-v*v+x*(x+2*p)+m);else x=d>0?-u:u,v=Math.max(0,-(d*x+f)),S=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Mc).addScaledVector(el,x),S}intersectSphere(e,n){Ni.subVectors(e.center,this.origin);const r=Ni.dot(this.direction),a=Ni.dot(Ni)-r*r,u=e.radius*e.radius;if(a>u)return null;const d=Math.sqrt(u-a),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,d,f,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(u=(e.min.y-x.y)*_,d=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,d=(e.min.y-x.y)*_),r>d||u>a||((u>r||isNaN(r))&&(r=u),(d<a||isNaN(a))&&(a=d),v>=0?(f=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(f=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),r>p||f>a)||((f>r||r!==r)&&(r=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,n,r,a,u){Tc.subVectors(n,e),tl.subVectors(r,e),Ac.crossVectors(Tc,tl);let d=this.direction.dot(Ac),f;if(d>0){if(a)return null;f=1}else if(d<0)f=-1,d=-d;else return null;mr.subVectors(this.origin,e);const p=f*this.direction.dot(tl.crossVectors(mr,tl));if(p<0)return null;const m=f*this.direction.dot(Tc.cross(mr));if(m<0||p+m>d)return null;const _=-f*mr.dot(Ac);return _<0?null:this.at(_/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,n,r,a,u,d,f,p,m,_,v,x,S,A,w,y){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,d,f,p,m,_,v,x,S,A,w,y)}set(e,n,r,a,u,d,f,p,m,_,v,x,S,A,w,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=d,g[9]=f,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=S,g[7]=A,g[11]=w,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ps.setFromMatrixColumn(e,0).length(),u=1/Ps.setFromMatrixColumn(e,1).length(),d=1/Ps.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=d*_,S=d*v,A=f*_,w=f*v;n[0]=p*_,n[4]=-p*v,n[8]=m,n[1]=S+A*m,n[5]=x-w*m,n[9]=-f*p,n[2]=w-x*m,n[6]=A+S*m,n[10]=d*p}else if(e.order==="YXZ"){const x=p*_,S=p*v,A=m*_,w=m*v;n[0]=x+w*f,n[4]=A*f-S,n[8]=d*m,n[1]=d*v,n[5]=d*_,n[9]=-f,n[2]=S*f-A,n[6]=w+x*f,n[10]=d*p}else if(e.order==="ZXY"){const x=p*_,S=p*v,A=m*_,w=m*v;n[0]=x-w*f,n[4]=-d*v,n[8]=A+S*f,n[1]=S+A*f,n[5]=d*_,n[9]=w-x*f,n[2]=-d*m,n[6]=f,n[10]=d*p}else if(e.order==="ZYX"){const x=d*_,S=d*v,A=f*_,w=f*v;n[0]=p*_,n[4]=A*m-S,n[8]=x*m+w,n[1]=p*v,n[5]=w*m+x,n[9]=S*m-A,n[2]=-m,n[6]=f*p,n[10]=d*p}else if(e.order==="YZX"){const x=d*p,S=d*m,A=f*p,w=f*m;n[0]=p*_,n[4]=w-x*v,n[8]=A*v+S,n[1]=v,n[5]=d*_,n[9]=-f*_,n[2]=-m*_,n[6]=S*v+A,n[10]=x-w*v}else if(e.order==="XZY"){const x=d*p,S=d*m,A=f*p,w=f*m;n[0]=p*_,n[4]=-v,n[8]=m*_,n[1]=x*v+w,n[5]=d*_,n[9]=S*v-A,n[2]=A*v-S,n[6]=f*_,n[10]=w*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yv,e,qv)}lookAt(e,n,r){const a=this.elements;return Hn.subVectors(e,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),gr.crossVectors(r,Hn),gr.lengthSq()===0&&(Math.abs(r.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),gr.crossVectors(r,Hn)),gr.normalize(),nl.crossVectors(Hn,gr),a[0]=gr.x,a[4]=nl.x,a[8]=Hn.x,a[1]=gr.y,a[5]=nl.y,a[9]=Hn.y,a[2]=gr.z,a[6]=nl.z,a[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,d=r[0],f=r[4],p=r[8],m=r[12],_=r[1],v=r[5],x=r[9],S=r[13],A=r[2],w=r[6],y=r[10],g=r[14],I=r[3],N=r[7],P=r[11],X=r[15],D=a[0],F=a[4],j=a[8],R=a[12],C=a[1],V=a[5],ae=a[9],J=a[13],oe=a[2],pe=a[6],se=a[10],he=a[14],k=a[3],le=a[7],re=a[11],U=a[15];return u[0]=d*D+f*C+p*oe+m*k,u[4]=d*F+f*V+p*pe+m*le,u[8]=d*j+f*ae+p*se+m*re,u[12]=d*R+f*J+p*he+m*U,u[1]=_*D+v*C+x*oe+S*k,u[5]=_*F+v*V+x*pe+S*le,u[9]=_*j+v*ae+x*se+S*re,u[13]=_*R+v*J+x*he+S*U,u[2]=A*D+w*C+y*oe+g*k,u[6]=A*F+w*V+y*pe+g*le,u[10]=A*j+w*ae+y*se+g*re,u[14]=A*R+w*J+y*he+g*U,u[3]=I*D+N*C+P*oe+X*k,u[7]=I*F+N*V+P*pe+X*le,u[11]=I*j+N*ae+P*se+X*re,u[15]=I*R+N*J+P*he+X*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],d=e[1],f=e[5],p=e[9],m=e[13],_=e[2],v=e[6],x=e[10],S=e[14],A=e[3],w=e[7],y=e[11],g=e[15];return A*(+u*p*v-a*m*v-u*f*x+r*m*x+a*f*S-r*p*S)+w*(+n*p*S-n*m*x+u*d*x-a*d*S+a*m*_-u*p*_)+y*(+n*m*v-n*f*S-u*d*v+r*d*S+u*f*_-r*m*_)+g*(-a*f*_-n*p*v+n*f*x+a*d*v-r*d*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],f=e[5],p=e[6],m=e[7],_=e[8],v=e[9],x=e[10],S=e[11],A=e[12],w=e[13],y=e[14],g=e[15],I=v*y*m-w*x*m+w*p*S-f*y*S-v*p*g+f*x*g,N=A*x*m-_*y*m-A*p*S+d*y*S+_*p*g-d*x*g,P=_*w*m-A*v*m+A*f*S-d*w*S-_*f*g+d*v*g,X=A*v*p-_*w*p-A*f*x+d*w*x+_*f*y-d*v*y,D=n*I+r*N+a*P+u*X;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/D;return e[0]=I*F,e[1]=(w*x*u-v*y*u-w*a*S+r*y*S+v*a*g-r*x*g)*F,e[2]=(f*y*u-w*p*u+w*a*m-r*y*m-f*a*g+r*p*g)*F,e[3]=(v*p*u-f*x*u-v*a*m+r*x*m+f*a*S-r*p*S)*F,e[4]=N*F,e[5]=(_*y*u-A*x*u+A*a*S-n*y*S-_*a*g+n*x*g)*F,e[6]=(A*p*u-d*y*u-A*a*m+n*y*m+d*a*g-n*p*g)*F,e[7]=(d*x*u-_*p*u+_*a*m-n*x*m-d*a*S+n*p*S)*F,e[8]=P*F,e[9]=(A*v*u-_*w*u-A*r*S+n*w*S+_*r*g-n*v*g)*F,e[10]=(d*w*u-A*f*u+A*r*m-n*w*m-d*r*g+n*f*g)*F,e[11]=(_*f*u-d*v*u-_*r*m+n*v*m+d*r*S-n*f*S)*F,e[12]=X*F,e[13]=(_*w*a-A*v*a+A*r*x-n*w*x-_*r*y+n*v*y)*F,e[14]=(A*f*a-d*w*a-A*r*p+n*w*p+d*r*y-n*f*y)*F,e[15]=(d*v*a-_*f*a+_*r*p-n*v*p-d*r*x+n*f*x)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,d=e.x,f=e.y,p=e.z,m=u*d,_=u*f;return this.set(m*d+r,m*f-a*p,m*p+a*f,0,m*f+a*p,_*f+r,_*p-a*d,0,m*p-a*f,_*p+a*d,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,d){return this.set(1,r,u,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,d=n._y,f=n._z,p=n._w,m=u+u,_=d+d,v=f+f,x=u*m,S=u*_,A=u*v,w=d*_,y=d*v,g=f*v,I=p*m,N=p*_,P=p*v,X=r.x,D=r.y,F=r.z;return a[0]=(1-(w+g))*X,a[1]=(S+P)*X,a[2]=(A-N)*X,a[3]=0,a[4]=(S-P)*D,a[5]=(1-(x+g))*D,a[6]=(y+I)*D,a[7]=0,a[8]=(A+N)*F,a[9]=(y-I)*F,a[10]=(1-(x+w))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Ps.set(a[0],a[1],a[2]).length();const d=Ps.set(a[4],a[5],a[6]).length(),f=Ps.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ci.copy(this);const m=1/u,_=1/d,v=1/f;return ci.elements[0]*=m,ci.elements[1]*=m,ci.elements[2]*=m,ci.elements[4]*=_,ci.elements[5]*=_,ci.elements[6]*=_,ci.elements[8]*=v,ci.elements[9]*=v,ci.elements[10]*=v,n.setFromRotationMatrix(ci),r.x=u,r.y=d,r.z=f,this}makePerspective(e,n,r,a,u,d,f=zi){const p=this.elements,m=2*u/(n-e),_=2*u/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let S,A;if(f===zi)S=-(d+u)/(d-u),A=-2*d*u/(d-u);else if(f===Rl)S=-d/(d-u),A=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,d,f=zi){const p=this.elements,m=1/(n-e),_=1/(r-a),v=1/(d-u),x=(n+e)*m,S=(r+a)*_;let A,w;if(f===zi)A=(d+u)*v,w=-2*v;else if(f===Rl)A=u*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=w,p[14]=-A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ps=new Z,ci=new qt,Yv=new Z(0,0,0),qv=new Z(1,1,1),gr=new Z,nl=new Z,Hn=new Z,Ip=new qt,Fp=new Zr;class Wi{constructor(e=0,n=0,r=0,a=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],d=a[4],f=a[8],p=a[1],m=a[5],_=a[9],v=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-mt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ip,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fp.setFromEuler(this),this.setFromQuaternion(Fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class Vm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $v=0;const Op=new Z,bs=new Zr,Ui=new qt,il=new Z,Oo=new Z,Kv=new Z,Zv=new Zr,Bp=new Z(1,0,0),kp=new Z(0,1,0),zp=new Z(0,0,1),Hp={type:"added"},Qv={type:"removed"},Ds={type:"childadded",child:null},wc={type:"childremoved",child:null};class Wn extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new Z,n=new Wi,r=new Zr,a=new Z(1,1,1);function u(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new qt},normalMatrix:{value:new ot}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Bp,e)}rotateY(e){return this.rotateOnAxis(kp,e)}rotateZ(e){return this.rotateOnAxis(zp,e)}translateOnAxis(e,n){return Op.copy(e).applyQuaternion(this.quaternion),this.position.add(Op.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bp,e)}translateY(e){return this.translateOnAxis(kp,e)}translateZ(e){return this.translateOnAxis(zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?il.copy(e):il.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Oo,il,this.up):Ui.lookAt(il,Oo,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),bs.setFromRotationMatrix(Ui),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hp),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Qv),wc.child=e,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hp),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,d=a.length;u<d;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,Kv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,Zv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,d=a.length;u<d;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(u(e.materials,this.material[p]));a.material=f}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(u(e.animations,p))}}if(n){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),_=d(e.images),v=d(e.shapes),x=d(e.skeletons),S=d(e.animations),A=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),A.length>0&&(r.nodes=A)}return r.object=a,r;function d(f){const p=[];for(const m in f){const _=f[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Wn.DEFAULT_UP=new Z(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new Z,Ii=new Z,Cc=new Z,Fi=new Z,Ls=new Z,Ns=new Z,Vp=new Z,Rc=new Z,Pc=new Z,bc=new Z,Dc=new Xt,Lc=new Xt,Nc=new Xt;class di{constructor(e=new Z,n=new Z,r=new Z){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),fi.subVectors(e,n),a.cross(fi);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){fi.subVectors(a,n),Ii.subVectors(r,n),Cc.subVectors(e,n);const d=fi.dot(fi),f=fi.dot(Ii),p=fi.dot(Cc),m=Ii.dot(Ii),_=Ii.dot(Cc),v=d*m-f*f;if(v===0)return u.set(0,0,0),null;const x=1/v,S=(m*p-f*_)*x,A=(d*_-f*p)*x;return u.set(1-S-A,A,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,r,a,u,d,f,p){return this.getBarycoord(e,n,r,a,Fi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Fi.x),p.addScaledVector(d,Fi.y),p.addScaledVector(f,Fi.z),p)}static getInterpolatedAttribute(e,n,r,a,u,d){return Dc.setScalar(0),Lc.setScalar(0),Nc.setScalar(0),Dc.fromBufferAttribute(e,n),Lc.fromBufferAttribute(e,r),Nc.fromBufferAttribute(e,a),d.setScalar(0),d.addScaledVector(Dc,u.x),d.addScaledVector(Lc,u.y),d.addScaledVector(Nc,u.z),d}static isFrontFacing(e,n,r,a){return fi.subVectors(r,n),Ii.subVectors(e,n),fi.cross(Ii).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),fi.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return di.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return di.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let d,f;Ls.subVectors(a,r),Ns.subVectors(u,r),Rc.subVectors(e,r);const p=Ls.dot(Rc),m=Ns.dot(Rc);if(p<=0&&m<=0)return n.copy(r);Pc.subVectors(e,a);const _=Ls.dot(Pc),v=Ns.dot(Pc);if(_>=0&&v<=_)return n.copy(a);const x=p*v-_*m;if(x<=0&&p>=0&&_<=0)return d=p/(p-_),n.copy(r).addScaledVector(Ls,d);bc.subVectors(e,u);const S=Ls.dot(bc),A=Ns.dot(bc);if(A>=0&&S<=A)return n.copy(u);const w=S*m-p*A;if(w<=0&&m>=0&&A<=0)return f=m/(m-A),n.copy(r).addScaledVector(Ns,f);const y=_*A-S*v;if(y<=0&&v-_>=0&&S-A>=0)return Vp.subVectors(u,a),f=(v-_)/(v-_+(S-A)),n.copy(a).addScaledVector(Vp,f);const g=1/(y+w+x);return d=w*g,f=x*g,n.copy(r).addScaledVector(Ls,d).addScaledVector(Ns,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},rl={h:0,s:0,l:0};function Uc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Dt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Tt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Tt.workingColorSpace){if(e=Iv(e,1),n=mt(n,0,1),r=mt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,d=2*r-u;this.r=Uc(d,u,e+1/3),this.g=Uc(d,u,e),this.b=Uc(d,u,e-1/3)}return Tt.toWorkingColorSpace(this,a),this}setStyle(e,n=Gn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=a[1],f=a[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const r=Gm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Tt.fromWorkingColorSpace(_n.copy(this),e),Math.round(mt(_n.r*255,0,255))*65536+Math.round(mt(_n.g*255,0,255))*256+Math.round(mt(_n.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.fromWorkingColorSpace(_n.copy(this),n);const r=_n.r,a=_n.g,u=_n.b,d=Math.max(r,a,u),f=Math.min(r,a,u);let p,m;const _=(f+d)/2;if(f===d)p=0,m=0;else{const v=d-f;switch(m=_<=.5?v/(d+f):v/(2-d-f),d){case r:p=(a-u)/v+(a<u?6:0);break;case a:p=(u-r)/v+2;break;case u:p=(r-a)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(_n.copy(this),n),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Gn){Tt.fromWorkingColorSpace(_n.copy(this),e);const n=_n.r,r=_n.g,a=_n.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+n,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(_r),e.getHSL(rl);const r=_c(_r.h,rl.h,n),a=_c(_r.s,rl.s,n),u=_c(_r.l,rl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Dt;Dt.NAMES=Gm;let Jv=0;class Dl extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=Vs,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=Yc,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==Gi&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==jc&&(r.blendSrc=this.blendSrc),this.blendDst!==Yc&&(r.blendDst=this.blendDst),this.blendEquation!==Xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const d=[];for(const f in u){const p=u[f];delete p.metadata,d.push(p)}return d}if(n){const u=a(e.textures),d=a(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wm extends Dl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=Am,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new Z,sl=new dt;class yi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Pp,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)sl.fromBufferAttribute(this,n),sl.applyMatrix3(e),this.setXY(n,sl.x,sl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Uo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Uo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Uo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Uo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Uo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array),a=Un(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array),a=Un(a,this.array),u=Un(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pp&&(e.usage=this.usage),e}}class Xm extends yi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class jm extends yi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class qr extends yi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let e0=0;const Zn=new qt,Ic=new Wn,Us=new Z,Vn=new Vo,Bo=new Vo,sn=new Z;class Jr extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Om(e)?jm:Xm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ot().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,r){return Zn.makeTranslation(e,n,r),this.applyMatrix4(Zn),this}scale(e,n,r){return Zn.makeScale(e,n,r),this.applyMatrix4(Zn),this}lookAt(e){return Ic.lookAt(e),Ic.updateMatrix(),this.applyMatrix4(Ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const d=e[a];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new qr(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Vn.setFromBufferAttribute(u),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),n)for(let u=0,d=n.length;u<d;u++){const f=n[u];Bo.setFromBufferAttribute(f),this.morphTargetsRelative?(sn.addVectors(Vn.min,Bo.min),Vn.expandByPoint(sn),sn.addVectors(Vn.max,Bo.max),Vn.expandByPoint(sn)):(Vn.expandByPoint(Bo.min),Vn.expandByPoint(Bo.max))}Vn.getCenter(r);let a=0;for(let u=0,d=e.count;u<d;u++)sn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(sn));if(n)for(let u=0,d=n.length;u<d;u++){const f=n[u],p=this.morphTargetsRelative;for(let m=0,_=f.count;m<_;m++)sn.fromBufferAttribute(f,m),p&&(Us.fromBufferAttribute(e,m),sn.add(Us)),a=Math.max(a,r.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let j=0;j<r.count;j++)f[j]=new Z,p[j]=new Z;const m=new Z,_=new Z,v=new Z,x=new dt,S=new dt,A=new dt,w=new Z,y=new Z;function g(j,R,C){m.fromBufferAttribute(r,j),_.fromBufferAttribute(r,R),v.fromBufferAttribute(r,C),x.fromBufferAttribute(u,j),S.fromBufferAttribute(u,R),A.fromBufferAttribute(u,C),_.sub(m),v.sub(m),S.sub(x),A.sub(x);const V=1/(S.x*A.y-A.x*S.y);isFinite(V)&&(w.copy(_).multiplyScalar(A.y).addScaledVector(v,-S.y).multiplyScalar(V),y.copy(v).multiplyScalar(S.x).addScaledVector(_,-A.x).multiplyScalar(V),f[j].add(w),f[R].add(w),f[C].add(w),p[j].add(y),p[R].add(y),p[C].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let j=0,R=I.length;j<R;++j){const C=I[j],V=C.start,ae=C.count;for(let J=V,oe=V+ae;J<oe;J+=3)g(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const N=new Z,P=new Z,X=new Z,D=new Z;function F(j){X.fromBufferAttribute(a,j),D.copy(X);const R=f[j];N.copy(R),N.sub(X.multiplyScalar(X.dot(R))).normalize(),P.crossVectors(D,R);const V=P.dot(p[j])<0?-1:1;d.setXYZW(j,N.x,N.y,N.z,V)}for(let j=0,R=I.length;j<R;++j){const C=I[j],V=C.start,ae=C.count;for(let J=V,oe=V+ae;J<oe;J+=3)F(e.getX(J+0)),F(e.getX(J+1)),F(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new yi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new Z,u=new Z,d=new Z,f=new Z,p=new Z,m=new Z,_=new Z,v=new Z;if(e)for(let x=0,S=e.count;x<S;x+=3){const A=e.getX(x+0),w=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,A),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,y),_.subVectors(d,u),v.subVectors(a,u),_.cross(v),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,y),f.add(_),p.add(_),m.add(_),r.setXYZ(A,f.x,f.y,f.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),d.fromBufferAttribute(n,x+2),_.subVectors(d,u),v.subVectors(a,u),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)sn.fromBufferAttribute(e,n),sn.normalize(),e.setXYZ(n,sn.x,sn.y,sn.z)}toNonIndexed(){function e(f,p){const m=f.array,_=f.itemSize,v=f.normalized,x=new m.constructor(p.length*_);let S=0,A=0;for(let w=0,y=p.length;w<y;w++){f.isInterleavedBufferAttribute?S=p[w]*f.data.stride+f.offset:S=p[w]*_;for(let g=0;g<_;g++)x[A++]=m[S++]}return new yi(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jr,r=this.index.array,a=this.attributes;for(const f in a){const p=a[f],m=e(p,r);n.setAttribute(f,m)}const u=this.morphAttributes;for(const f in u){const p=[],m=u[f];for(let _=0,v=m.length;_<v;_++){const x=m[_],S=e(x,r);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,x=m.length;v<x;v++){const S=m[v];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],v=u[m];for(let x=0,S=v.length;x<S;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,_=d.length;m<_;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gp=new qt,zr=new Hm,ol=new Wf,Wp=new Z,al=new Z,ll=new Z,ul=new Z,Fc=new Z,cl=new Z,Xp=new Z,fl=new Z;class xi extends Wn{constructor(e=new Jr,n=new Wm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=a.length;u<d;u++){const f=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(u&&f){cl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=f[p],v=u[p];_!==0&&(Fc.fromBufferAttribute(v,e),d?cl.addScaledVector(Fc,_):cl.addScaledVector(Fc.sub(n),_))}n.add(cl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ol.copy(r.boundingSphere),ol.applyMatrix4(u),zr.copy(e.ray).recast(e.near),!(ol.containsPoint(zr.origin)===!1&&(zr.intersectSphere(ol,Wp)===null||zr.origin.distanceToSquared(Wp)>(e.far-e.near)**2))&&(Gp.copy(u).invert(),zr.copy(e.ray).applyMatrix4(Gp),!(r.boundingBox!==null&&zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,zr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,d=this.material,f=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,x=u.groups,S=u.drawRange;if(f!==null)if(Array.isArray(d))for(let A=0,w=x.length;A<w;A++){const y=x[A],g=d[y.materialIndex],I=Math.max(y.start,S.start),N=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let P=I,X=N;P<X;P+=3){const D=f.getX(P),F=f.getX(P+1),j=f.getX(P+2);a=dl(this,g,e,r,m,_,v,D,F,j),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const A=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let y=A,g=w;y<g;y+=3){const I=f.getX(y),N=f.getX(y+1),P=f.getX(y+2);a=dl(this,d,e,r,m,_,v,I,N,P),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(d))for(let A=0,w=x.length;A<w;A++){const y=x[A],g=d[y.materialIndex],I=Math.max(y.start,S.start),N=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let P=I,X=N;P<X;P+=3){const D=P,F=P+1,j=P+2;a=dl(this,g,e,r,m,_,v,D,F,j),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const A=Math.max(0,S.start),w=Math.min(p.count,S.start+S.count);for(let y=A,g=w;y<g;y+=3){const I=y,N=y+1,P=y+2;a=dl(this,d,e,r,m,_,v,I,N,P),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function t0(s,e,n,r,a,u,d,f){let p;if(e.side===Fn?p=r.intersectTriangle(d,u,a,!0,f):p=r.intersectTriangle(a,u,d,e.side===Gi,f),p===null)return null;fl.copy(f),fl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(fl);return m<n.near||m>n.far?null:{distance:m,point:fl.clone(),object:s}}function dl(s,e,n,r,a,u,d,f,p,m){s.getVertexPosition(f,al),s.getVertexPosition(p,ll),s.getVertexPosition(m,ul);const _=t0(s,e,n,r,al,ll,ul,Xp);if(_){const v=new Z;di.getBarycoord(Xp,al,ll,ul,v),a&&(_.uv=di.getInterpolatedAttribute(a,f,p,m,v,new dt)),u&&(_.uv1=di.getInterpolatedAttribute(u,f,p,m,v,new dt)),d&&(_.normal=di.getInterpolatedAttribute(d,f,p,m,v,new Z),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:f,b:p,c:m,normal:new Z,materialIndex:0};di.getNormal(al,ll,ul,x.normal),_.face=x,_.barycoord=v}return _}class Js extends Jr{constructor(e=1,n=1,r=1,a=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:d};const f=this;a=Math.floor(a),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],_=[],v=[];let x=0,S=0;A("z","y","x",-1,-1,r,n,e,d,u,0),A("z","y","x",1,-1,r,n,-e,d,u,1),A("x","z","y",1,1,e,r,n,a,d,2),A("x","z","y",1,-1,e,r,-n,a,d,3),A("x","y","z",1,-1,e,n,r,a,u,4),A("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new qr(m,3)),this.setAttribute("normal",new qr(_,3)),this.setAttribute("uv",new qr(v,2));function A(w,y,g,I,N,P,X,D,F,j,R){const C=P/F,V=X/j,ae=P/2,J=X/2,oe=D/2,pe=F+1,se=j+1;let he=0,k=0;const le=new Z;for(let re=0;re<se;re++){const U=re*V-J;for(let ne=0;ne<pe;ne++){const Ue=ne*C-ae;le[w]=Ue*I,le[y]=U*N,le[g]=oe,m.push(le.x,le.y,le.z),le[w]=0,le[y]=0,le[g]=D>0?1:-1,_.push(le.x,le.y,le.z),v.push(ne/F),v.push(1-re/j),he+=1}}for(let re=0;re<j;re++)for(let U=0;U<F;U++){const ne=x+U+pe*re,Ue=x+U+pe*(re+1),K=x+(U+1)+pe*(re+1),ue=x+(U+1)+pe*re;p.push(ne,Ue,ue),p.push(Ue,K,ue),k+=6}f.addGroup(S,k,R),S+=k,x+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Tn(s){const e={};for(let n=0;n<s.length;n++){const r=Qs(s[n]);for(const a in r)e[a]=r[a]}return e}function n0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Ym(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const i0={clone:Qs,merge:Tn};var r0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends Dl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r0,this.fragmentShader=s0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=n0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class qm extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new Z,jp=new dt,Yp=new dt;class Qn extends qm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Lf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lf*2*Math.atan(Math.tan(Tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,n){return this.getViewBounds(e,jp,Yp),n.subVectors(Yp,jp)}setViewOffset(e,n,r,a,u,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Tl*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*a/p,n-=d.offsetY*r/m,a*=d.width/p,r*=d.height/m}const f=this.filmOffset;f!==0&&(u+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Is=-90,Fs=1;class o0 extends Wn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Qn(Is,Fs,e,n);a.layers=this.layers,this.add(a);const u=new Qn(Is,Fs,e,n);u.layers=this.layers,this.add(u);const d=new Qn(Is,Fs,e,n);d.layers=this.layers,this.add(d);const f=new Qn(Is,Fs,e,n);f.layers=this.layers,this.add(f);const p=new Qn(Is,Fs,e,n);p.layers=this.layers,this.add(p);const m=new Qn(Is,Fs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,d,f,p]=n;for(const m of n)this.remove(m);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Rl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,f,p,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,x,S),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class $m extends wn{constructor(e,n,r,a,u,d,f,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:js,super(e,n,r,a,u,d,f,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class a0 extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new $m(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ei}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Js(5,5,5),u=new Xi({name:"CubemapFromEquirect",uniforms:Qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Sr});u.uniforms.tEquirect.value=n;const d=new xi(a,u),f=n.minFilter;return n.minFilter===Yr&&(n.minFilter=ei),new o0(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(u)}}class l0 extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class u0 extends wn{constructor(e=null,n=1,r=1,a,u,d,f,p,m=An,_=An,v,x){super(null,d,f,p,m,_,a,u,v,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oc=new Z,c0=new Z,f0=new ot;class xr{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Oc.subVectors(r,n).cross(c0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Oc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||f0.getNormalMatrix(e),a=this.coplanarPoint(Oc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Wf,hl=new Z;class Km{constructor(e=new xr,n=new xr,r=new xr,a=new xr,u=new xr,d=new xr){this.planes=[e,n,r,a,u,d]}set(e,n,r,a,u,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(u),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=zi){const r=this.planes,a=e.elements,u=a[0],d=a[1],f=a[2],p=a[3],m=a[4],_=a[5],v=a[6],x=a[7],S=a[8],A=a[9],w=a[10],y=a[11],g=a[12],I=a[13],N=a[14],P=a[15];if(r[0].setComponents(p-u,x-m,y-S,P-g).normalize(),r[1].setComponents(p+u,x+m,y+S,P+g).normalize(),r[2].setComponents(p+d,x+_,y+A,P+I).normalize(),r[3].setComponents(p-d,x-_,y-A,P-I).normalize(),r[4].setComponents(p-f,x-v,y-w,P-N).normalize(),n===zi)r[5].setComponents(p+f,x+v,y+w,P+N).normalize();else if(n===Rl)r[5].setComponents(f,v,w,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(hl.x=a.normal.x>0?e.max.x:e.min.x,hl.y=a.normal.y>0?e.max.y:e.min.y,hl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(hl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pl extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Zm extends wn{constructor(e,n,r,a,u,d,f,p,m,_=Gs){if(_!==Gs&&_!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Gs&&(r=$r),r===void 0&&_===Ks&&(r=$s),super(null,a,u,d,f,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:An,this.minFilter=p!==void 0?p:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ll extends Jr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,d=n/2,f=Math.floor(r),p=Math.floor(a),m=f+1,_=p+1,v=e/f,x=n/p,S=[],A=[],w=[],y=[];for(let g=0;g<_;g++){const I=g*x-d;for(let N=0;N<m;N++){const P=N*v-u;A.push(P,-I,0),w.push(0,0,1),y.push(N/f),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let I=0;I<f;I++){const N=I+m*g,P=I+m*(g+1),X=I+1+m*(g+1),D=I+1+m*g;S.push(N,P,D),S.push(P,X,D)}this.setIndex(S),this.setAttribute("position",new qr(A,3)),this.setAttribute("normal",new qr(w,3)),this.setAttribute("uv",new qr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.width,e.height,e.widthSegments,e.heightSegments)}}class d0 extends Dl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class h0 extends Dl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class p0 extends qm{constructor(e=-1,n=1,r=1,a=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,d=r+e,f=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class m0 extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qp{constructor(e=1,n=0,r=0){return this.radius=e,this.phi=n,this.theta=r,this}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(mt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class g0 extends Qr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function $p(s,e,n,r){const a=_0(r);switch(n){case bm:return s*e;case Lm:return s*e;case Nm:return s*e*2;case zf:return s*e/a.components*a.byteLength;case Hf:return s*e/a.components*a.byteLength;case Um:return s*e*2/a.components*a.byteLength;case Vf:return s*e*2/a.components*a.byteLength;case Dm:return s*e*3/a.components*a.byteLength;case ti:return s*e*4/a.components*a.byteLength;case Gf:return s*e*4/a.components*a.byteLength;case xl:case yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Sl:case El:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case af:case uf:return Math.max(s,16)*Math.max(e,8)/4;case of:case lf:return Math.max(s,8)*Math.max(e,8)/2;case cf:case ff:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case mf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case gf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case _f:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case vf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case yf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Sf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Mf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Tf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Af:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case wf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ml:case Cf:case Rf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Im:case Pf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case bf:case Df:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function _0(s){switch(s){case Si:case Cm:return{byteLength:1,components:1};case qs:case Rm:case zo:return{byteLength:2,components:1};case Bf:case kf:return{byteLength:2,components:4};case $r:case Of:case ki:return{byteLength:4,components:1};case Pm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ff}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ff);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qm(){let s=null,e=!1,n=null,r=null;function a(u,d){n(u,d),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function v0(s){const e=new WeakMap;function n(f,p){const m=f.array,_=f.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,_),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,p,m){const _=p.array,v=p.updateRanges;if(s.bindBuffer(m,f),v.length===0)s.bufferSubData(m,0,_);else{v.sort((S,A)=>S.start-A.start);let x=0;for(let S=1;S<v.length;S++){const A=v[x],w=v[S];w.start<=A.start+A.count+1?A.count=Math.max(A.count,w.start+w.count-A.start):(++x,v[x]=w)}v.length=x+1;for(let S=0,A=v.length;S<A;S++){const w=v[S];s.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function u(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:a,remove:u,update:d}}var x0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,S0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,w0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,R0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,P0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,L0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,N0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,V0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,G0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,W0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",K0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ox=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_x=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ex=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ax=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ey=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ty=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ny=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ry=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ay=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ly=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ay=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Py=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ly=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ny=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Oy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ky=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$y=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ky=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:x0,alphahash_pars_fragment:y0,alphamap_fragment:S0,alphamap_pars_fragment:E0,alphatest_fragment:M0,alphatest_pars_fragment:T0,aomap_fragment:A0,aomap_pars_fragment:w0,batching_pars_vertex:C0,batching_vertex:R0,begin_vertex:P0,beginnormal_vertex:b0,bsdfs:D0,iridescence_fragment:L0,bumpmap_pars_fragment:N0,clipping_planes_fragment:U0,clipping_planes_pars_fragment:I0,clipping_planes_pars_vertex:F0,clipping_planes_vertex:O0,color_fragment:B0,color_pars_fragment:k0,color_pars_vertex:z0,color_vertex:H0,common:V0,cube_uv_reflection_fragment:G0,defaultnormal_vertex:W0,displacementmap_pars_vertex:X0,displacementmap_vertex:j0,emissivemap_fragment:Y0,emissivemap_pars_fragment:q0,colorspace_fragment:$0,colorspace_pars_fragment:K0,envmap_fragment:Z0,envmap_common_pars_fragment:Q0,envmap_pars_fragment:J0,envmap_pars_vertex:ex,envmap_physical_pars_fragment:fx,envmap_vertex:tx,fog_vertex:nx,fog_pars_vertex:ix,fog_fragment:rx,fog_pars_fragment:sx,gradientmap_pars_fragment:ox,lightmap_pars_fragment:ax,lights_lambert_fragment:lx,lights_lambert_pars_fragment:ux,lights_pars_begin:cx,lights_toon_fragment:dx,lights_toon_pars_fragment:hx,lights_phong_fragment:px,lights_phong_pars_fragment:mx,lights_physical_fragment:gx,lights_physical_pars_fragment:_x,lights_fragment_begin:vx,lights_fragment_maps:xx,lights_fragment_end:yx,logdepthbuf_fragment:Sx,logdepthbuf_pars_fragment:Ex,logdepthbuf_pars_vertex:Mx,logdepthbuf_vertex:Tx,map_fragment:Ax,map_pars_fragment:wx,map_particle_fragment:Cx,map_particle_pars_fragment:Rx,metalnessmap_fragment:Px,metalnessmap_pars_fragment:bx,morphinstance_vertex:Dx,morphcolor_vertex:Lx,morphnormal_vertex:Nx,morphtarget_pars_vertex:Ux,morphtarget_vertex:Ix,normal_fragment_begin:Fx,normal_fragment_maps:Ox,normal_pars_fragment:Bx,normal_pars_vertex:kx,normal_vertex:zx,normalmap_pars_fragment:Hx,clearcoat_normal_fragment_begin:Vx,clearcoat_normal_fragment_maps:Gx,clearcoat_pars_fragment:Wx,iridescence_pars_fragment:Xx,opaque_fragment:jx,packing:Yx,premultiplied_alpha_fragment:qx,project_vertex:$x,dithering_fragment:Kx,dithering_pars_fragment:Zx,roughnessmap_fragment:Qx,roughnessmap_pars_fragment:Jx,shadowmap_pars_fragment:ey,shadowmap_pars_vertex:ty,shadowmap_vertex:ny,shadowmask_pars_fragment:iy,skinbase_vertex:ry,skinning_pars_vertex:sy,skinning_vertex:oy,skinnormal_vertex:ay,specularmap_fragment:ly,specularmap_pars_fragment:uy,tonemapping_fragment:cy,tonemapping_pars_fragment:fy,transmission_fragment:dy,transmission_pars_fragment:hy,uv_pars_fragment:py,uv_pars_vertex:my,uv_vertex:gy,worldpos_vertex:_y,background_vert:vy,background_frag:xy,backgroundCube_vert:yy,backgroundCube_frag:Sy,cube_vert:Ey,cube_frag:My,depth_vert:Ty,depth_frag:Ay,distanceRGBA_vert:wy,distanceRGBA_frag:Cy,equirect_vert:Ry,equirect_frag:Py,linedashed_vert:by,linedashed_frag:Dy,meshbasic_vert:Ly,meshbasic_frag:Ny,meshlambert_vert:Uy,meshlambert_frag:Iy,meshmatcap_vert:Fy,meshmatcap_frag:Oy,meshnormal_vert:By,meshnormal_frag:ky,meshphong_vert:zy,meshphong_frag:Hy,meshphysical_vert:Vy,meshphysical_frag:Gy,meshtoon_vert:Wy,meshtoon_frag:Xy,points_vert:jy,points_frag:Yy,shadow_vert:qy,shadow_frag:$y,sprite_vert:Ky,sprite_frag:Zy},Pe={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},vi={basic:{uniforms:Tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Dt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Tn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Tn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Dt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Tn([Pe.points,Pe.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Tn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Tn([Pe.common,Pe.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Tn([Pe.sprite,Pe.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Tn([Pe.common,Pe.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Tn([Pe.lights,Pe.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};vi.physical={uniforms:Tn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const ml={r:0,b:0,g:0},Vr=new Wi,Qy=new qt;function Jy(s,e,n,r,a,u,d){const f=new Dt(0);let p=u===!0?0:1,m,_,v=null,x=0,S=null;function A(N){let P=N.isScene===!0?N.background:null;return P&&P.isTexture&&(P=(N.backgroundBlurriness>0?n:e).get(P)),P}function w(N){let P=!1;const X=A(N);X===null?g(f,p):X&&X.isColor&&(g(X,1),P=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?r.buffers.color.setClear(0,0,0,1,d):D==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(N,P){const X=A(P);X&&(X.isCubeTexture||X.mapping===bl)?(_===void 0&&(_=new xi(new Js(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Qs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(D,F,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Vr.copy(P.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),_.material.uniforms.envMap.value=X,_.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Qy.makeRotationFromEuler(Vr)),_.material.toneMapped=Tt.getTransfer(X.colorSpace)!==Pt,(v!==X||x!==X.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,v=X,x=X.version,S=s.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):X&&X.isTexture&&(m===void 0&&(m=new xi(new Ll(2,2),new Xi({name:"BackgroundMaterial",uniforms:Qs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=X,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(X.colorSpace)!==Pt,X.matrixAutoUpdate===!0&&X.updateMatrix(),m.material.uniforms.uvTransform.value.copy(X.matrix),(v!==X||x!==X.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=X,x=X.version,S=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function g(N,P){N.getRGB(ml,Ym(s)),r.buffers.color.setClear(ml.r,ml.g,ml.b,P,d)}function I(){_!==void 0&&(_.geometry.dispose(),_.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(N,P=1){f.set(N),p=P,g(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,g(f,p)},render:w,addToRenderList:y,dispose:I}}function eS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,d=!1;function f(C,V,ae,J,oe){let pe=!1;const se=v(J,ae,V);u!==se&&(u=se,m(u.object)),pe=S(C,J,ae,oe),pe&&A(C,J,ae,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(pe||d)&&(d=!1,P(C,V,ae,J),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function _(C){return s.deleteVertexArray(C)}function v(C,V,ae){const J=ae.wireframe===!0;let oe=r[C.id];oe===void 0&&(oe={},r[C.id]=oe);let pe=oe[V.id];pe===void 0&&(pe={},oe[V.id]=pe);let se=pe[J];return se===void 0&&(se=x(p()),pe[J]=se),se}function x(C){const V=[],ae=[],J=[];for(let oe=0;oe<n;oe++)V[oe]=0,ae[oe]=0,J[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ae,attributeDivisors:J,object:C,attributes:{},index:null}}function S(C,V,ae,J){const oe=u.attributes,pe=V.attributes;let se=0;const he=ae.getAttributes();for(const k in he)if(he[k].location>=0){const re=oe[k];let U=pe[k];if(U===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;se++}return u.attributesNum!==se||u.index!==J}function A(C,V,ae,J){const oe={},pe=V.attributes;let se=0;const he=ae.getAttributes();for(const k in he)if(he[k].location>=0){let re=pe[k];re===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(re=C.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),oe[k]=U,se++}u.attributes=oe,u.attributesNum=se,u.index=J}function w(){const C=u.newAttributes;for(let V=0,ae=C.length;V<ae;V++)C[V]=0}function y(C){g(C,0)}function g(C,V){const ae=u.newAttributes,J=u.enabledAttributes,oe=u.attributeDivisors;ae[C]=1,J[C]===0&&(s.enableVertexAttribArray(C),J[C]=1),oe[C]!==V&&(s.vertexAttribDivisor(C,V),oe[C]=V)}function I(){const C=u.newAttributes,V=u.enabledAttributes;for(let ae=0,J=V.length;ae<J;ae++)V[ae]!==C[ae]&&(s.disableVertexAttribArray(ae),V[ae]=0)}function N(C,V,ae,J,oe,pe,se){se===!0?s.vertexAttribIPointer(C,V,ae,oe,pe):s.vertexAttribPointer(C,V,ae,J,oe,pe)}function P(C,V,ae,J){w();const oe=J.attributes,pe=ae.getAttributes(),se=V.defaultAttributeValues;for(const he in pe){const k=pe[he];if(k.location>=0){let le=oe[he];if(le===void 0&&(he==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),he==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const re=le.normalized,U=le.itemSize,ne=e.get(le);if(ne===void 0)continue;const Ue=ne.buffer,K=ne.type,ue=ne.bytesPerElement,Me=K===s.INT||K===s.UNSIGNED_INT||le.gpuType===Of;if(le.isInterleavedBufferAttribute){const ve=le.data,Ae=ve.stride,Ie=le.offset;if(ve.isInstancedInterleavedBuffer){for(let Qe=0;Qe<k.locationSize;Qe++)g(k.location+Qe,ve.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Qe=0;Qe<k.locationSize;Qe++)y(k.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Qe=0;Qe<k.locationSize;Qe++)N(k.location+Qe,U/k.locationSize,K,re,Ae*ue,(Ie+U/k.locationSize*Qe)*ue,Me)}else{if(le.isInstancedBufferAttribute){for(let ve=0;ve<k.locationSize;ve++)g(k.location+ve,le.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ve=0;ve<k.locationSize;ve++)y(k.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let ve=0;ve<k.locationSize;ve++)N(k.location+ve,U/k.locationSize,K,re,U*ue,U/k.locationSize*ve*ue,Me)}}else if(se!==void 0){const re=se[he];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(k.location,re);break;case 3:s.vertexAttrib3fv(k.location,re);break;case 4:s.vertexAttrib4fv(k.location,re);break;default:s.vertexAttrib1fv(k.location,re)}}}}I()}function X(){j();for(const C in r){const V=r[C];for(const ae in V){const J=V[ae];for(const oe in J)_(J[oe].object),delete J[oe];delete V[ae]}delete r[C]}}function D(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const ae in V){const J=V[ae];for(const oe in J)_(J[oe].object),delete J[oe];delete V[ae]}delete r[C.id]}function F(C){for(const V in r){const ae=r[V];if(ae[C.id]===void 0)continue;const J=ae[C.id];for(const oe in J)_(J[oe].object),delete J[oe];delete ae[C.id]}}function j(){R(),d=!0,u!==a&&(u=a,m(u.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:j,resetDefaultState:R,dispose:X,releaseStatesOfGeometry:D,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:y,disableUnusedAttributes:I}}function tS(s,e,n){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function d(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function f(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let S=0;for(let A=0;A<v;A++)S+=_[A];n.update(S,r,1)}function p(m,_,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let A=0;A<m.length;A++)d(m[A],_[A],x[A]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let A=0;for(let w=0;w<v;w++)A+=_[w]*x[w];n.update(A,r,1)}}this.setMode=a,this.render=u,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function nS(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(F){return!(F!==ti&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const j=F===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Si&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ki&&!j)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),X=A>0,D=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:A,maxTextureSize:w,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:I,maxVaryings:N,maxFragmentUniforms:P,vertexTextures:X,maxSamples:D}}function iS(s){const e=this;let n=null,r=0,a=!1,u=!1;const d=new xr,f=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||a;return a=x,r=v.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,S){const A=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,g=s.get(v);if(!a||A===null||A.length===0||u&&!y)u?_(null):m();else{const I=u?0:r,N=I*4;let P=g.clippingState||null;p.value=P,P=_(A,x,N,S);for(let X=0;X!==N;++X)P[X]=n[X];g.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,S,A){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=p.value,A!==!0||y===null){const g=S+w*4,I=x.matrixWorldInverse;f.getNormalMatrix(I),(y===null||y.length<g)&&(y=new Float32Array(g));for(let N=0,P=S;N!==w;++N,P+=4)d.copy(v[N]).applyMatrix4(I,f),d.normal.toArray(y,P),y[P+3]=d.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function rS(s){let e=new WeakMap;function n(d,f){return f===tf?d.mapping=js:f===nf&&(d.mapping=Ys),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===tf||f===nf)if(e.has(d)){const p=e.get(d).texture;return n(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new a0(p.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",a),n(m.texture,d.mapping)}else return null}}return d}function a(d){const f=d.target;f.removeEventListener("dispose",a);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const zs=4,Kp=[.125,.215,.35,.446,.526,.582],jr=20,Bc=new p0,Zp=new Dt;let kc=null,zc=0,Hc=0,Vc=!1;const Wr=(1+Math.sqrt(5))/2,Os=1/Wr,Qp=[new Z(-Wr,Os,0),new Z(Wr,Os,0),new Z(-Os,0,Wr),new Z(Os,0,Wr),new Z(0,Wr,-Os),new Z(0,Wr,Os),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class Jp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){kc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kc,zc,Hc),this._renderer.xr.enabled=Vc,e.scissorTest=!1,gl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===js||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:zo,format:ti,colorSpace:Zs,depthBuffer:!1},a=em(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=em(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sS(u)),this._blurMaterial=oS(u,e,n)}return a}_compileMaterial(e){const n=new xi(this._lodPlanes[0],e);this._renderer.compile(n,Bc)}_sceneToCubeUV(e,n,r,a){const f=new Qn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(Zp),_.toneMapping=Hi,_.autoClear=!1;const S=new Wm({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),A=new xi(new Js,S);let w=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,w=!0):(S.color.copy(Zp),w=!0);for(let g=0;g<6;g++){const I=g%3;I===0?(f.up.set(0,p[g],0),f.lookAt(m[g],0,0)):I===1?(f.up.set(0,0,p[g]),f.lookAt(0,m[g],0)):(f.up.set(0,p[g],0),f.lookAt(0,0,m[g]));const N=this._cubeSize;gl(a,I*N,g>2?N:0,N,N),_.setRenderTarget(a),w&&_.render(A,f),_.render(e,f)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===js||e.mapping===Ys;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tm());const u=a?this._cubemapMaterial:this._equirectMaterial,d=new xi(this._lodPlanes[0],u),f=u.uniforms;f.envMap.value=e;const p=this._cubeSize;gl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(d,Bc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),f=Qp[(a-u-1)%Qp.length];this._blur(e,u-1,u,d,f)}n.autoClear=r}_blur(e,n,r,a,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",u),this._halfBlur(d,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,d,f){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new xi(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*jr-1),w=u/A,y=isFinite(u)?1+Math.floor(_*w):jr;y>jr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${jr}`);const g=[];let I=0;for(let F=0;F<jr;++F){const j=F/w,R=Math.exp(-j*j/2);g.push(R),F===0?I+=R:F<y&&(I+=2*R)}for(let F=0;F<g.length;F++)g[F]=g[F]/I;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=d==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:N}=this;x.dTheta.value=A,x.mipInt.value=N-r;const P=this._sizeLods[a],X=3*P*(a>N-zs?a-N+zs:0),D=4*(this._cubeSize-P);gl(n,X,D,3*P,2*P),p.setRenderTarget(n),p.render(v,Bc)}}function sS(s){const e=[],n=[],r=[];let a=s;const u=s-zs+1+Kp.length;for(let d=0;d<u;d++){const f=Math.pow(2,a);n.push(f);let p=1/f;d>s-zs?p=Kp[d-s+zs-1]:d===0&&(p=0),r.push(p);const m=1/(f-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,A=6,w=3,y=2,g=1,I=new Float32Array(w*A*S),N=new Float32Array(y*A*S),P=new Float32Array(g*A*S);for(let D=0;D<S;D++){const F=D%3*2/3-1,j=D>2?0:-1,R=[F,j,0,F+2/3,j,0,F+2/3,j+1,0,F,j,0,F+2/3,j+1,0,F,j+1,0];I.set(R,w*A*D),N.set(x,y*A*D);const C=[D,D,D,D,D,D];P.set(C,g*A*D)}const X=new Jr;X.setAttribute("position",new yi(I,w)),X.setAttribute("uv",new yi(N,y)),X.setAttribute("faceIndex",new yi(P,g)),e.push(X),a>zs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function em(s,e,n){const r=new Kr(s,e,n);return r.texture.mapping=bl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function gl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function oS(s,e,n){const r=new Float32Array(jr),a=new Z(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function tm(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function nm(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Xf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function aS(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===tf||p===nf,_=p===js||p===Ys;if(m||_){let v=e.get(f);const x=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new Jp(s)),v=m?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new Jp(s)),v=m?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",u),v.texture):null}}}return f}function a(f){let p=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&p++;return p===m}function u(f){const p=f.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function lS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Bs("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function uS(s,e,n,r){const a={},u=new WeakMap;function d(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",d),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(v,x){return a[x.id]===!0||(x.addEventListener("dispose",d),a[x.id]=!0,n.memory.geometries++),x}function p(v){const x=v.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function m(v){const x=[],S=v.index,A=v.attributes.position;let w=0;if(S!==null){const I=S.array;w=S.version;for(let N=0,P=I.length;N<P;N+=3){const X=I[N+0],D=I[N+1],F=I[N+2];x.push(X,D,D,F,F,X)}}else if(A!==void 0){const I=A.array;w=A.version;for(let N=0,P=I.length/3-1;N<P;N+=3){const X=N+0,D=N+1,F=N+2;x.push(X,D,D,F,F,X)}}else return;const y=new(Om(x)?jm:Xm)(x,1);y.version=w;const g=u.get(v);g&&e.remove(g),u.set(v,y)}function _(v){const x=u.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&m(v)}else m(v);return u.get(v)}return{get:f,update:p,getWireframeAttribute:_}}function cS(s,e,n){let r;function a(x){r=x}let u,d;function f(x){u=x.type,d=x.bytesPerElement}function p(x,S){s.drawElements(r,S,u,x*d),n.update(S,r,1)}function m(x,S,A){A!==0&&(s.drawElementsInstanced(r,S,u,x*d,A),n.update(S,r,A))}function _(x,S,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,A);let y=0;for(let g=0;g<A;g++)y+=S[g];n.update(y,r,1)}function v(x,S,A,w){if(A===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/d,S[g],w[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,w,0,A);let g=0;for(let I=0;I<A;I++)g+=S[I]*w[I];n.update(g,r,1)}}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function fS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,f){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=f*(u/3);break;case s.LINES:n.lines+=f*(u/2);break;case s.LINE_STRIP:n.lines+=f*(u-1);break;case s.LINE_LOOP:n.lines+=f*u;break;case s.POINTS:n.points+=f*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function dS(s,e,n){const r=new WeakMap,a=new Xt;function u(d,f,p){const m=d.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(f);if(x===void 0||x.count!==v){let R=function(){F.dispose(),r.delete(f),f.removeEventListener("dispose",R)};x!==void 0&&x.texture.dispose();const S=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,w=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],g=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let N=0;S===!0&&(N=1),A===!0&&(N=2),w===!0&&(N=3);let P=f.attributes.position.count*N,X=1;P>e.maxTextureSize&&(X=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const D=new Float32Array(P*X*4*v),F=new km(D,P,X,v);F.type=ki,F.needsUpdate=!0;const j=N*4;for(let C=0;C<v;C++){const V=y[C],ae=g[C],J=I[C],oe=P*X*4*C;for(let pe=0;pe<V.count;pe++){const se=pe*j;S===!0&&(a.fromBufferAttribute(V,pe),D[oe+se+0]=a.x,D[oe+se+1]=a.y,D[oe+se+2]=a.z,D[oe+se+3]=0),A===!0&&(a.fromBufferAttribute(ae,pe),D[oe+se+4]=a.x,D[oe+se+5]=a.y,D[oe+se+6]=a.z,D[oe+se+7]=0),w===!0&&(a.fromBufferAttribute(J,pe),D[oe+se+8]=a.x,D[oe+se+9]=a.y,D[oe+se+10]=a.z,D[oe+se+11]=J.itemSize===4?a.w:1)}}x={count:v,texture:F,size:new dt(P,X)},r.set(f,x),f.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let S=0;for(let w=0;w<m.length;w++)S+=m[w];const A=f.morphTargetsRelative?1:1-S;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function hS(s,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,v=e.get(p,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function d(){a=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:d}}const Jm=new wn,im=new Zm(1,1),eg=new km,tg=new zm,ng=new $m,rm=[],sm=[],om=new Float32Array(16),am=new Float32Array(9),lm=new Float32Array(4);function eo(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=rm[a];if(u===void 0&&(u=new Float32Array(a),rm[a]=u),e!==0){r.toArray(u,0);for(let d=1,f=0;d!==e;++d)f+=n,s[d].toArray(u,f)}return u}function Jt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function en(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Nl(s,e){let n=sm[e];n===void 0&&(n=new Int32Array(e),sm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function pS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function mS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2fv(this.addr,e),en(n,e)}}function gS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Jt(n,e))return;s.uniform3fv(this.addr,e),en(n,e)}}function _S(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4fv(this.addr,e),en(n,e)}}function vS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;lm.set(r),s.uniformMatrix2fv(this.addr,!1,lm),en(n,r)}}function xS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;am.set(r),s.uniformMatrix3fv(this.addr,!1,am),en(n,r)}}function yS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;om.set(r),s.uniformMatrix4fv(this.addr,!1,om),en(n,r)}}function SS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function ES(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2iv(this.addr,e),en(n,e)}}function MS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;s.uniform3iv(this.addr,e),en(n,e)}}function TS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4iv(this.addr,e),en(n,e)}}function AS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function wS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2uiv(this.addr,e),en(n,e)}}function CS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;s.uniform3uiv(this.addr,e),en(n,e)}}function RS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4uiv(this.addr,e),en(n,e)}}function PS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(im.compareFunction=Fm,u=im):u=Jm,n.setTexture2D(e||u,a)}function bS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||tg,a)}function DS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||ng,a)}function LS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||eg,a)}function NS(s){switch(s){case 5126:return pS;case 35664:return mS;case 35665:return gS;case 35666:return _S;case 35674:return vS;case 35675:return xS;case 35676:return yS;case 5124:case 35670:return SS;case 35667:case 35671:return ES;case 35668:case 35672:return MS;case 35669:case 35673:return TS;case 5125:return AS;case 36294:return wS;case 36295:return CS;case 36296:return RS;case 35678:case 36198:case 36298:case 36306:case 35682:return PS;case 35679:case 36299:case 36307:return bS;case 35680:case 36300:case 36308:case 36293:return DS;case 36289:case 36303:case 36311:case 36292:return LS}}function US(s,e){s.uniform1fv(this.addr,e)}function IS(s,e){const n=eo(e,this.size,2);s.uniform2fv(this.addr,n)}function FS(s,e){const n=eo(e,this.size,3);s.uniform3fv(this.addr,n)}function OS(s,e){const n=eo(e,this.size,4);s.uniform4fv(this.addr,n)}function BS(s,e){const n=eo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function kS(s,e){const n=eo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function zS(s,e){const n=eo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function HS(s,e){s.uniform1iv(this.addr,e)}function VS(s,e){s.uniform2iv(this.addr,e)}function GS(s,e){s.uniform3iv(this.addr,e)}function WS(s,e){s.uniform4iv(this.addr,e)}function XS(s,e){s.uniform1uiv(this.addr,e)}function jS(s,e){s.uniform2uiv(this.addr,e)}function YS(s,e){s.uniform3uiv(this.addr,e)}function qS(s,e){s.uniform4uiv(this.addr,e)}function $S(s,e,n){const r=this.cache,a=e.length,u=Nl(n,a);Jt(r,u)||(s.uniform1iv(this.addr,u),en(r,u));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||Jm,u[d])}function KS(s,e,n){const r=this.cache,a=e.length,u=Nl(n,a);Jt(r,u)||(s.uniform1iv(this.addr,u),en(r,u));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||tg,u[d])}function ZS(s,e,n){const r=this.cache,a=e.length,u=Nl(n,a);Jt(r,u)||(s.uniform1iv(this.addr,u),en(r,u));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||ng,u[d])}function QS(s,e,n){const r=this.cache,a=e.length,u=Nl(n,a);Jt(r,u)||(s.uniform1iv(this.addr,u),en(r,u));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||eg,u[d])}function JS(s){switch(s){case 5126:return US;case 35664:return IS;case 35665:return FS;case 35666:return OS;case 35674:return BS;case 35675:return kS;case 35676:return zS;case 5124:case 35670:return HS;case 35667:case 35671:return VS;case 35668:case 35672:return GS;case 35669:case 35673:return WS;case 5125:return XS;case 36294:return jS;case 36295:return YS;case 36296:return qS;case 35678:case 36198:case 36298:case 36306:case 35682:return $S;case 35679:case 36299:case 36307:return KS;case 35680:case 36300:case 36308:case 36293:return ZS;case 36289:case 36303:case 36311:case 36292:return QS}}class eE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=NS(n.type)}}class tE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=JS(n.type)}}class nE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,d=a.length;u!==d;++u){const f=a[u];f.setValue(e,n[f.id],r)}}}const Gc=/(\w+)(\])?(\[|\.)?/g;function um(s,e){s.seq.push(e),s.map[e.id]=e}function iE(s,e,n){const r=s.name,a=r.length;for(Gc.lastIndex=0;;){const u=Gc.exec(r),d=Gc.lastIndex;let f=u[1];const p=u[2]==="]",m=u[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===a){um(n,m===void 0?new eE(f,s,e):new tE(f,s,e));break}else{let v=n.map[f];v===void 0&&(v=new nE(f),um(n,v)),n=v}}}class Al{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),d=e.getUniformLocation(n,u.name);iE(u,d,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,d=n.length;u!==d;++u){const f=n[u],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function cm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const rE=37297;let sE=0;function oE(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let d=a;d<u;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}const fm=new ot;function aE(s){Tt._getMatrix(fm,Tt.workingColorSpace,s);const e=`mat3( ${fm.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(s)){case Cl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function dm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+oE(s.getShaderSource(e),d)}else return a}function lE(s,e){const n=aE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function uE(s,e){let n;switch(e){case gv:n="Linear";break;case _v:n="Reinhard";break;case vv:n="Cineon";break;case xv:n="ACESFilmic";break;case Sv:n="AgX";break;case Ev:n="Neutral";break;case yv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const _l=new Z;function cE(){Tt.getLuminanceCoefficients(_l);const s=_l.x.toFixed(4),e=_l.y.toFixed(4),n=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function dE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function hE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),d=u.name;let f=1;u.type===s.FLOAT_MAT2&&(f=2),u.type===s.FLOAT_MAT3&&(f=3),u.type===s.FLOAT_MAT4&&(f=4),n[d]={type:u.type,location:s.getAttribLocation(e,d),locationSize:f}}return n}function ko(s){return s!==""}function hm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nf(s){return s.replace(pE,gE)}const mE=new Map;function gE(s,e){let n=at[e];if(n===void 0){const r=mE.get(e);if(r!==void 0)n=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Nf(n)}const _E=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mm(s){return s.replace(_E,vE)}function vE(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function gm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Tm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===$_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function yE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case js:case Ys:e="ENVMAP_TYPE_CUBE";break;case bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function EE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Am:e="ENVMAP_BLENDING_MULTIPLY";break;case pv:e="ENVMAP_BLENDING_MIX";break;case mv:e="ENVMAP_BLENDING_ADD";break}return e}function ME(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function TE(s,e,n,r){const a=s.getContext(),u=n.defines;let d=n.vertexShader,f=n.fragmentShader;const p=xE(n),m=yE(n),_=SE(n),v=EE(n),x=ME(n),S=fE(n),A=dE(u),w=a.createProgram();let y,g,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(ko).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(ko).join(`
`),g.length>0&&(g+=`
`)):(y=[gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),g=[gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?at.tonemapping_pars_fragment:"",n.toneMapping!==Hi?uE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,lE("linearToOutputTexel",n.outputColorSpace),cE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ko).join(`
`)),d=Nf(d),d=hm(d,n),d=pm(d,n),f=Nf(f),f=hm(f,n),f=pm(f,n),d=mm(d),f=mm(f),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const N=I+y+d,P=I+g+f,X=cm(a,a.VERTEX_SHADER,N),D=cm(a,a.FRAGMENT_SHADER,P);a.attachShader(w,X),a.attachShader(w,D),n.index0AttributeName!==void 0?a.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function F(V){if(s.debug.checkShaderErrors){const ae=a.getProgramInfoLog(w).trim(),J=a.getShaderInfoLog(X).trim(),oe=a.getShaderInfoLog(D).trim();let pe=!0,se=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(pe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,w,X,D);else{const he=dm(a,X,"vertex"),k=dm(a,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ae+`
`+he+`
`+k)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(J===""||oe==="")&&(se=!1);se&&(V.diagnostics={runnable:pe,programLog:ae,vertexShader:{log:J,prefix:y},fragmentShader:{log:oe,prefix:g}})}a.deleteShader(X),a.deleteShader(D),j=new Al(a,w),R=hE(a,w)}let j;this.getUniforms=function(){return j===void 0&&F(this),j};let R;this.getAttributes=function(){return R===void 0&&F(this),R};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(w,rE)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=sE++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=X,this.fragmentShader=D,this}let AE=0;class wE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new CE(e),n.set(e,r)),r}}class CE{constructor(e){this.id=AE++,this.code=e,this.usedTimes=0}}function RE(s,e,n,r,a,u,d){const f=new Vm,p=new wE,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return m.add(R),R===0?"uv":`uv${R}`}function y(R,C,V,ae,J){const oe=ae.fog,pe=J.geometry,se=R.isMeshStandardMaterial?ae.environment:null,he=(R.isMeshStandardMaterial?n:e).get(R.envMap||se),k=he&&he.mapping===bl?he.image.height:null,le=A[R.type];R.precision!==null&&(S=a.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const re=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,U=re!==void 0?re.length:0;let ne=0;pe.morphAttributes.position!==void 0&&(ne=1),pe.morphAttributes.normal!==void 0&&(ne=2),pe.morphAttributes.color!==void 0&&(ne=3);let Ue,K,ue,Me;if(le){const xt=vi[le];Ue=xt.vertexShader,K=xt.fragmentShader}else Ue=R.vertexShader,K=R.fragmentShader,p.update(R),ue=p.getVertexShaderID(R),Me=p.getFragmentShaderID(R);const ve=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Ie=J.isInstancedMesh===!0,Qe=J.isBatchedMesh===!0,Ct=!!R.map,gt=!!R.matcap,Lt=!!he,B=!!R.aoMap,vn=!!R.lightMap,ht=!!R.bumpMap,ut=!!R.normalMap,Ye=!!R.displacementMap,wt=!!R.emissiveMap,Xe=!!R.metalnessMap,b=!!R.roughnessMap,M=R.anisotropy>0,$=R.clearcoat>0,de=R.dispersion>0,ge=R.iridescence>0,ce=R.sheen>0,Ge=R.transmission>0,we=M&&!!R.anisotropyMap,Fe=$&&!!R.clearcoatMap,lt=$&&!!R.clearcoatNormalMap,Se=$&&!!R.clearcoatRoughnessMap,ke=ge&&!!R.iridescenceMap,$e=ge&&!!R.iridescenceThicknessMap,Je=ce&&!!R.sheenColorMap,ze=ce&&!!R.sheenRoughnessMap,ct=!!R.specularMap,it=!!R.specularColorMap,At=!!R.specularIntensityMap,G=Ge&&!!R.transmissionMap,Ce=Ge&&!!R.thicknessMap,ie=!!R.gradientMap,fe=!!R.alphaMap,De=R.alphaTest>0,be=!!R.alphaHash,rt=!!R.extensions;let Ut=Hi;R.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const $t={shaderID:le,shaderType:R.type,shaderName:R.name,vertexShader:Ue,fragmentShader:K,defines:R.defines,customVertexShaderID:ue,customFragmentShaderID:Me,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:Qe,batchingColor:Qe&&J._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&J.instanceColor!==null,instancingMorph:Ie&&J.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Zs,alphaToCoverage:!!R.alphaToCoverage,map:Ct,matcap:gt,envMap:Lt,envMapMode:Lt&&he.mapping,envMapCubeUVHeight:k,aoMap:B,lightMap:vn,bumpMap:ht,normalMap:ut,displacementMap:x&&Ye,emissiveMap:wt,normalMapObjectSpace:ut&&R.normalMapType===Cv,normalMapTangentSpace:ut&&R.normalMapType===wv,metalnessMap:Xe,roughnessMap:b,anisotropy:M,anisotropyMap:we,clearcoat:$,clearcoatMap:Fe,clearcoatNormalMap:lt,clearcoatRoughnessMap:Se,dispersion:de,iridescence:ge,iridescenceMap:ke,iridescenceThicknessMap:$e,sheen:ce,sheenColorMap:Je,sheenRoughnessMap:ze,specularMap:ct,specularColorMap:it,specularIntensityMap:At,transmission:Ge,transmissionMap:G,thicknessMap:Ce,gradientMap:ie,opaque:R.transparent===!1&&R.blending===Vs&&R.alphaToCoverage===!1,alphaMap:fe,alphaTest:De,alphaHash:be,combine:R.combine,mapUv:Ct&&w(R.map.channel),aoMapUv:B&&w(R.aoMap.channel),lightMapUv:vn&&w(R.lightMap.channel),bumpMapUv:ht&&w(R.bumpMap.channel),normalMapUv:ut&&w(R.normalMap.channel),displacementMapUv:Ye&&w(R.displacementMap.channel),emissiveMapUv:wt&&w(R.emissiveMap.channel),metalnessMapUv:Xe&&w(R.metalnessMap.channel),roughnessMapUv:b&&w(R.roughnessMap.channel),anisotropyMapUv:we&&w(R.anisotropyMap.channel),clearcoatMapUv:Fe&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:lt&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:ze&&w(R.sheenRoughnessMap.channel),specularMapUv:ct&&w(R.specularMap.channel),specularColorMapUv:it&&w(R.specularColorMap.channel),specularIntensityMapUv:At&&w(R.specularIntensityMap.channel),transmissionMapUv:G&&w(R.transmissionMap.channel),thicknessMapUv:Ce&&w(R.thicknessMap.channel),alphaMapUv:fe&&w(R.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(ut||M),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!pe.attributes.uv&&(Ct||fe),fog:!!oe,useFog:R.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ae,skinning:J.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Ct&&R.map.isVideoTexture===!0&&Tt.getTransfer(R.map.colorSpace)===Pt,decodeVideoTextureEmissive:wt&&R.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(R.emissiveMap.colorSpace)===Pt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Bi,flipSided:R.side===Fn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:rt&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&R.extensions.multiDraw===!0||Qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return $t.vertexUv1s=m.has(1),$t.vertexUv2s=m.has(2),$t.vertexUv3s=m.has(3),m.clear(),$t}function g(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const V in R.defines)C.push(V),C.push(R.defines[V]);return R.isRawShaderMaterial===!1&&(I(C,R),N(C,R),C.push(s.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function I(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function N(R,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),R.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),R.push(f.mask)}function P(R){const C=A[R.type];let V;if(C){const ae=vi[C];V=i0.clone(ae.uniforms)}else V=R.uniforms;return V}function X(R,C){let V;for(let ae=0,J=_.length;ae<J;ae++){const oe=_[ae];if(oe.cacheKey===C){V=oe,++V.usedTimes;break}}return V===void 0&&(V=new TE(s,C,R,u),_.push(V)),V}function D(R){if(--R.usedTimes===0){const C=_.indexOf(R);_[C]=_[_.length-1],_.pop(),R.destroy()}}function F(R){p.remove(R)}function j(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:P,acquireProgram:X,releaseProgram:D,releaseShaderCache:F,programs:_,dispose:j}}function PE(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function a(d,f,p){s.get(d)[f]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function bE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function _m(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function vm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function d(v,x,S,A,w,y){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:S,groupOrder:A,renderOrder:v.renderOrder,z:w,group:y},s[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=S,g.groupOrder=A,g.renderOrder=v.renderOrder,g.z=w,g.group=y),e++,g}function f(v,x,S,A,w,y){const g=d(v,x,S,A,w,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function p(v,x,S,A,w,y){const g=d(v,x,S,A,w,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||bE),r.length>1&&r.sort(x||_m),a.length>1&&a.sort(x||_m)}function _(){for(let v=e,x=s.length;v<x;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:f,unshift:p,finish:_,sort:m}}function DE(){let s=new WeakMap;function e(r,a){const u=s.get(r);let d;return u===void 0?(d=new vm,s.set(r,[d])):a>=u.length?(d=new vm,u.push(d)):d=u[a],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function LE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new Dt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":n={color:new Dt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=n,n}}}function NE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let UE=0;function IE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function FE(s){const e=new LE,n=NE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Z);const a=new Z,u=new qt,d=new qt;function f(m){let _=0,v=0,x=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let S=0,A=0,w=0,y=0,g=0,I=0,N=0,P=0,X=0,D=0,F=0;m.sort(IE);for(let R=0,C=m.length;R<C;R++){const V=m[R],ae=V.color,J=V.intensity,oe=V.distance,pe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=ae.r*J,v+=ae.g*J,x+=ae.b*J;else if(V.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(V.sh.coefficients[se],J);F++}else if(V.isDirectionalLight){const se=e.get(V);if(se.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const he=V.shadow,k=n.get(V);k.shadowIntensity=he.intensity,k.shadowBias=he.bias,k.shadowNormalBias=he.normalBias,k.shadowRadius=he.radius,k.shadowMapSize=he.mapSize,r.directionalShadow[S]=k,r.directionalShadowMap[S]=pe,r.directionalShadowMatrix[S]=V.shadow.matrix,I++}r.directional[S]=se,S++}else if(V.isSpotLight){const se=e.get(V);se.position.setFromMatrixPosition(V.matrixWorld),se.color.copy(ae).multiplyScalar(J),se.distance=oe,se.coneCos=Math.cos(V.angle),se.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),se.decay=V.decay,r.spot[w]=se;const he=V.shadow;if(V.map&&(r.spotLightMap[X]=V.map,X++,he.updateMatrices(V),V.castShadow&&D++),r.spotLightMatrix[w]=he.matrix,V.castShadow){const k=n.get(V);k.shadowIntensity=he.intensity,k.shadowBias=he.bias,k.shadowNormalBias=he.normalBias,k.shadowRadius=he.radius,k.shadowMapSize=he.mapSize,r.spotShadow[w]=k,r.spotShadowMap[w]=pe,P++}w++}else if(V.isRectAreaLight){const se=e.get(V);se.color.copy(ae).multiplyScalar(J),se.halfWidth.set(V.width*.5,0,0),se.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=se,y++}else if(V.isPointLight){const se=e.get(V);if(se.color.copy(V.color).multiplyScalar(V.intensity),se.distance=V.distance,se.decay=V.decay,V.castShadow){const he=V.shadow,k=n.get(V);k.shadowIntensity=he.intensity,k.shadowBias=he.bias,k.shadowNormalBias=he.normalBias,k.shadowRadius=he.radius,k.shadowMapSize=he.mapSize,k.shadowCameraNear=he.camera.near,k.shadowCameraFar=he.camera.far,r.pointShadow[A]=k,r.pointShadowMap[A]=pe,r.pointShadowMatrix[A]=V.shadow.matrix,N++}r.point[A]=se,A++}else if(V.isHemisphereLight){const se=e.get(V);se.skyColor.copy(V.color).multiplyScalar(J),se.groundColor.copy(V.groundColor).multiplyScalar(J),r.hemi[g]=se,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==S||j.pointLength!==A||j.spotLength!==w||j.rectAreaLength!==y||j.hemiLength!==g||j.numDirectionalShadows!==I||j.numPointShadows!==N||j.numSpotShadows!==P||j.numSpotMaps!==X||j.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=y,r.point.length=A,r.hemi.length=g,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=P+X-D,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=F,j.directionalLength=S,j.pointLength=A,j.spotLength=w,j.rectAreaLength=y,j.hemiLength=g,j.numDirectionalShadows=I,j.numPointShadows=N,j.numSpotShadows=P,j.numSpotMaps=X,j.numLightProbes=F,r.version=UE++)}function p(m,_){let v=0,x=0,S=0,A=0,w=0;const y=_.matrixWorldInverse;for(let g=0,I=m.length;g<I;g++){const N=m[g];if(N.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),v++}else if(N.isSpotLight){const P=r.spot[S];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),S++}else if(N.isRectAreaLight){const P=r.rectArea[A];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(y),d.identity(),u.copy(N.matrixWorld),u.premultiply(y),d.extractRotation(u),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),A++}else if(N.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(y),x++}else if(N.isHemisphereLight){const P=r.hemi[w];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(y),w++}}}return{setup:f,setupView:p,state:r}}function xm(s){const e=new FE(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function d(_){r.push(_)}function f(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:p,pushLight:u,pushShadow:d}}function OE(s){let e=new WeakMap;function n(a,u=0){const d=e.get(a);let f;return d===void 0?(f=new xm(s),e.set(a,[f])):u>=d.length?(f=new xm(s),d.push(f)):f=d[u],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const BE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zE(s,e,n){let r=new Km;const a=new dt,u=new dt,d=new Xt,f=new d0({depthPacking:Av}),p=new h0,m={},_=n.maxTextureSize,v={[Gi]:Fn,[Fn]:Gi,[Bi]:Bi},x=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:BE,fragmentShader:kE}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const A=new Jr;A.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new xi(A,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tm;let g=this.type;this.render=function(D,F,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;const R=s.getRenderTarget(),C=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(Sr),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const J=g!==Oi&&this.type===Oi,oe=g===Oi&&this.type!==Oi;for(let pe=0,se=D.length;pe<se;pe++){const he=D[pe],k=he.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const le=k.getFrameExtents();if(a.multiply(le),u.copy(k.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/le.x),a.x=u.x*le.x,k.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/le.y),a.y=u.y*le.y,k.mapSize.y=u.y)),k.map===null||J===!0||oe===!0){const U=this.type!==Oi?{minFilter:An,magFilter:An}:{};k.map!==null&&k.map.dispose(),k.map=new Kr(a.x,a.y,U),k.map.texture.name=he.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const re=k.getViewportCount();for(let U=0;U<re;U++){const ne=k.getViewport(U);d.set(u.x*ne.x,u.y*ne.y,u.x*ne.z,u.y*ne.w),ae.viewport(d),k.updateMatrices(he,U),r=k.getFrustum(),P(F,j,k.camera,he,this.type)}k.isPointLightShadow!==!0&&this.type===Oi&&I(k,j),k.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(R,C,V)};function I(D,F){const j=e.update(w);x.defines.VSM_SAMPLES!==D.blurSamples&&(x.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Kr(a.x,a.y)),x.uniforms.shadow_pass.value=D.map.texture,x.uniforms.resolution.value=D.mapSize,x.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(F,null,j,x,w,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(F,null,j,S,w,null)}function N(D,F,j,R){let C=null;const V=j.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(V!==void 0)C=V;else if(C=j.isPointLight===!0?p:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ae=C.uuid,J=F.uuid;let oe=m[ae];oe===void 0&&(oe={},m[ae]=oe);let pe=oe[J];pe===void 0&&(pe=C.clone(),oe[J]=pe,F.addEventListener("dispose",X)),C=pe}if(C.visible=F.visible,C.wireframe=F.wireframe,R===Oi?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:v[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,j.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ae=s.properties.get(C);ae.light=j}return C}function P(D,F,j,R,C){if(D.visible===!1)return;if(D.layers.test(F.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&C===Oi)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,D.matrixWorld);const J=e.update(D),oe=D.material;if(Array.isArray(oe)){const pe=J.groups;for(let se=0,he=pe.length;se<he;se++){const k=pe[se],le=oe[k.materialIndex];if(le&&le.visible){const re=N(D,le,R,C);D.onBeforeShadow(s,D,F,j,J,re,k),s.renderBufferDirect(j,null,J,re,D,k),D.onAfterShadow(s,D,F,j,J,re,k)}}}else if(oe.visible){const pe=N(D,oe,R,C);D.onBeforeShadow(s,D,F,j,J,pe,null),s.renderBufferDirect(j,null,J,pe,D,null),D.onAfterShadow(s,D,F,j,J,pe,null)}}const ae=D.children;for(let J=0,oe=ae.length;J<oe;J++)P(ae[J],F,j,R,C)}function X(D){D.target.removeEventListener("dispose",X);for(const j in m){const R=m[j],C=D.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const HE={[qc]:$c,[Kc]:Jc,[Zc]:ef,[Xs]:Qc,[$c]:qc,[Jc]:Kc,[ef]:Zc,[Qc]:Xs};function VE(s,e){function n(){let G=!1;const Ce=new Xt;let ie=null;const fe=new Xt(0,0,0,0);return{setMask:function(De){ie!==De&&!G&&(s.colorMask(De,De,De,De),ie=De)},setLocked:function(De){G=De},setClear:function(De,be,rt,Ut,$t){$t===!0&&(De*=Ut,be*=Ut,rt*=Ut),Ce.set(De,be,rt,Ut),fe.equals(Ce)===!1&&(s.clearColor(De,be,rt,Ut),fe.copy(Ce))},reset:function(){G=!1,ie=null,fe.set(-1,0,0,0)}}}function r(){let G=!1,Ce=!1,ie=null,fe=null,De=null;return{setReversed:function(be){if(Ce!==be){const rt=e.get("EXT_clip_control");Ce?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Ut=De;De=null,this.setClear(Ut)}Ce=be},getReversed:function(){return Ce},setTest:function(be){be?ve(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(be){ie!==be&&!G&&(s.depthMask(be),ie=be)},setFunc:function(be){if(Ce&&(be=HE[be]),fe!==be){switch(be){case qc:s.depthFunc(s.NEVER);break;case $c:s.depthFunc(s.ALWAYS);break;case Kc:s.depthFunc(s.LESS);break;case Xs:s.depthFunc(s.LEQUAL);break;case Zc:s.depthFunc(s.EQUAL);break;case Qc:s.depthFunc(s.GEQUAL);break;case Jc:s.depthFunc(s.GREATER);break;case ef:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=be}},setLocked:function(be){G=be},setClear:function(be){De!==be&&(Ce&&(be=1-be),s.clearDepth(be),De=be)},reset:function(){G=!1,ie=null,fe=null,De=null,Ce=!1}}}function a(){let G=!1,Ce=null,ie=null,fe=null,De=null,be=null,rt=null,Ut=null,$t=null;return{setTest:function(xt){G||(xt?ve(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(xt){Ce!==xt&&!G&&(s.stencilMask(xt),Ce=xt)},setFunc:function(xt,Cn,xn){(ie!==xt||fe!==Cn||De!==xn)&&(s.stencilFunc(xt,Cn,xn),ie=xt,fe=Cn,De=xn)},setOp:function(xt,Cn,xn){(be!==xt||rt!==Cn||Ut!==xn)&&(s.stencilOp(xt,Cn,xn),be=xt,rt=Cn,Ut=xn)},setLocked:function(xt){G=xt},setClear:function(xt){$t!==xt&&(s.clearStencil(xt),$t=xt)},reset:function(){G=!1,Ce=null,ie=null,fe=null,De=null,be=null,rt=null,Ut=null,$t=null}}}const u=new n,d=new r,f=new a,p=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,S=[],A=null,w=!1,y=null,g=null,I=null,N=null,P=null,X=null,D=null,F=new Dt(0,0,0),j=0,R=!1,C=null,V=null,ae=null,J=null,oe=null;const pe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,he=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(k)[1]),se=he>=1):k.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),se=he>=2);let le=null,re={};const U=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),Ue=new Xt().fromArray(U),K=new Xt().fromArray(ne);function ue(G,Ce,ie,fe){const De=new Uint8Array(4),be=s.createTexture();s.bindTexture(G,be),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<ie;rt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Ce+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return be}const Me={};Me[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),f.setClear(0),ve(s.DEPTH_TEST),d.setFunc(Xs),ht(!1),ut(Tp),ve(s.CULL_FACE),B(Sr);function ve(G){_[G]!==!0&&(s.enable(G),_[G]=!0)}function Ae(G){_[G]!==!1&&(s.disable(G),_[G]=!1)}function Ie(G,Ce){return v[G]!==Ce?(s.bindFramebuffer(G,Ce),v[G]=Ce,G===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ce),G===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Qe(G,Ce){let ie=S,fe=!1;if(G){ie=x.get(Ce),ie===void 0&&(ie=[],x.set(Ce,ie));const De=G.textures;if(ie.length!==De.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let be=0,rt=De.length;be<rt;be++)ie[be]=s.COLOR_ATTACHMENT0+be;ie.length=De.length,fe=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,fe=!0);fe&&s.drawBuffers(ie)}function Ct(G){return A!==G?(s.useProgram(G),A=G,!0):!1}const gt={[Xr]:s.FUNC_ADD,[Z_]:s.FUNC_SUBTRACT,[Q_]:s.FUNC_REVERSE_SUBTRACT};gt[J_]=s.MIN,gt[ev]=s.MAX;const Lt={[tv]:s.ZERO,[nv]:s.ONE,[iv]:s.SRC_COLOR,[jc]:s.SRC_ALPHA,[uv]:s.SRC_ALPHA_SATURATE,[av]:s.DST_COLOR,[sv]:s.DST_ALPHA,[rv]:s.ONE_MINUS_SRC_COLOR,[Yc]:s.ONE_MINUS_SRC_ALPHA,[lv]:s.ONE_MINUS_DST_COLOR,[ov]:s.ONE_MINUS_DST_ALPHA,[cv]:s.CONSTANT_COLOR,[fv]:s.ONE_MINUS_CONSTANT_COLOR,[dv]:s.CONSTANT_ALPHA,[hv]:s.ONE_MINUS_CONSTANT_ALPHA};function B(G,Ce,ie,fe,De,be,rt,Ut,$t,xt){if(G===Sr){w===!0&&(Ae(s.BLEND),w=!1);return}if(w===!1&&(ve(s.BLEND),w=!0),G!==K_){if(G!==y||xt!==R){if((g!==Xr||P!==Xr)&&(s.blendEquation(s.FUNC_ADD),g=Xr,P=Xr),xt)switch(G){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ap:s.blendFunc(s.ONE,s.ONE);break;case wp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ap:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case wp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}I=null,N=null,X=null,D=null,F.set(0,0,0),j=0,y=G,R=xt}return}De=De||Ce,be=be||ie,rt=rt||fe,(Ce!==g||De!==P)&&(s.blendEquationSeparate(gt[Ce],gt[De]),g=Ce,P=De),(ie!==I||fe!==N||be!==X||rt!==D)&&(s.blendFuncSeparate(Lt[ie],Lt[fe],Lt[be],Lt[rt]),I=ie,N=fe,X=be,D=rt),(Ut.equals(F)===!1||$t!==j)&&(s.blendColor(Ut.r,Ut.g,Ut.b,$t),F.copy(Ut),j=$t),y=G,R=!1}function vn(G,Ce){G.side===Bi?Ae(s.CULL_FACE):ve(s.CULL_FACE);let ie=G.side===Fn;Ce&&(ie=!ie),ht(ie),G.blending===Vs&&G.transparent===!1?B(Sr):B(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),u.setMask(G.colorWrite);const fe=G.stencilWrite;f.setTest(fe),fe&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),wt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(G){C!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),C=G)}function ut(G){G!==Y_?(ve(s.CULL_FACE),G!==V&&(G===Tp?s.cullFace(s.BACK):G===q_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),V=G}function Ye(G){G!==ae&&(se&&s.lineWidth(G),ae=G)}function wt(G,Ce,ie){G?(ve(s.POLYGON_OFFSET_FILL),(J!==Ce||oe!==ie)&&(s.polygonOffset(Ce,ie),J=Ce,oe=ie)):Ae(s.POLYGON_OFFSET_FILL)}function Xe(G){G?ve(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function b(G){G===void 0&&(G=s.TEXTURE0+pe-1),le!==G&&(s.activeTexture(G),le=G)}function M(G,Ce,ie){ie===void 0&&(le===null?ie=s.TEXTURE0+pe-1:ie=le);let fe=re[ie];fe===void 0&&(fe={type:void 0,texture:void 0},re[ie]=fe),(fe.type!==G||fe.texture!==Ce)&&(le!==ie&&(s.activeTexture(ie),le=ie),s.bindTexture(G,Ce||Me[G]),fe.type=G,fe.texture=Ce)}function $(){const G=re[le];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function de(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $e(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(G){Ue.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ue.copy(G))}function ze(G){K.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),K.copy(G))}function ct(G,Ce){let ie=m.get(Ce);ie===void 0&&(ie=new WeakMap,m.set(Ce,ie));let fe=ie.get(G);fe===void 0&&(fe=s.getUniformBlockIndex(Ce,G.name),ie.set(G,fe))}function it(G,Ce){const fe=m.get(Ce).get(G);p.get(Ce)!==fe&&(s.uniformBlockBinding(Ce,fe,G.__bindingPointIndex),p.set(Ce,fe))}function At(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},le=null,re={},v={},x=new WeakMap,S=[],A=null,w=!1,y=null,g=null,I=null,N=null,P=null,X=null,D=null,F=new Dt(0,0,0),j=0,R=!1,C=null,V=null,ae=null,J=null,oe=null,Ue.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),f.reset()}return{buffers:{color:u,depth:d,stencil:f},enable:ve,disable:Ae,bindFramebuffer:Ie,drawBuffers:Qe,useProgram:Ct,setBlending:B,setMaterial:vn,setFlipSided:ht,setCullFace:ut,setLineWidth:Ye,setPolygonOffset:wt,setScissorTest:Xe,activeTexture:b,bindTexture:M,unbindTexture:$,compressedTexImage2D:de,compressedTexImage3D:ge,texImage2D:ke,texImage3D:$e,updateUBOMapping:ct,uniformBlockBinding:it,texStorage2D:lt,texStorage3D:Se,texSubImage2D:ce,texSubImage3D:Ge,compressedTexSubImage2D:we,compressedTexSubImage3D:Fe,scissor:Je,viewport:ze,reset:At}}function GE(s,e,n,r,a,u,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new dt,_=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(b,M){return S?new OffscreenCanvas(b,M):Pl("canvas")}function w(b,M,$){let de=1;const ge=Xe(b);if((ge.width>$||ge.height>$)&&(de=$/Math.max(ge.width,ge.height)),de<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ce=Math.floor(de*ge.width),Ge=Math.floor(de*ge.height);v===void 0&&(v=A(ce,Ge));const we=M?A(ce,Ge):v;return we.width=ce,we.height=Ge,we.getContext("2d").drawImage(b,0,0,ce,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ce+"x"+Ge+")."),we}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),b;return b}function y(b){return b.generateMipmaps}function g(b){s.generateMipmap(b)}function I(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(b,M,$,de,ge=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ce=M;if(M===s.RED&&($===s.FLOAT&&(ce=s.R32F),$===s.HALF_FLOAT&&(ce=s.R16F),$===s.UNSIGNED_BYTE&&(ce=s.R8)),M===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ce=s.R8UI),$===s.UNSIGNED_SHORT&&(ce=s.R16UI),$===s.UNSIGNED_INT&&(ce=s.R32UI),$===s.BYTE&&(ce=s.R8I),$===s.SHORT&&(ce=s.R16I),$===s.INT&&(ce=s.R32I)),M===s.RG&&($===s.FLOAT&&(ce=s.RG32F),$===s.HALF_FLOAT&&(ce=s.RG16F),$===s.UNSIGNED_BYTE&&(ce=s.RG8)),M===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(ce=s.RG8UI),$===s.UNSIGNED_SHORT&&(ce=s.RG16UI),$===s.UNSIGNED_INT&&(ce=s.RG32UI),$===s.BYTE&&(ce=s.RG8I),$===s.SHORT&&(ce=s.RG16I),$===s.INT&&(ce=s.RG32I)),M===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),$===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),$===s.UNSIGNED_INT&&(ce=s.RGB32UI),$===s.BYTE&&(ce=s.RGB8I),$===s.SHORT&&(ce=s.RGB16I),$===s.INT&&(ce=s.RGB32I)),M===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),$===s.UNSIGNED_INT&&(ce=s.RGBA32UI),$===s.BYTE&&(ce=s.RGBA8I),$===s.SHORT&&(ce=s.RGBA16I),$===s.INT&&(ce=s.RGBA32I)),M===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),M===s.RGBA){const Ge=ge?Cl:Tt.getTransfer(de);$===s.FLOAT&&(ce=s.RGBA32F),$===s.HALF_FLOAT&&(ce=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ce=Ge===Pt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function P(b,M){let $;return b?M===null||M===$r||M===$s?$=s.DEPTH24_STENCIL8:M===ki?$=s.DEPTH32F_STENCIL8:M===qs&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===$r||M===$s?$=s.DEPTH_COMPONENT24:M===ki?$=s.DEPTH_COMPONENT32F:M===qs&&($=s.DEPTH_COMPONENT16),$}function X(b,M){return y(b)===!0||b.isFramebufferTexture&&b.minFilter!==An&&b.minFilter!==ei?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function D(b){const M=b.target;M.removeEventListener("dispose",D),j(M),M.isVideoTexture&&_.delete(M)}function F(b){const M=b.target;M.removeEventListener("dispose",F),C(M)}function j(b){const M=r.get(b);if(M.__webglInit===void 0)return;const $=b.source,de=x.get($);if(de){const ge=de[M.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&R(b),Object.keys(de).length===0&&x.delete($)}r.remove(b)}function R(b){const M=r.get(b);s.deleteTexture(M.__webglTexture);const $=b.source,de=x.get($);delete de[M.__cacheKey],d.memory.textures--}function C(b){const M=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(M.__webglFramebuffer[de]))for(let ge=0;ge<M.__webglFramebuffer[de].length;ge++)s.deleteFramebuffer(M.__webglFramebuffer[de][ge]);else s.deleteFramebuffer(M.__webglFramebuffer[de]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[de])}else{if(Array.isArray(M.__webglFramebuffer))for(let de=0;de<M.__webglFramebuffer.length;de++)s.deleteFramebuffer(M.__webglFramebuffer[de]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let de=0;de<M.__webglColorRenderbuffer.length;de++)M.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[de]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=b.textures;for(let de=0,ge=$.length;de<ge;de++){const ce=r.get($[de]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),d.memory.textures--),r.remove($[de])}r.remove(b)}let V=0;function ae(){V=0}function J(){const b=V;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),V+=1,b}function oe(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function pe(b,M){const $=r.get(b);if(b.isVideoTexture&&Ye(b),b.isRenderTargetTexture===!1&&b.version>0&&$.__version!==b.version){const de=b.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K($,b,M);return}}n.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+M)}function se(b,M){const $=r.get(b);if(b.version>0&&$.__version!==b.version){K($,b,M);return}n.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+M)}function he(b,M){const $=r.get(b);if(b.version>0&&$.__version!==b.version){K($,b,M);return}n.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+M)}function k(b,M){const $=r.get(b);if(b.version>0&&$.__version!==b.version){ue($,b,M);return}n.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+M)}const le={[rf]:s.REPEAT,[Jn]:s.CLAMP_TO_EDGE,[sf]:s.MIRRORED_REPEAT},re={[An]:s.NEAREST,[Mv]:s.NEAREST_MIPMAP_NEAREST,[Ka]:s.NEAREST_MIPMAP_LINEAR,[ei]:s.LINEAR,[gc]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},U={[Rv]:s.NEVER,[Uv]:s.ALWAYS,[Pv]:s.LESS,[Fm]:s.LEQUAL,[bv]:s.EQUAL,[Nv]:s.GEQUAL,[Dv]:s.GREATER,[Lv]:s.NOTEQUAL};function ne(b,M){if(M.type===ki&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ei||M.magFilter===gc||M.magFilter===Ka||M.magFilter===Yr||M.minFilter===ei||M.minFilter===gc||M.minFilter===Ka||M.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,le[M.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,le[M.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,le[M.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,re[M.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===An||M.minFilter!==Ka&&M.minFilter!==Yr||M.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Ue(b,M){let $=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",D));const de=M.source;let ge=x.get(de);ge===void 0&&(ge={},x.set(de,ge));const ce=oe(M);if(ce!==b.__cacheKey){ge[ce]===void 0&&(ge[ce]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,$=!0),ge[ce].usedTimes++;const Ge=ge[b.__cacheKey];Ge!==void 0&&(ge[b.__cacheKey].usedTimes--,Ge.usedTimes===0&&R(M)),b.__cacheKey=ce,b.__webglTexture=ge[ce].texture}return $}function K(b,M,$){let de=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(de=s.TEXTURE_3D);const ge=Ue(b,M),ce=M.source;n.bindTexture(de,b.__webglTexture,s.TEXTURE0+$);const Ge=r.get(ce);if(ce.version!==Ge.__version||ge===!0){n.activeTexture(s.TEXTURE0+$);const we=Tt.getPrimaries(Tt.workingColorSpace),Fe=M.colorSpace===yr?null:Tt.getPrimaries(M.colorSpace),lt=M.colorSpace===yr||we===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Se=w(M.image,!1,a.maxTextureSize);Se=wt(M,Se);const ke=u.convert(M.format,M.colorSpace),$e=u.convert(M.type);let Je=N(M.internalFormat,ke,$e,M.colorSpace,M.isVideoTexture);ne(de,M);let ze;const ct=M.mipmaps,it=M.isVideoTexture!==!0,At=Ge.__version===void 0||ge===!0,G=ce.dataReady,Ce=X(M,Se);if(M.isDepthTexture)Je=P(M.format===Ks,M.type),At&&(it?n.texStorage2D(s.TEXTURE_2D,1,Je,Se.width,Se.height):n.texImage2D(s.TEXTURE_2D,0,Je,Se.width,Se.height,0,ke,$e,null));else if(M.isDataTexture)if(ct.length>0){it&&At&&n.texStorage2D(s.TEXTURE_2D,Ce,Je,ct[0].width,ct[0].height);for(let ie=0,fe=ct.length;ie<fe;ie++)ze=ct[ie],it?G&&n.texSubImage2D(s.TEXTURE_2D,ie,0,0,ze.width,ze.height,ke,$e,ze.data):n.texImage2D(s.TEXTURE_2D,ie,Je,ze.width,ze.height,0,ke,$e,ze.data);M.generateMipmaps=!1}else it?(At&&n.texStorage2D(s.TEXTURE_2D,Ce,Je,Se.width,Se.height),G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,ke,$e,Se.data)):n.texImage2D(s.TEXTURE_2D,0,Je,Se.width,Se.height,0,ke,$e,Se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){it&&At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Je,ct[0].width,ct[0].height,Se.depth);for(let ie=0,fe=ct.length;ie<fe;ie++)if(ze=ct[ie],M.format!==ti)if(ke!==null)if(it){if(G)if(M.layerUpdates.size>0){const De=$p(ze.width,ze.height,M.format,M.type);for(const be of M.layerUpdates){const rt=ze.data.subarray(be*De/ze.data.BYTES_PER_ELEMENT,(be+1)*De/ze.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,be,ze.width,ze.height,1,ke,rt)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ze.width,ze.height,Se.depth,ke,ze.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,Je,ze.width,ze.height,Se.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?G&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ze.width,ze.height,Se.depth,ke,$e,ze.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ie,Je,ze.width,ze.height,Se.depth,0,ke,$e,ze.data)}else{it&&At&&n.texStorage2D(s.TEXTURE_2D,Ce,Je,ct[0].width,ct[0].height);for(let ie=0,fe=ct.length;ie<fe;ie++)ze=ct[ie],M.format!==ti?ke!==null?it?G&&n.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,ze.width,ze.height,ke,ze.data):n.compressedTexImage2D(s.TEXTURE_2D,ie,Je,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?G&&n.texSubImage2D(s.TEXTURE_2D,ie,0,0,ze.width,ze.height,ke,$e,ze.data):n.texImage2D(s.TEXTURE_2D,ie,Je,ze.width,ze.height,0,ke,$e,ze.data)}else if(M.isDataArrayTexture)if(it){if(At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Je,Se.width,Se.height,Se.depth),G)if(M.layerUpdates.size>0){const ie=$p(Se.width,Se.height,M.format,M.type);for(const fe of M.layerUpdates){const De=Se.data.subarray(fe*ie/Se.data.BYTES_PER_ELEMENT,(fe+1)*ie/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,Se.width,Se.height,1,ke,$e,De)}M.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ke,$e,Se.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Se.width,Se.height,Se.depth,0,ke,$e,Se.data);else if(M.isData3DTexture)it?(At&&n.texStorage3D(s.TEXTURE_3D,Ce,Je,Se.width,Se.height,Se.depth),G&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ke,$e,Se.data)):n.texImage3D(s.TEXTURE_3D,0,Je,Se.width,Se.height,Se.depth,0,ke,$e,Se.data);else if(M.isFramebufferTexture){if(At)if(it)n.texStorage2D(s.TEXTURE_2D,Ce,Je,Se.width,Se.height);else{let ie=Se.width,fe=Se.height;for(let De=0;De<Ce;De++)n.texImage2D(s.TEXTURE_2D,De,Je,ie,fe,0,ke,$e,null),ie>>=1,fe>>=1}}else if(ct.length>0){if(it&&At){const ie=Xe(ct[0]);n.texStorage2D(s.TEXTURE_2D,Ce,Je,ie.width,ie.height)}for(let ie=0,fe=ct.length;ie<fe;ie++)ze=ct[ie],it?G&&n.texSubImage2D(s.TEXTURE_2D,ie,0,0,ke,$e,ze):n.texImage2D(s.TEXTURE_2D,ie,Je,ke,$e,ze);M.generateMipmaps=!1}else if(it){if(At){const ie=Xe(Se);n.texStorage2D(s.TEXTURE_2D,Ce,Je,ie.width,ie.height)}G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,$e,Se)}else n.texImage2D(s.TEXTURE_2D,0,Je,ke,$e,Se);y(M)&&g(de),Ge.__version=ce.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ue(b,M,$){if(M.image.length!==6)return;const de=Ue(b,M),ge=M.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+$);const ce=r.get(ge);if(ge.version!==ce.__version||de===!0){n.activeTexture(s.TEXTURE0+$);const Ge=Tt.getPrimaries(Tt.workingColorSpace),we=M.colorSpace===yr?null:Tt.getPrimaries(M.colorSpace),Fe=M.colorSpace===yr||Ge===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const lt=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,ke=[];for(let fe=0;fe<6;fe++)!lt&&!Se?ke[fe]=w(M.image[fe],!0,a.maxCubemapSize):ke[fe]=Se?M.image[fe].image:M.image[fe],ke[fe]=wt(M,ke[fe]);const $e=ke[0],Je=u.convert(M.format,M.colorSpace),ze=u.convert(M.type),ct=N(M.internalFormat,Je,ze,M.colorSpace),it=M.isVideoTexture!==!0,At=ce.__version===void 0||de===!0,G=ge.dataReady;let Ce=X(M,$e);ne(s.TEXTURE_CUBE_MAP,M);let ie;if(lt){it&&At&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ct,$e.width,$e.height);for(let fe=0;fe<6;fe++){ie=ke[fe].mipmaps;for(let De=0;De<ie.length;De++){const be=ie[De];M.format!==ti?Je!==null?it?G&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De,0,0,be.width,be.height,Je,be.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De,ct,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De,0,0,be.width,be.height,Je,ze,be.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De,ct,be.width,be.height,0,Je,ze,be.data)}}}else{if(ie=M.mipmaps,it&&At){ie.length>0&&Ce++;const fe=Xe(ke[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ct,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Se){it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ke[fe].width,ke[fe].height,Je,ze,ke[fe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ct,ke[fe].width,ke[fe].height,0,Je,ze,ke[fe].data);for(let De=0;De<ie.length;De++){const rt=ie[De].image[fe].image;it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De+1,0,0,rt.width,rt.height,Je,ze,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De+1,ct,rt.width,rt.height,0,Je,ze,rt.data)}}else{it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Je,ze,ke[fe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ct,Je,ze,ke[fe]);for(let De=0;De<ie.length;De++){const be=ie[De];it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De+1,0,0,Je,ze,be.image[fe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De+1,ct,Je,ze,be.image[fe])}}}y(M)&&g(s.TEXTURE_CUBE_MAP),ce.__version=ge.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Me(b,M,$,de,ge,ce){const Ge=u.convert($.format,$.colorSpace),we=u.convert($.type),Fe=N($.internalFormat,Ge,we,$.colorSpace),lt=r.get(M),Se=r.get($);if(Se.__renderTarget=M,!lt.__hasExternalTextures){const ke=Math.max(1,M.width>>ce),$e=Math.max(1,M.height>>ce);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?n.texImage3D(ge,ce,Fe,ke,$e,M.depth,0,Ge,we,null):n.texImage2D(ge,ce,Fe,ke,$e,0,Ge,we,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),ut(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ge,Se.__webglTexture,0,ht(M)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,ge,Se.__webglTexture,ce),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(b,M,$){if(s.bindRenderbuffer(s.RENDERBUFFER,b),M.depthBuffer){const de=M.depthTexture,ge=de&&de.isDepthTexture?de.type:null,ce=P(M.stencilBuffer,ge),Ge=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=ht(M);ut(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,ce,M.width,M.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,ce,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ce,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ge,s.RENDERBUFFER,b)}else{const de=M.textures;for(let ge=0;ge<de.length;ge++){const ce=de[ge],Ge=u.convert(ce.format,ce.colorSpace),we=u.convert(ce.type),Fe=N(ce.internalFormat,Ge,we,ce.colorSpace),lt=ht(M);$&&ut(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,Fe,M.width,M.height):ut(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,Fe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=r.get(M.depthTexture);de.__renderTarget=M,(!de.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),pe(M.depthTexture,0);const ge=de.__webglTexture,ce=ht(M);if(M.depthTexture.format===Gs)ut(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(M.depthTexture.format===Ks)ut(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ie(b){const M=r.get(b),$=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const de=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),de){const ge=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,de.removeEventListener("dispose",ge)};de.addEventListener("dispose",ge),M.__depthDisposeCallback=ge}M.__boundDepthTexture=de}if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Ae(M.__webglFramebuffer,b)}else if($){M.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[de]),M.__webglDepthbuffer[de]===void 0)M.__webglDepthbuffer[de]=s.createRenderbuffer(),ve(M.__webglDepthbuffer[de],b,!1);else{const ge=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ce)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ve(M.__webglDepthbuffer,b,!1);else{const de=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,ge)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(b,M,$){const de=r.get(b);M!==void 0&&Me(de.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Ie(b)}function Ct(b){const M=b.texture,$=r.get(b),de=r.get(M);b.addEventListener("dispose",F);const ge=b.textures,ce=b.isWebGLCubeRenderTarget===!0,Ge=ge.length>1;if(Ge||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=M.version,d.memory.textures++),ce){$.__webglFramebuffer=[];for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[we]=[];for(let Fe=0;Fe<M.mipmaps.length;Fe++)$.__webglFramebuffer[we][Fe]=s.createFramebuffer()}else $.__webglFramebuffer[we]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let we=0;we<M.mipmaps.length;we++)$.__webglFramebuffer[we]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Ge)for(let we=0,Fe=ge.length;we<Fe;we++){const lt=r.get(ge[we]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),d.memory.textures++)}if(b.samples>0&&ut(b)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){const Fe=ge[we];$.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[we]);const lt=u.convert(Fe.format,Fe.colorSpace),Se=u.convert(Fe.type),ke=N(Fe.internalFormat,lt,Se,Fe.colorSpace,b.isXRRenderTarget===!0),$e=ht(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,ke,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,$.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),ve($.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){n.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),ne(s.TEXTURE_CUBE_MAP,M);for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0)for(let Fe=0;Fe<M.mipmaps.length;Fe++)Me($.__webglFramebuffer[we][Fe],b,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Fe);else Me($.__webglFramebuffer[we],b,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(M)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ge){for(let we=0,Fe=ge.length;we<Fe;we++){const lt=ge[we],Se=r.get(lt);n.bindTexture(s.TEXTURE_2D,Se.__webglTexture),ne(s.TEXTURE_2D,lt),Me($.__webglFramebuffer,b,lt,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,0),y(lt)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let we=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(we=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(we,de.__webglTexture),ne(we,M),M.mipmaps&&M.mipmaps.length>0)for(let Fe=0;Fe<M.mipmaps.length;Fe++)Me($.__webglFramebuffer[Fe],b,M,s.COLOR_ATTACHMENT0,we,Fe);else Me($.__webglFramebuffer,b,M,s.COLOR_ATTACHMENT0,we,0);y(M)&&g(we),n.unbindTexture()}b.depthBuffer&&Ie(b)}function gt(b){const M=b.textures;for(let $=0,de=M.length;$<de;$++){const ge=M[$];if(y(ge)){const ce=I(b),Ge=r.get(ge).__webglTexture;n.bindTexture(ce,Ge),g(ce),n.unbindTexture()}}}const Lt=[],B=[];function vn(b){if(b.samples>0){if(ut(b)===!1){const M=b.textures,$=b.width,de=b.height;let ge=s.COLOR_BUFFER_BIT;const ce=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=r.get(b),we=M.length>1;if(we)for(let Fe=0;Fe<M.length;Fe++)n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Fe=0;Fe<M.length;Fe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const lt=r.get(M[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,$,de,0,0,$,de,ge,s.NEAREST),p===!0&&(Lt.length=0,B.length=0,Lt.push(s.COLOR_ATTACHMENT0+Fe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Lt.push(ce),B.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Lt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let Fe=0;Fe<M.length;Fe++){n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const lt=r.get(M[Fe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,lt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const M=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function ht(b){return Math.min(a.maxSamples,b.samples)}function ut(b){const M=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ye(b){const M=d.render.frame;_.get(b)!==M&&(_.set(b,M),b.update())}function wt(b,M){const $=b.colorSpace,de=b.format,ge=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||$!==Zs&&$!==yr&&(Tt.getTransfer($)===Pt?(de!==ti||ge!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),M}function Xe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=ae,this.setTexture2D=pe,this.setTexture2DArray=se,this.setTexture3D=he,this.setTextureCube=k,this.rebindTextures=Qe,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ut}function WE(s,e){function n(r,a=yr){let u;const d=Tt.getTransfer(a);if(r===Si)return s.UNSIGNED_BYTE;if(r===Bf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===kf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Pm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Cm)return s.BYTE;if(r===Rm)return s.SHORT;if(r===qs)return s.UNSIGNED_SHORT;if(r===Of)return s.INT;if(r===$r)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===zo)return s.HALF_FLOAT;if(r===bm)return s.ALPHA;if(r===Dm)return s.RGB;if(r===ti)return s.RGBA;if(r===Lm)return s.LUMINANCE;if(r===Nm)return s.LUMINANCE_ALPHA;if(r===Gs)return s.DEPTH_COMPONENT;if(r===Ks)return s.DEPTH_STENCIL;if(r===zf)return s.RED;if(r===Hf)return s.RED_INTEGER;if(r===Um)return s.RG;if(r===Vf)return s.RG_INTEGER;if(r===Gf)return s.RGBA_INTEGER;if(r===xl||r===yl||r===Sl||r===El)if(d===Pt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===xl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===El)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===xl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===El)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===of||r===af||r===lf||r===uf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===of)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===af)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===uf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cf||r===ff||r===df)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===cf||r===ff)return d===Pt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===df)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hf||r===pf||r===mf||r===gf||r===_f||r===vf||r===xf||r===yf||r===Sf||r===Ef||r===Mf||r===Tf||r===Af||r===wf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===hf)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pf)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mf)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gf)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_f)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vf)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xf)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yf)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sf)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ef)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mf)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Tf)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Af)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wf)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ml||r===Cf||r===Rf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Ml)return d===Pt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Cf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Im||r===Pf||r===bf||r===Df)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Ml)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Pf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Df)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$s?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const XE={type:"move"};class Wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const w of e.hand.values()){const y=n.getJointPose(w,r),g=this._getHandJoint(m,w);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),S=.02,A=.005;m.inputState.pinching&&x>S+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(XE)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new pl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const jE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new wn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Xi({vertexShader:jE,fragmentShader:YE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xi(new Ll(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $E extends Qr{constructor(e,n){super();const r=this;let a=null,u=1,d=null,f="local-floor",p=1,m=null,_=null,v=null,x=null,S=null,A=null;const w=new qE,y=n.getContextAttributes();let g=null,I=null;const N=[],P=[],X=new dt;let D=null;const F=new Qn;F.viewport=new Xt;const j=new Qn;j.viewport=new Xt;const R=[F,j],C=new m0;let V=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ue=N[K];return ue===void 0&&(ue=new Wc,N[K]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(K){let ue=N[K];return ue===void 0&&(ue=new Wc,N[K]=ue),ue.getGripSpace()},this.getHand=function(K){let ue=N[K];return ue===void 0&&(ue=new Wc,N[K]=ue),ue.getHandSpace()};function J(K){const ue=P.indexOf(K.inputSource);if(ue===-1)return;const Me=N[ue];Me!==void 0&&(Me.update(K.inputSource,K.frame,m||d),Me.dispatchEvent({type:K.type,data:K.inputSource}))}function oe(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",oe),a.removeEventListener("inputsourceschange",pe);for(let K=0;K<N.length;K++){const ue=P[K];ue!==null&&(P[K]=null,N[K].disconnect(ue))}V=null,ae=null,w.reset(),e.setRenderTarget(g),S=null,x=null,v=null,a=null,I=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(D),e.setSize(X.width,X.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return A},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",oe),a.addEventListener("inputsourceschange",pe),y.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(X),a.renderState.layers===void 0){const ue={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,ue),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new Kr(S.framebufferWidth,S.framebufferHeight,{format:ti,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ue=null,Me=null,ve=null;y.depth&&(ve=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=y.stencil?Ks:Gs,Me=y.stencil?$s:$r);const Ae={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:u};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(Ae),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new Kr(x.textureWidth,x.textureHeight,{format:ti,type:Si,depthTexture:new Zm(x.textureWidth,x.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await a.requestReferenceSpace(f),Ue.setContext(a),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function pe(K){for(let ue=0;ue<K.removed.length;ue++){const Me=K.removed[ue],ve=P.indexOf(Me);ve>=0&&(P[ve]=null,N[ve].disconnect(Me))}for(let ue=0;ue<K.added.length;ue++){const Me=K.added[ue];let ve=P.indexOf(Me);if(ve===-1){for(let Ie=0;Ie<N.length;Ie++)if(Ie>=P.length){P.push(Me),ve=Ie;break}else if(P[Ie]===null){P[Ie]=Me,ve=Ie;break}if(ve===-1)break}const Ae=N[ve];Ae&&Ae.connect(Me)}}const se=new Z,he=new Z;function k(K,ue,Me){se.setFromMatrixPosition(ue.matrixWorld),he.setFromMatrixPosition(Me.matrixWorld);const ve=se.distanceTo(he),Ae=ue.projectionMatrix.elements,Ie=Me.projectionMatrix.elements,Qe=Ae[14]/(Ae[10]-1),Ct=Ae[14]/(Ae[10]+1),gt=(Ae[9]+1)/Ae[5],Lt=(Ae[9]-1)/Ae[5],B=(Ae[8]-1)/Ae[0],vn=(Ie[8]+1)/Ie[0],ht=Qe*B,ut=Qe*vn,Ye=ve/(-B+vn),wt=Ye*-B;if(ue.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(wt),K.translateZ(Ye),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ae[10]===-1)K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Xe=Qe+Ye,b=Ct+Ye,M=ht-wt,$=ut+(ve-wt),de=gt*Ct/b*Xe,ge=Lt*Ct/b*Xe;K.projectionMatrix.makePerspective(M,$,de,ge,Xe,b),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function le(K,ue){ue===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ue.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let ue=K.near,Me=K.far;w.texture!==null&&(w.depthNear>0&&(ue=w.depthNear),w.depthFar>0&&(Me=w.depthFar)),C.near=j.near=F.near=ue,C.far=j.far=F.far=Me,(V!==C.near||ae!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,ae=C.far),F.layers.mask=K.layers.mask|2,j.layers.mask=K.layers.mask|4,C.layers.mask=F.layers.mask|j.layers.mask;const ve=K.parent,Ae=C.cameras;le(C,ve);for(let Ie=0;Ie<Ae.length;Ie++)le(Ae[Ie],ve);Ae.length===2?k(C,F,j):C.projectionMatrix.copy(F.projectionMatrix),re(K,C,ve)};function re(K,ue,Me){Me===null?K.matrix.copy(ue.matrixWorld):(K.matrix.copy(Me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ue.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Lf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(K){p=K,x!==null&&(x.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let U=null;function ne(K,ue){if(_=ue.getViewerPose(m||d),A=ue,_!==null){const Me=_.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let ve=!1;Me.length!==C.cameras.length&&(C.cameras.length=0,ve=!0);for(let Ie=0;Ie<Me.length;Ie++){const Qe=Me[Ie];let Ct=null;if(S!==null)Ct=S.getViewport(Qe);else{const Lt=v.getViewSubImage(x,Qe);Ct=Lt.viewport,Ie===0&&(e.setRenderTargetTextures(I,Lt.colorTexture,x.ignoreDepthValues?void 0:Lt.depthStencilTexture),e.setRenderTarget(I))}let gt=R[Ie];gt===void 0&&(gt=new Qn,gt.layers.enable(Ie),gt.viewport=new Xt,R[Ie]=gt),gt.matrix.fromArray(Qe.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Qe.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Ie===0&&(C.matrix.copy(gt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ve===!0&&C.cameras.push(gt)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ie=v.getDepthInformation(Me[0]);Ie&&Ie.isValid&&Ie.texture&&w.init(e,Ie,a.renderState)}}for(let Me=0;Me<N.length;Me++){const ve=P[Me],Ae=N[Me];ve!==null&&Ae!==void 0&&Ae.update(ve,ue,m||d)}U&&U(K,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),A=null}const Ue=new Qm;Ue.setAnimationLoop(ne),this.setAnimationLoop=function(K){U=K},this.dispose=function(){}}}const Gr=new Wi,KE=new qt;function ZE(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,Ym(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,I,N,P){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),v(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),x(y,g),g.isMeshPhysicalMaterial&&S(y,g,P)):g.isMeshMatcapMaterial?(u(y,g),A(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),w(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(d(y,g),g.isLineDashedMaterial&&f(y,g)):g.isPointsMaterial?p(y,g,I,N):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Fn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Fn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const I=e.get(g),N=I.envMap,P=I.envMapRotation;N&&(y.envMap.value=N,Gr.copy(P),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),y.envMapRotation.value.setFromMatrix4(KE.makeRotationFromEuler(Gr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function d(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function f(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,I,N){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*I,y.scale.value=N*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,I){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Fn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,g){g.matcap&&(y.matcap.value=g.matcap)}function w(y,g){const I=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function QE(s,e,n,r){let a={},u={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,N){const P=N.program;r.uniformBlockBinding(I,P)}function m(I,N){let P=a[I.id];P===void 0&&(A(I),P=_(I),a[I.id]=P,I.addEventListener("dispose",y));const X=N.program;r.updateUBOMapping(I,X);const D=e.render.frame;u[I.id]!==D&&(x(I),u[I.id]=D)}function _(I){const N=v();I.__bindingPointIndex=N;const P=s.createBuffer(),X=I.__size,D=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,X,D),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,P),P}function v(){for(let I=0;I<f;I++)if(d.indexOf(I)===-1)return d.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const N=a[I.id],P=I.uniforms,X=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let D=0,F=P.length;D<F;D++){const j=Array.isArray(P[D])?P[D]:[P[D]];for(let R=0,C=j.length;R<C;R++){const V=j[R];if(S(V,D,R,X)===!0){const ae=V.__offset,J=Array.isArray(V.value)?V.value:[V.value];let oe=0;for(let pe=0;pe<J.length;pe++){const se=J[pe],he=w(se);typeof se=="number"||typeof se=="boolean"?(V.__data[0]=se,s.bufferSubData(s.UNIFORM_BUFFER,ae+oe,V.__data)):se.isMatrix3?(V.__data[0]=se.elements[0],V.__data[1]=se.elements[1],V.__data[2]=se.elements[2],V.__data[3]=0,V.__data[4]=se.elements[3],V.__data[5]=se.elements[4],V.__data[6]=se.elements[5],V.__data[7]=0,V.__data[8]=se.elements[6],V.__data[9]=se.elements[7],V.__data[10]=se.elements[8],V.__data[11]=0):(se.toArray(V.__data,oe),oe+=he.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,N,P,X){const D=I.value,F=N+"_"+P;if(X[F]===void 0)return typeof D=="number"||typeof D=="boolean"?X[F]=D:X[F]=D.clone(),!0;{const j=X[F];if(typeof D=="number"||typeof D=="boolean"){if(j!==D)return X[F]=D,!0}else if(j.equals(D)===!1)return j.copy(D),!0}return!1}function A(I){const N=I.uniforms;let P=0;const X=16;for(let F=0,j=N.length;F<j;F++){const R=Array.isArray(N[F])?N[F]:[N[F]];for(let C=0,V=R.length;C<V;C++){const ae=R[C],J=Array.isArray(ae.value)?ae.value:[ae.value];for(let oe=0,pe=J.length;oe<pe;oe++){const se=J[oe],he=w(se),k=P%X,le=k%he.boundary,re=k+le;P+=le,re!==0&&X-re<he.storage&&(P+=X-re),ae.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=P,P+=he.storage}}}const D=P%X;return D>0&&(P+=X-D),I.__size=P,I.__cache={},this}function w(I){const N={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(N.boundary=4,N.storage=4):I.isVector2?(N.boundary=8,N.storage=8):I.isVector3||I.isColor?(N.boundary=16,N.storage=12):I.isVector4?(N.boundary=16,N.storage=16):I.isMatrix3?(N.boundary=48,N.storage=48):I.isMatrix4?(N.boundary=64,N.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),N}function y(I){const N=I.target;N.removeEventListener("dispose",y);const P=d.indexOf(N.__bindingPointIndex);d.splice(P,1),s.deleteBuffer(a[N.id]),delete a[N.id],delete u[N.id]}function g(){for(const I in a)s.deleteBuffer(a[I]);d=[],a={},u={}}return{bind:p,update:m,dispose:g}}class JE{constructor(e={}){const{canvas:n=Ov(),context:r=null,depth:a=!0,stencil:u=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=d;const A=new Uint32Array(4),w=new Int32Array(4);let y=null,g=null;const I=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=Hi,this.toneMappingExposure=1;const P=this;let X=!1,D=0,F=0,j=null,R=-1,C=null;const V=new Xt,ae=new Xt;let J=null;const oe=new Dt(0);let pe=0,se=n.width,he=n.height,k=1,le=null,re=null;const U=new Xt(0,0,se,he),ne=new Xt(0,0,se,he);let Ue=!1;const K=new Km;let ue=!1,Me=!1;const ve=new qt,Ae=new qt,Ie=new Z,Qe=new Xt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function Lt(){return j===null?k:1}let B=r;function vn(T,W){return n.getContext(T,W)}try{const T={alpha:!0,depth:a,stencil:u,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ff}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",De,!1),n.addEventListener("webglcontextcreationerror",be,!1),B===null){const W="webgl2";if(B=vn(W,T),B===null)throw vn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ht,ut,Ye,wt,Xe,b,M,$,de,ge,ce,Ge,we,Fe,lt,Se,ke,$e,Je,ze,ct,it,At,G;function Ce(){ht=new lS(B),ht.init(),it=new WE(B,ht),ut=new nS(B,ht,e,it),Ye=new VE(B,ht),ut.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),wt=new fS(B),Xe=new PE,b=new GE(B,ht,Ye,Xe,ut,it,wt),M=new rS(P),$=new aS(P),de=new v0(B),At=new eS(B,de),ge=new uS(B,de,wt,At),ce=new hS(B,ge,de,wt),Je=new dS(B,ut,b),Se=new iS(Xe),Ge=new RE(P,M,$,ht,ut,At,Se),we=new ZE(P,Xe),Fe=new DE,lt=new OE(ht),$e=new Jy(P,M,$,Ye,ce,S,p),ke=new zE(P,ce,ut),G=new QE(B,wt,ut,Ye),ze=new tS(B,ht,wt),ct=new cS(B,ht,wt),wt.programs=Ge.programs,P.capabilities=ut,P.extensions=ht,P.properties=Xe,P.renderLists=Fe,P.shadowMap=ke,P.state=Ye,P.info=wt}Ce();const ie=new $E(P,B);this.xr=ie,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=ht.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ht.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(se,he,!1))},this.getSize=function(T){return T.set(se,he)},this.setSize=function(T,W,ee=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=T,he=W,n.width=Math.floor(T*k),n.height=Math.floor(W*k),ee===!0&&(n.style.width=T+"px",n.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(se*k,he*k).floor()},this.setDrawingBufferSize=function(T,W,ee){se=T,he=W,k=ee,n.width=Math.floor(T*ee),n.height=Math.floor(W*ee),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(V)},this.getViewport=function(T){return T.copy(U)},this.setViewport=function(T,W,ee,te){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,W,ee,te),Ye.viewport(V.copy(U).multiplyScalar(k).round())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,W,ee,te){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,W,ee,te),Ye.scissor(ae.copy(ne).multiplyScalar(k).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(T){Ye.setScissorTest(Ue=T)},this.setOpaqueSort=function(T){le=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(T=!0,W=!0,ee=!0){let te=0;if(T){let z=!1;if(j!==null){const ye=j.texture.format;z=ye===Gf||ye===Vf||ye===Hf}if(z){const ye=j.texture.type,Re=ye===Si||ye===$r||ye===qs||ye===$s||ye===Bf||ye===kf,Ne=$e.getClearColor(),Oe=$e.getClearAlpha(),et=Ne.r,tt=Ne.g,je=Ne.b;Re?(A[0]=et,A[1]=tt,A[2]=je,A[3]=Oe,B.clearBufferuiv(B.COLOR,0,A)):(w[0]=et,w[1]=tt,w[2]=je,w[3]=Oe,B.clearBufferiv(B.COLOR,0,w))}else te|=B.COLOR_BUFFER_BIT}W&&(te|=B.DEPTH_BUFFER_BIT),ee&&(te|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",De,!1),n.removeEventListener("webglcontextcreationerror",be,!1),$e.dispose(),Fe.dispose(),lt.dispose(),Xe.dispose(),M.dispose(),$.dispose(),ce.dispose(),At.dispose(),G.dispose(),Ge.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",es),ie.removeEventListener("sessionend",ji),Ei.stop()};function fe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const T=wt.autoReset,W=ke.enabled,ee=ke.autoUpdate,te=ke.needsUpdate,z=ke.type;Ce(),wt.autoReset=T,ke.enabled=W,ke.autoUpdate=ee,ke.needsUpdate=te,ke.type=z}function be(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function rt(T){const W=T.target;W.removeEventListener("dispose",rt),Ut(W)}function Ut(T){$t(T),Xe.remove(T)}function $t(T){const W=Xe.get(T).programs;W!==void 0&&(W.forEach(function(ee){Ge.releaseProgram(ee)}),T.isShaderMaterial&&Ge.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,ee,te,z,ye){W===null&&(W=Ct);const Re=z.isMesh&&z.matrixWorld.determinant()<0,Ne=Xo(T,W,ee,te,z);Ye.setMaterial(te,Re);let Oe=ee.index,et=1;if(te.wireframe===!0){if(Oe=ge.getWireframeAttribute(ee),Oe===void 0)return;et=2}const tt=ee.drawRange,je=ee.attributes.position;let st=tt.start*et,St=(tt.start+tt.count)*et;ye!==null&&(st=Math.max(st,ye.start*et),St=Math.min(St,(ye.start+ye.count)*et)),Oe!==null?(st=Math.max(st,0),St=Math.min(St,Oe.count)):je!=null&&(st=Math.max(st,0),St=Math.min(St,je.count));const Et=St-st;if(Et<0||Et===1/0)return;At.setup(z,te,Ne,ee,Oe);let Ot,vt=ze;if(Oe!==null&&(Ot=de.get(Oe),vt=ct,vt.setIndex(Ot)),z.isMesh)te.wireframe===!0?(Ye.setLineWidth(te.wireframeLinewidth*Lt()),vt.setMode(B.LINES)):vt.setMode(B.TRIANGLES);else if(z.isLine){let qe=te.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*Lt()),z.isLineSegments?vt.setMode(B.LINES):z.isLineLoop?vt.setMode(B.LINE_LOOP):vt.setMode(B.LINE_STRIP)}else z.isPoints?vt.setMode(B.POINTS):z.isSprite&&vt.setMode(B.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)vt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))vt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const qe=z._multiDrawStarts,Ht=z._multiDrawCounts,_t=z._multiDrawCount,on=Oe?de.get(Oe).bytesPerElement:1,ni=Xe.get(te).currentProgram.getUniforms();for(let yn=0;yn<_t;yn++)ni.setValue(B,"_gl_DrawID",yn),vt.render(qe[yn]/on,Ht[yn])}else if(z.isInstancedMesh)vt.renderInstances(st,Et,z.count);else if(ee.isInstancedBufferGeometry){const qe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ht=Math.min(ee.instanceCount,qe);vt.renderInstances(st,Et,Ht)}else vt.render(st,Et)};function xt(T,W,ee){T.transparent===!0&&T.side===Bi&&T.forceSinglePass===!1?(T.side=Fn,T.needsUpdate=!0,ts(T,W,ee),T.side=Gi,T.needsUpdate=!0,ts(T,W,ee),T.side=Bi):ts(T,W,ee)}this.compile=function(T,W,ee=null){ee===null&&(ee=T),g=lt.get(ee),g.init(W),N.push(g),ee.traverseVisible(function(z){z.isLight&&z.layers.test(W.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),T!==ee&&T.traverseVisible(function(z){z.isLight&&z.layers.test(W.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),g.setupLights();const te=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ye=z.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){const Ne=ye[Re];xt(Ne,ee,z),te.add(Ne)}else xt(ye,ee,z),te.add(ye)}),N.pop(),g=null,te},this.compileAsync=function(T,W,ee=null){const te=this.compile(T,W,ee);return new Promise(z=>{function ye(){if(te.forEach(function(Re){Xe.get(Re).currentProgram.isReady()&&te.delete(Re)}),te.size===0){z(T);return}setTimeout(ye,10)}ht.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Cn=null;function xn(T){Cn&&Cn(T)}function es(){Ei.stop()}function ji(){Ei.start()}const Ei=new Qm;Ei.setAnimationLoop(xn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(T){Cn=T,ie.setAnimationLoop(T),T===null?Ei.stop():Ei.start()},ie.addEventListener("sessionstart",es),ie.addEventListener("sessionend",ji),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(W),W=ie.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,W,j),g=lt.get(T,N.length),g.init(W),N.push(g),Ae.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),K.setFromProjectionMatrix(Ae),Me=this.localClippingEnabled,ue=Se.init(this.clippingPlanes,Me),y=Fe.get(T,I.length),y.init(),I.push(y),ie.enabled===!0&&ie.isPresenting===!0){const ye=P.xr.getDepthSensingMesh();ye!==null&&Mi(ye,W,-1/0,P.sortObjects)}Mi(T,W,0,P.sortObjects),y.finish(),P.sortObjects===!0&&y.sort(le,re),gt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,gt&&$e.addToRenderList(y,T),this.info.render.frame++,ue===!0&&Se.beginShadows();const ee=g.state.shadowsArray;ke.render(ee,T,W),ue===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=y.opaque,z=y.transmissive;if(g.setupLights(),W.isArrayCamera){const ye=W.cameras;if(z.length>0)for(let Re=0,Ne=ye.length;Re<Ne;Re++){const Oe=ye[Re];Mr(te,z,T,Oe)}gt&&$e.render(T);for(let Re=0,Ne=ye.length;Re<Ne;Re++){const Oe=ye[Re];Er(y,T,Oe,Oe.viewport)}}else z.length>0&&Mr(te,z,T,W),gt&&$e.render(T),Er(y,T,W);j!==null&&(b.updateMultisampleRenderTarget(j),b.updateRenderTargetMipmap(j)),T.isScene===!0&&T.onAfterRender(P,T,W),At.resetDefaultState(),R=-1,C=null,N.pop(),N.length>0?(g=N[N.length-1],ue===!0&&Se.setGlobalState(P.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function Mi(T,W,ee,te){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)ee=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){te&&Qe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ae);const Re=ce.update(T),Ne=T.material;Ne.visible&&y.push(T,Re,Ne,ee,Qe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||K.intersectsObject(T))){const Re=ce.update(T),Ne=T.material;if(te&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Qe.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Qe.copy(Re.boundingSphere.center)),Qe.applyMatrix4(T.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ne)){const Oe=Re.groups;for(let et=0,tt=Oe.length;et<tt;et++){const je=Oe[et],st=Ne[je.materialIndex];st&&st.visible&&y.push(T,Re,st,ee,Qe.z,je)}}else Ne.visible&&y.push(T,Re,Ne,ee,Qe.z,null)}}const ye=T.children;for(let Re=0,Ne=ye.length;Re<Ne;Re++)Mi(ye[Re],W,ee,te)}function Er(T,W,ee,te){const z=T.opaque,ye=T.transmissive,Re=T.transparent;g.setupLightsView(ee),ue===!0&&Se.setGlobalState(P.clippingPlanes,ee),te&&Ye.viewport(V.copy(te)),z.length>0&&Yi(z,W,ee),ye.length>0&&Yi(ye,W,ee),Re.length>0&&Yi(Re,W,ee),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Mr(T,W,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[te.id]===void 0&&(g.state.transmissionRenderTarget[te.id]=new Kr(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?zo:Si,minFilter:Yr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const ye=g.state.transmissionRenderTarget[te.id],Re=te.viewport||V;ye.setSize(Re.z,Re.w);const Ne=P.getRenderTarget();P.setRenderTarget(ye),P.getClearColor(oe),pe=P.getClearAlpha(),pe<1&&P.setClearColor(16777215,.5),P.clear(),gt&&$e.render(ee);const Oe=P.toneMapping;P.toneMapping=Hi;const et=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),g.setupLightsView(te),ue===!0&&Se.setGlobalState(P.clippingPlanes,te),Yi(T,ee,te),b.updateMultisampleRenderTarget(ye),b.updateRenderTargetMipmap(ye),ht.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let je=0,st=W.length;je<st;je++){const St=W[je],Et=St.object,Ot=St.geometry,vt=St.material,qe=St.group;if(vt.side===Bi&&Et.layers.test(te.layers)){const Ht=vt.side;vt.side=Fn,vt.needsUpdate=!0,Go(Et,ee,te,Ot,vt,qe),vt.side=Ht,vt.needsUpdate=!0,tt=!0}}tt===!0&&(b.updateMultisampleRenderTarget(ye),b.updateRenderTargetMipmap(ye))}P.setRenderTarget(Ne),P.setClearColor(oe,pe),et!==void 0&&(te.viewport=et),P.toneMapping=Oe}function Yi(T,W,ee){const te=W.isScene===!0?W.overrideMaterial:null;for(let z=0,ye=T.length;z<ye;z++){const Re=T[z],Ne=Re.object,Oe=Re.geometry,et=te===null?Re.material:te,tt=Re.group;Ne.layers.test(ee.layers)&&Go(Ne,W,ee,Oe,et,tt)}}function Go(T,W,ee,te,z,ye){T.onBeforeRender(P,W,ee,te,z,ye),T.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(P,W,ee,te,T,ye),z.transparent===!0&&z.side===Bi&&z.forceSinglePass===!1?(z.side=Fn,z.needsUpdate=!0,P.renderBufferDirect(ee,W,te,z,T,ye),z.side=Gi,z.needsUpdate=!0,P.renderBufferDirect(ee,W,te,z,T,ye),z.side=Bi):P.renderBufferDirect(ee,W,te,z,T,ye),T.onAfterRender(P,W,ee,te,z,ye)}function ts(T,W,ee){W.isScene!==!0&&(W=Ct);const te=Xe.get(T),z=g.state.lights,ye=g.state.shadowsArray,Re=z.state.version,Ne=Ge.getParameters(T,z.state,ye,W,ee),Oe=Ge.getProgramCacheKey(Ne);let et=te.programs;te.environment=T.isMeshStandardMaterial?W.environment:null,te.fog=W.fog,te.envMap=(T.isMeshStandardMaterial?$:M).get(T.envMap||te.environment),te.envMapRotation=te.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,et===void 0&&(T.addEventListener("dispose",rt),et=new Map,te.programs=et);let tt=et.get(Oe);if(tt!==void 0){if(te.currentProgram===tt&&te.lightsStateVersion===Re)return hi(T,Ne),tt}else Ne.uniforms=Ge.getUniforms(T),T.onBeforeCompile(Ne,P),tt=Ge.acquireProgram(Ne,Oe),et.set(Oe,tt),te.uniforms=Ne.uniforms;const je=te.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(je.clippingPlanes=Se.uniform),hi(T,Ne),te.needsLights=Ul(T),te.lightsStateVersion=Re,te.needsLights&&(je.ambientLightColor.value=z.state.ambient,je.lightProbe.value=z.state.probe,je.directionalLights.value=z.state.directional,je.directionalLightShadows.value=z.state.directionalShadow,je.spotLights.value=z.state.spot,je.spotLightShadows.value=z.state.spotShadow,je.rectAreaLights.value=z.state.rectArea,je.ltc_1.value=z.state.rectAreaLTC1,je.ltc_2.value=z.state.rectAreaLTC2,je.pointLights.value=z.state.point,je.pointLightShadows.value=z.state.pointShadow,je.hemisphereLights.value=z.state.hemi,je.directionalShadowMap.value=z.state.directionalShadowMap,je.directionalShadowMatrix.value=z.state.directionalShadowMatrix,je.spotShadowMap.value=z.state.spotShadowMap,je.spotLightMatrix.value=z.state.spotLightMatrix,je.spotLightMap.value=z.state.spotLightMap,je.pointShadowMap.value=z.state.pointShadowMap,je.pointShadowMatrix.value=z.state.pointShadowMatrix),te.currentProgram=tt,te.uniformsList=null,tt}function Wo(T){if(T.uniformsList===null){const W=T.currentProgram.getUniforms();T.uniformsList=Al.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function hi(T,W){const ee=Xe.get(T);ee.outputColorSpace=W.outputColorSpace,ee.batching=W.batching,ee.batchingColor=W.batchingColor,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.instancingMorph=W.instancingMorph,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function Xo(T,W,ee,te,z){W.isScene!==!0&&(W=Ct),b.resetTextureUnits();const ye=W.fog,Re=te.isMeshStandardMaterial?W.environment:null,Ne=j===null?P.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Zs,Oe=(te.isMeshStandardMaterial?$:M).get(te.envMap||Re),et=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,tt=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),je=!!ee.morphAttributes.position,st=!!ee.morphAttributes.normal,St=!!ee.morphAttributes.color;let Et=Hi;te.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Et=P.toneMapping);const Ot=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,vt=Ot!==void 0?Ot.length:0,qe=Xe.get(te),Ht=g.state.lights;if(ue===!0&&(Me===!0||T!==C)){const Gt=T===C&&te.id===R;Se.setState(te,T,Gt)}let _t=!1;te.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ht.state.version||qe.outputColorSpace!==Ne||z.isBatchedMesh&&qe.batching===!1||!z.isBatchedMesh&&qe.batching===!0||z.isBatchedMesh&&qe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&qe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&qe.instancing===!1||!z.isInstancedMesh&&qe.instancing===!0||z.isSkinnedMesh&&qe.skinning===!1||!z.isSkinnedMesh&&qe.skinning===!0||z.isInstancedMesh&&qe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&qe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&qe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&qe.instancingMorph===!1&&z.morphTexture!==null||qe.envMap!==Oe||te.fog===!0&&qe.fog!==ye||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Se.numPlanes||qe.numIntersection!==Se.numIntersection)||qe.vertexAlphas!==et||qe.vertexTangents!==tt||qe.morphTargets!==je||qe.morphNormals!==st||qe.morphColors!==St||qe.toneMapping!==Et||qe.morphTargetsCount!==vt)&&(_t=!0):(_t=!0,qe.__version=te.version);let on=qe.currentProgram;_t===!0&&(on=ts(te,W,z));let ni=!1,yn=!1,Tr=!1;const Rt=on.getUniforms(),Sn=qe.uniforms;if(Ye.useProgram(on.program)&&(ni=!0,yn=!0,Tr=!0),te.id!==R&&(R=te.id,yn=!0),ni||C!==T){Ye.buffers.depth.getReversed()?(ve.copy(T.projectionMatrix),kv(ve),zv(ve),Rt.setValue(B,"projectionMatrix",ve)):Rt.setValue(B,"projectionMatrix",T.projectionMatrix),Rt.setValue(B,"viewMatrix",T.matrixWorldInverse);const fn=Rt.map.cameraPosition;fn!==void 0&&fn.setValue(B,Ie.setFromMatrixPosition(T.matrixWorld)),ut.logarithmicDepthBuffer&&Rt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Rt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),C!==T&&(C=T,yn=!0,Tr=!0)}if(z.isSkinnedMesh){Rt.setOptional(B,z,"bindMatrix"),Rt.setOptional(B,z,"bindMatrixInverse");const Gt=z.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Rt.setValue(B,"boneTexture",Gt.boneTexture,b))}z.isBatchedMesh&&(Rt.setOptional(B,z,"batchingTexture"),Rt.setValue(B,"batchingTexture",z._matricesTexture,b),Rt.setOptional(B,z,"batchingIdTexture"),Rt.setValue(B,"batchingIdTexture",z._indirectTexture,b),Rt.setOptional(B,z,"batchingColorTexture"),z._colorsTexture!==null&&Rt.setValue(B,"batchingColorTexture",z._colorsTexture,b));const cn=ee.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&Je.update(z,ee,on),(yn||qe.receiveShadow!==z.receiveShadow)&&(qe.receiveShadow=z.receiveShadow,Rt.setValue(B,"receiveShadow",z.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Sn.envMap.value=Oe,Sn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&W.environment!==null&&(Sn.envMapIntensity.value=W.environmentIntensity),yn&&(Rt.setValue(B,"toneMappingExposure",P.toneMappingExposure),qe.needsLights&&jo(Sn,Tr),ye&&te.fog===!0&&we.refreshFogUniforms(Sn,ye),we.refreshMaterialUniforms(Sn,te,k,he,g.state.transmissionRenderTarget[T.id]),Al.upload(B,Wo(qe),Sn,b)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Al.upload(B,Wo(qe),Sn,b),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Rt.setValue(B,"center",z.center),Rt.setValue(B,"modelViewMatrix",z.modelViewMatrix),Rt.setValue(B,"normalMatrix",z.normalMatrix),Rt.setValue(B,"modelMatrix",z.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Gt=te.uniformsGroups;for(let fn=0,Ar=Gt.length;fn<Ar;fn++){const pt=Gt[fn];G.update(pt,on),G.bind(pt,on)}}return on}function jo(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function Ul(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(T,W,ee){Xe.get(T.texture).__webglTexture=W,Xe.get(T.depthTexture).__webglTexture=ee;const te=Xe.get(T);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,W){const ee=Xe.get(T);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,ee=0){j=T,D=W,F=ee;let te=!0,z=null,ye=!1,Re=!1;if(T){const Oe=Xe.get(T);if(Oe.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(B.FRAMEBUFFER,null),te=!1;else if(Oe.__webglFramebuffer===void 0)b.setupRenderTarget(T);else if(Oe.__hasExternalTextures)b.rebindTextures(T,Xe.get(T.texture).__webglTexture,Xe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const je=T.depthTexture;if(Oe.__boundDepthTexture!==je){if(je!==null&&Xe.has(je)&&(T.width!==je.image.width||T.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(T)}}const et=T.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Re=!0);const tt=Xe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(tt[W])?z=tt[W][ee]:z=tt[W],ye=!0):T.samples>0&&b.useMultisampledRTT(T)===!1?z=Xe.get(T).__webglMultisampledFramebuffer:Array.isArray(tt)?z=tt[ee]:z=tt,V.copy(T.viewport),ae.copy(T.scissor),J=T.scissorTest}else V.copy(U).multiplyScalar(k).floor(),ae.copy(ne).multiplyScalar(k).floor(),J=Ue;if(Ye.bindFramebuffer(B.FRAMEBUFFER,z)&&te&&Ye.drawBuffers(T,z),Ye.viewport(V),Ye.scissor(ae),Ye.setScissorTest(J),ye){const Oe=Xe.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Oe.__webglTexture,ee)}else if(Re){const Oe=Xe.get(T.texture),et=W||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oe.__webglTexture,ee||0,et)}R=-1},this.readRenderTargetPixels=function(T,W,ee,te,z,ye,Re){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Xe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){Ye.bindFramebuffer(B.FRAMEBUFFER,Ne);try{const Oe=T.texture,et=Oe.format,tt=Oe.type;if(!ut.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-te&&ee>=0&&ee<=T.height-z&&B.readPixels(W,ee,te,z,it.convert(et),it.convert(tt),ye)}finally{const Oe=j!==null?Xe.get(j).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(T,W,ee,te,z,ye,Re){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Xe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){const Oe=T.texture,et=Oe.format,tt=Oe.type;if(!ut.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=T.width-te&&ee>=0&&ee<=T.height-z){Ye.bindFramebuffer(B.FRAMEBUFFER,Ne);const je=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,je),B.bufferData(B.PIXEL_PACK_BUFFER,ye.byteLength,B.STREAM_READ),B.readPixels(W,ee,te,z,it.convert(et),it.convert(tt),0);const st=j!==null?Xe.get(j).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,st);const St=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Bv(B,St,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,je),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ye),B.deleteBuffer(je),B.deleteSync(St),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,W=null,ee=0){T.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1]);const te=Math.pow(2,-ee),z=Math.floor(T.image.width*te),ye=Math.floor(T.image.height*te),Re=W!==null?W.x:0,Ne=W!==null?W.y:0;b.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,ee,0,0,Re,Ne,z,ye),Ye.unbindTexture()};const Yo=B.createFramebuffer(),qo=B.createFramebuffer();this.copyTextureToTexture=function(T,W,ee=null,te=null,z=0,ye=null){T.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,T=arguments[1],W=arguments[2],ye=arguments[3]||0,ee=null),ye===null&&(z!==0?(Bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=z,z=0):ye=0);let Re,Ne,Oe,et,tt,je,st,St,Et;const Ot=T.isCompressedTexture?T.mipmaps[ye]:T.image;if(ee!==null)Re=ee.max.x-ee.min.x,Ne=ee.max.y-ee.min.y,Oe=ee.isBox3?ee.max.z-ee.min.z:1,et=ee.min.x,tt=ee.min.y,je=ee.isBox3?ee.min.z:0;else{const cn=Math.pow(2,-z);Re=Math.floor(Ot.width*cn),Ne=Math.floor(Ot.height*cn),T.isDataArrayTexture?Oe=Ot.depth:T.isData3DTexture?Oe=Math.floor(Ot.depth*cn):Oe=1,et=0,tt=0,je=0}te!==null?(st=te.x,St=te.y,Et=te.z):(st=0,St=0,Et=0);const vt=it.convert(W.format),qe=it.convert(W.type);let Ht;W.isData3DTexture?(b.setTexture3D(W,0),Ht=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(b.setTexture2DArray(W,0),Ht=B.TEXTURE_2D_ARRAY):(b.setTexture2D(W,0),Ht=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const _t=B.getParameter(B.UNPACK_ROW_LENGTH),on=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ni=B.getParameter(B.UNPACK_SKIP_PIXELS),yn=B.getParameter(B.UNPACK_SKIP_ROWS),Tr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ot.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ot.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,et),B.pixelStorei(B.UNPACK_SKIP_ROWS,tt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,je);const Rt=T.isDataArrayTexture||T.isData3DTexture,Sn=W.isDataArrayTexture||W.isData3DTexture;if(T.isDepthTexture){const cn=Xe.get(T),Gt=Xe.get(W),fn=Xe.get(cn.__renderTarget),Ar=Xe.get(Gt.__renderTarget);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,fn.__webglFramebuffer),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ar.__webglFramebuffer);for(let pt=0;pt<Oe;pt++)Rt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.get(T).__webglTexture,z,je+pt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.get(W).__webglTexture,ye,Et+pt)),B.blitFramebuffer(et,tt,Re,Ne,st,St,Re,Ne,B.DEPTH_BUFFER_BIT,B.NEAREST);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||Xe.has(T)){const cn=Xe.get(T),Gt=Xe.get(W);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,Yo),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,qo);for(let fn=0;fn<Oe;fn++)Rt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,cn.__webglTexture,z,je+fn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,cn.__webglTexture,z),Sn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Gt.__webglTexture,ye,Et+fn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Gt.__webglTexture,ye),z!==0?B.blitFramebuffer(et,tt,Re,Ne,st,St,Re,Ne,B.COLOR_BUFFER_BIT,B.NEAREST):Sn?B.copyTexSubImage3D(Ht,ye,st,St,Et+fn,et,tt,Re,Ne):B.copyTexSubImage2D(Ht,ye,st,St,et,tt,Re,Ne);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Sn?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Ht,ye,st,St,Et,Re,Ne,Oe,vt,qe,Ot.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Ht,ye,st,St,Et,Re,Ne,Oe,vt,Ot.data):B.texSubImage3D(Ht,ye,st,St,Et,Re,Ne,Oe,vt,qe,Ot):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ye,st,St,Re,Ne,vt,qe,Ot.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ye,st,St,Ot.width,Ot.height,vt,Ot.data):B.texSubImage2D(B.TEXTURE_2D,ye,st,St,Re,Ne,vt,qe,Ot);B.pixelStorei(B.UNPACK_ROW_LENGTH,_t),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,on),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ni),B.pixelStorei(B.UNPACK_SKIP_ROWS,yn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Tr),ye===0&&W.generateMipmaps&&B.generateMipmap(Ht),Ye.unbindTexture()},this.copyTextureToTexture3D=function(T,W,ee=null,te=null,z=0){return T.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,T=arguments[2],W=arguments[3],z=arguments[4]||0),Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,W,ee,te,z)},this.initRenderTarget=function(T){Xe.get(T).__webglFramebuffer===void 0&&b.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),Ye.unbindTexture()},this.resetState=function(){D=0,F=0,j=null,Ye.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}const ym={type:"change"},jf={type:"start"},ig={type:"end"},vl=new Hm,Sm=new xr,eM=Math.cos(70*Fv.DEG2RAD),Qt=new Z,In=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xc=1e-6;class tM extends g0{constructor(e,n=null){super(e,n),this.state=bt.NONE,this.enabled=!0,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hs.ROTATE,MIDDLE:Hs.DOLLY,RIGHT:Hs.PAN},this.touches={ONE:ks.ROTATE,TWO:ks.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new Zr,this._lastTargetPosition=new Z,this._quat=new Zr().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qp,this._sphericalDelta=new qp,this._scale=1,this._panOffset=new Z,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new Z,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iM.bind(this),this._onPointerDown=nM.bind(this),this._onPointerUp=rM.bind(this),this._onContextMenu=fM.bind(this),this._onMouseWheel=aM.bind(this),this._onKeyDown=lM.bind(this),this._onTouchStart=uM.bind(this),this._onTouchMove=cM.bind(this),this._onMouseDown=sM.bind(this),this._onMouseMove=oM.bind(this),this._interceptControlDown=dM.bind(this),this._interceptControlUp=hM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ym),this.update(),this.state=bt.NONE}update(e=null){const n=this.object.position;Qt.copy(n).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=In:r>Math.PI&&(r-=In),a<-Math.PI?a+=In:a>Math.PI&&(a-=In),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const d=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=d!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let d=null;if(this.object.isPerspectiveCamera){const f=Qt.length();d=this._clampDistance(f*this._scale);const p=f-d;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),u=!!p}else if(this.object.isOrthographicCamera){const f=new Z(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=p!==this.object.zoom;const m=new Z(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(f),this.object.updateMatrixWorld(),d=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;d!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(d).add(this.object.position):(vl.origin.copy(this.object.position),vl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vl.direction))<eM?this.object.lookAt(this.target):(Sm.setFromNormalAndCoplanarPoint(this.object.up,this.target),vl.intersectPlane(Sm,this.target))))}else if(this.object.isOrthographicCamera){const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),d!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Xc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xc||this._lastTargetPosition.distanceToSquared(this.target)>Xc?(this.dispatchEvent(ym),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?In/60*this.autoRotateSpeed*e:In/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Qt.setFromMatrixColumn(n,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,n){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(n,1):(Qt.setFromMatrixColumn(n,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Qt.copy(a).sub(this.target);let u=Qt.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*u/r.clientHeight,this.object.matrix),this._panUp(2*n*u/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,u=n-r.top,d=r.width,f=r.height;this._mouse.x=a/d*2-1,this._mouse.y=-(u/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(In*this._rotateDelta.x/n.clientHeight),this._rotateUp(In*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(In*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-In*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(In*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-In*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,a=e.pageY-n.y,u=Math.sqrt(r*r+a*a);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),u=.5*(e.pageY+r.y);this._rotateEnd.set(a,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(In*this._rotateDelta.x/n.clientHeight),this._rotateUp(In*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,a=e.pageY-n.y,u=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const d=(e.pageX+n.x)*.5,f=(e.pageY+n.y)*.5;this._updateZoomParameters(d,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new dt,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function nM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function iM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function rM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ig),this.state=bt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function sM(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Hs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=bt.DOLLY;break;case Hs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=bt.ROTATE}break;case Hs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(jf)}function oM(s){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function aM(s){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(s.preventDefault(),this.dispatchEvent(jf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(ig))}function lM(s){this.enabled!==!1&&this._handleKeyDown(s)}function uM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ks.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=bt.TOUCH_ROTATE;break;case ks.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case ks.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=bt.TOUCH_DOLLY_PAN;break;case ks.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(jf)}function cM(s){switch(this._trackPointer(s),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=bt.NONE}}function fM(s){this.enabled!==!1&&s.preventDefault()}function dM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const wl=Object.freeze(["#03051A","#04051A","#05061B","#06071C","#07071D","#08081E","#0A091F","#0B0920","#0D0A21","#0E0B22","#100B23","#110C24","#130D25","#140E26","#160E27","#170F28","#180F29","#1A102A","#1B112B","#1D112C","#1E122D","#20122E","#211330","#221331","#241432","#251433","#271534","#281535","#2A1636","#2B1637","#2D1738","#2E1739","#30173A","#31183B","#33183C","#34193D","#35193E","#37193F","#381A40","#3A1A41","#3C1A42","#3D1A42","#3F1B43","#401B44","#421B45","#431C46","#451C47","#461C48","#481C48","#491D49","#4B1D4A","#4C1D4B","#4E1D4B","#501D4C","#511E4D","#531E4D","#541E4E","#561E4F","#581E4F","#591E50","#5B1E51","#5C1E51","#5E1F52","#601F52","#611F53","#631F53","#641F54","#661F54","#681F55","#691F55","#6B1F56","#6D1F56","#6E1F57","#701F57","#711F57","#731F58","#751F58","#761F58","#781F59","#7A1F59","#7B1F59","#7D1F5A","#7F1E5A","#811E5A","#821E5A","#841E5A","#861E5B","#871E5B","#891E5B","#8B1D5B","#8C1D5B","#8E1D5B","#901D5B","#921C5B","#931C5B","#951C5B","#971C5B","#981B5B","#9A1B5B","#9C1B5B","#9E1A5B","#9F1A5B","#A11A5B","#A3195B","#A4195B","#A6195A","#A8185A","#AA185A","#AB185A","#AD1759","#AF1759","#B01759","#B21758","#B41658","#B51657","#B71657","#B91657","#BA1656","#BC1656","#BD1655","#BF1654","#C11754","#C21753","#C41753","#C51852","#C71951","#C81951","#CA1A50","#CB1B4F","#CD1C4E","#CE1D4E","#CF1E4D","#D11F4C","#D2204C","#D3214B","#D5224A","#D62449","#D72549","#D82748","#D92847","#DB2946","#DC2B46","#DD2C45","#DE2E44","#DF2F44","#E03143","#E13342","#E23442","#E33641","#E43841","#E53940","#E63B40","#E73D3F","#E83F3F","#E8403E","#E9423E","#EA443E","#EB463E","#EB483E","#EC4A3E","#EC4C3E","#ED4E3E","#ED503E","#EE523F","#EE543F","#EF5640","#EF5840","#EF5A41","#F05C42","#F05E42","#F06043","#F16244","#F16445","#F16646","#F26747","#F26948","#F26B49","#F26D4B","#F26F4C","#F3714D","#F3734E","#F37450","#F37651","#F37852","#F47A54","#F47C55","#F47D57","#F47F58","#F4815A","#F4835B","#F4845D","#F4865E","#F58860","#F58A61","#F58B63","#F58D64","#F58F66","#F59067","#F59269","#F5946B","#F5966C","#F5976E","#F59970","#F69B71","#F69C73","#F69E75","#F6A077","#F6A178","#F6A37A","#F6A47C","#F6A67E","#F6A880","#F6A981","#F6AB83","#F6AD85","#F6AE87","#F6B089","#F6B18B","#F6B38D","#F6B48F","#F6B691","#F6B893","#F6B995","#F6BB97","#F6BC99","#F6BE9B","#F6BF9D","#F6C19F","#F7C2A2","#F7C4A4","#F7C6A6","#F7C7A8","#F7C9AA","#F7CAAC","#F7CCAF","#F7CDB1","#F7CFB3","#F7D0B5","#F8D1B8","#F8D3BA","#F8D4BC","#F8D6BE","#F8D7C0","#F8D9C3","#F8DAC5","#F8DCC7","#F9DDC9","#F9DFCB","#F9E0CD","#F9E2D0","#F9E3D2","#F9E5D4","#FAE6D6","#FAE8D8","#FAE9DA","#FAEBDD"]),pM="H|Hydrogen|1.008;He|Helium|4.0026;Li|Lithium|6.94;Be|Beryllium|9.0122;B|Boron|10.81;C|Carbon|12.011;N|Nitrogen|14.007;O|Oxygen|15.999;F|Fluorine|18.998;Ne|Neon|20.180;Na|Sodium|22.990;Mg|Magnesium|24.305;Al|Aluminum|26.982;Si|Silicon|28.085;P|Phosphorus|30.974;S|Sulfur|32.06;Cl|Chlorine|35.45;Ar|Argon|39.95;K|Potassium|39.098;Ca|Calcium|40.078;Sc|Scandium|44.956;Ti|Titanium|47.867;V|Vanadium|50.942;Cr|Chromium|51.996;Mn|Manganese|54.938;Fe|Iron|55.845;Co|Cobalt|58.933;Ni|Nickel|58.693;Cu|Copper|63.546;Zn|Zinc|65.38;Ga|Gallium|69.723;Ge|Germanium|72.630;As|Arsenic|74.922;Se|Selenium|78.971;Br|Bromine|79.904;Kr|Krypton|83.798;Rb|Rubidium|85.468;Sr|Strontium|87.62;Y|Yttrium|88.906;Zr|Zirconium|91.224;Nb|Niobium|92.906;Mo|Molybdenum|95.95;Tc|Technetium|97;Ru|Ruthenium|101.07;Rh|Rhodium|102.91;Pd|Palladium|106.42;Ag|Silver|107.87;Cd|Cadmium|112.41;In|Indium|114.82;Sn|Tin|118.71;Sb|Antimony|121.76;Te|Tellurium|127.60;I|Iodine|126.90;Xe|Xenon|131.29;Cs|Cesium|132.91;Ba|Barium|137.33;La|Lanthanum|138.91;Ce|Cerium|140.12;Pr|Praseodymium|140.91;Nd|Neodymium|144.24;Pm|Promethium|145;Sm|Samarium|150.36;Eu|Europium|151.96;Gd|Gadolinium|157.25;Tb|Terbium|158.93;Dy|Dysprosium|162.50;Ho|Holmium|164.93;Er|Erbium|167.26;Tm|Thulium|168.93;Yb|Ytterbium|173.05;Lu|Lutetium|174.97;Hf|Hafnium|178.49;Ta|Tantalum|180.95;W|Tungsten|183.84;Re|Rhenium|186.21;Os|Osmium|190.23;Ir|Iridium|192.22;Pt|Platinum|195.08;Au|Gold|196.97;Hg|Mercury|200.59;Tl|Thallium|204.38;Pb|Lead|207.2;Bi|Bismuth|208.98;Po|Polonium|209;At|Astatine|210;Rn|Radon|222;Fr|Francium|223;Ra|Radium|226;Ac|Actinium|227;Th|Thorium|232.04;Pa|Protactinium|231.04;U|Uranium|238.03;Np|Neptunium|237;Pu|Plutonium|244;Am|Americium|243;Cm|Curium|247;Bk|Berkelium|247;Cf|Californium|251;Es|Einsteinium|252;Fm|Fermium|257;Md|Mendelevium|258;No|Nobelium|259;Lr|Lawrencium|262;Rf|Rutherfordium|267;Db|Dubnium|268;Sg|Seaborgium|269;Bh|Bohrium|270;Hs|Hassium|269;Mt|Meitnerium|277;Ds|Darmstadtium|281;Rg|Roentgenium|282;Cn|Copernicium|285;Nh|Nihonium|286;Fl|Flerovium|290;Mc|Moscovium|290;Lv|Livermorium|293;Ts|Tennessine|294;Og|Oganesson|294",mM={1:[1,3,11,19,37,55,87],2:[4,12,20,38,56,88],3:[21,39,57,89],4:[22,40,72,104],5:[23,41,73,105],6:[24,42,74,106],7:[25,43,75,107],8:[26,44,76,108],9:[27,45,77,109],10:[28,46,78,110],11:[29,47,79,111],12:[30,48,80,112],13:[5,13,31,49,81,113],14:[6,14,32,50,82,114],15:[7,15,33,51,83,115],16:[8,16,34,52,84,116],17:[9,17,35,53,85,117],18:[2,10,18,36,54,86,118]},gM=new Set([2,10,18,36,54,86,118]),_M=new Set([3,11,19,37,55,87]),vM=new Set([4,12,20,38,56,88]),xM=new Set([9,17,35,53,85,117]),yM=new Set([5,14,32,33,51,52]),SM=new Set([1,6,7,8,15,16,34]),EM=new Set([57,58,59,60,61,62,63,64,65,66,67,68,69,70,71]),MM=new Set([89,90,91,92,93,94,95,96,97,98,99,100,101,102,103]),Em=[[1,"s",2],[2,"s",2],[2,"p",6],[3,"s",2],[3,"p",6],[4,"s",2],[3,"d",10],[4,"p",6],[5,"s",2],[4,"d",10],[5,"p",6],[6,"s",2],[4,"f",14],[5,"d",10],[6,"p",6],[7,"s",2],[5,"f",14],[6,"d",10],[7,"p",6]],TM={24:[[4,"s",-1],[3,"d",1]],29:[[4,"s",-1],[3,"d",1]],41:[[5,"s",-1],[4,"d",1]],42:[[5,"s",-1],[4,"d",1]],44:[[5,"s",-1],[4,"d",1]],45:[[5,"s",-1],[4,"d",1]],46:[[5,"s",-2],[4,"d",2]],47:[[5,"s",-1],[4,"d",1]],57:[[4,"f",-1],[5,"d",1]],58:[[4,"f",-1],[5,"d",1]],64:[[4,"f",-1],[5,"d",1]],78:[[6,"s",-1],[5,"d",1]],79:[[6,"s",-1],[5,"d",1]],89:[[5,"f",-1],[6,"d",1]],90:[[5,"f",-2],[6,"d",2]],91:[[5,"f",-1],[6,"d",1]],92:[[5,"f",-1],[6,"d",1]],93:[[5,"f",-1],[6,"d",1]],96:[[5,"f",-1],[6,"d",1]],103:[[6,"d",-1],[7,"p",1]]};function Uf(s){let e=s;const n=new Map;for(const[r,a,u]of Em){if(!e)break;const d=Math.min(e,u);d&&n.set(`${r}${a}`,d),e-=d}for(const[r,a,u]of TM[s]||[]){const d=`${r}${a}`;n.set(d,(n.get(d)||0)+u)}return Em.map(([r,a])=>[r,a,n.get(`${r}${a}`)||0]).filter(([,,r])=>r>0)}const AM={2:"He",10:"Ne",18:"Ar",36:"Kr",54:"Xe",86:"Rn",118:"Og"};function wM(s){const e=Uf(s);let n=0,r="";for(const u of[86,54,36,18,10,2])if(s>u){n=u,r=AM[u];break}if(!n)return e.map(([u,d,f])=>`${u}${d}${f}`).join(" ");const a=Uf(n).length;return`[${r}] ${e.slice(a).map(([u,d,f])=>`${u}${d}${f}`).join(" ")}`}function CM(s){if(s>=58&&s<=70||s>=90&&s<=102)return null;for(const[e,n]of Object.entries(mM))if(n.includes(s))return Number(e);return null}function RM(s){return s<=2?1:s<=10?2:s<=18?3:s<=36?4:s<=54?5:s<=86?6:7}function PM(s){return gM.has(s)?"Noble gas":_M.has(s)?"Alkali metal":vM.has(s)?"Alkaline earth":xM.has(s)?"Halogen":EM.has(s)?"Lanthanide":MM.has(s)?"Actinide":yM.has(s)?"Metalloid":SM.has(s)?"Nonmetal":[13,31,49,50,81,82,83,84,113,114,115,116].includes(s)?"Post-transition metal":"Transition metal"}const bM={1:13.5984,2:24.5874,3:5.3917,4:9.3227,5:8.298,6:11.2603,7:14.5341,8:13.6181,9:17.4228,10:21.5645,11:5.1391,12:7.6462,13:5.9858,14:8.1517,15:10.4867,16:10.36,17:12.9676,18:15.7596,19:4.3407,20:6.1132,21:6.5615,22:6.8281,23:6.7462,24:6.7665,25:7.434,26:7.9025,27:7.881,28:7.6399,29:7.7264,30:9.3942,31:5.9993,32:7.8994,33:9.7886,34:9.7524,35:11.8138,36:13.9996,37:4.1771,38:5.6949,39:6.2173,40:6.6341,41:6.7589,42:7.0924,43:7.1194,44:7.3605,45:7.4589,46:8.3368,47:7.5762,48:8.9938,49:5.7864,50:7.3439,51:8.6084,52:9.0098,53:10.4512,54:12.1298,55:3.8939,56:5.2117,57:5.5769,58:5.5386,59:5.4702,60:5.525,61:5.5819,62:5.6437,63:5.6704,64:6.1498,65:5.8638,66:5.9391,67:6.0215,68:6.1077,69:6.1844,70:6.2542,71:5.4259,72:6.8251,73:7.5496,74:7.864,75:7.8335,76:8.4382,77:8.967,78:8.9588,79:9.2256,80:10.4375,81:6.1083,82:7.4167,83:7.2855,84:8.4181,85:9.3175,86:10.7485,87:4.0727,88:5.2784,89:5.3802,90:6.3067,91:5.89,92:6.1941,93:6.2655,94:6.0258,95:5.9738,96:5.9922,97:6.1979,98:6.2819,99:6.3684,100:6.5,101:6.58,102:6.6262,103:4.96,104:6.02,105:6.8,106:7.8,107:7.7,108:7.6},DM=new Set([105,106,107,108]),LM=pM.split(";").map((s,e)=>{const[n,r,a]=s.split("|"),u=e+1,f=Uf(u).reduce((p,[m,,_])=>(p[m]=(p[m]||0)+_,p),{});return{z:u,symbol:n,name:r,mass:Number(a),group:CM(u),period:RM(u),category:PM(u),electrons:u,shells:f,configuration:wM(u),ionizationEnergy:bM[u]??null,ionizationEnergyEstimated:DM.has(u)}}),NM=`
  varying vec3 vLocalPosition;
  void main() {
    vLocalPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,UM=`
  precision highp float;
  precision highp sampler3D;
  uniform sampler3D uDensity;
  uniform sampler2D uRocket;
  uniform float uGamma;
  varying vec3 vLocalPosition;

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

    const int STEPS = 128;
    float stepLength = (rayEnd - rayStart) / float(STEPS);
    vec3 accumulatedColor = vec3(0.0);
    float accumulatedAlpha = 0.0;
    for (int step = 0; step < STEPS; step++) {
      float distanceAlongRay = rayStart + (float(step) + 0.5) * stepLength;
      if (distanceAlongRay >= rayEnd || accumulatedAlpha > 0.985) break;
      vec3 point = rayOrigin + rayDirection * distanceAlongRay;
      vec3 coordinate = point * 0.5 + 0.5;
      float density = texture(uDensity, coordinate).r;
      float displayedDensity = pow(clamp(density, 0.0, 1.0), uGamma);
      if (displayedDensity <= 0.0001) continue;
      float sampleAlpha = 1.0 - exp(-displayedDensity * 18.0 * stepLength);
      vec3 sampleColor = rocketColor(displayedDensity);
      accumulatedColor += (1.0 - accumulatedAlpha) * sampleColor * sampleAlpha;
      accumulatedAlpha += (1.0 - accumulatedAlpha) * sampleAlpha;
    }

    if (accumulatedAlpha <= 0.001) discard;
    gl_FragColor = vec4(accumulatedColor / accumulatedAlpha, accumulatedAlpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Mm={iso:[2.7,-3.3,2.6],xy:[0,0,4.2],xz:[0,-4.2,0],yz:[4.2,0,0]};function IM(s){const e=new zm(s.density,s.size,s.size,s.size);return e.format=zf,e.type=qs,e.internalFormat="R16",e.minFilter=ei,e.magFilter=ei,e.wrapS=Jn,e.wrapT=Jn,e.wrapR=Jn,e.unpackAlignment=1,e.generateMipmaps=!1,e.needsUpdate=!0,e}function FM(){const s=new Uint8Array(wl.length*4);wl.forEach((n,r)=>{const a=r*4;s[a]=Number.parseInt(n.slice(1,3),16),s[a+1]=Number.parseInt(n.slice(3,5),16),s[a+2]=Number.parseInt(n.slice(5,7),16),s[a+3]=255});const e=new u0(s,wl.length,1,ti,Si);return e.minFilter=An,e.magFilter=An,e.wrapS=Jn,e.wrapT=Jn,e.generateMipmaps=!1,e.needsUpdate=!0,e}function OM(s){return new Xi({uniforms:{uDensity:{value:null},uRocket:{value:s},uGamma:{value:1}},vertexShader:NM,fragmentShader:UM,transparent:!0,depthWrite:!1,side:Gi,toneMapped:!1})}function BM({volume:s,exposure:e,view:n,resetKey:r,onError:a}){const u=un.useRef(null),d=un.useRef(null),f=un.useRef(null);return un.useEffect(()=>{const p=d.current,m=u.current;if(!p||!m)return;let _,v,x,S,A,w,y,g=!0;try{_=new JE({canvas:p,antialias:!0,alpha:!1,powerPreference:"high-performance"}),_.outputColorSpace=Gn,_.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),_.setClearColor("#03051a"),_.toneMapping=Hi,v=new Qn(36,1,.05,100),v.up.set(0,0,1),v.position.set(...Mm.iso),v.lookAt(0,0,0),x=new l0,S=new Js(2,2,2),A=OM(FM()),x.add(new xi(S,A)),w=new tM(v,_.domElement),w.enabled=!0,w.enableRotate=!0,w.enableZoom=!0,w.enablePan=!0,w.enableDamping=!0,w.dampingFactor=.09,w.screenSpacePanning=!0,w.minDistance=2.2,w.maxDistance=12,w.target.set(0,0,0);const I=()=>{!g||y||(y=window.requestAnimationFrame(()=>{y=0;const P=w.update();_.render(x,v),P&&I()}))};w.addEventListener("change",I);const N=new ResizeObserver(P=>{const{width:X,height:D}=P[0].contentRect;X<=0||D<=0||(_.setSize(X,D,!1),v.aspect=X/D,v.updateProjectionMatrix(),I())});N.observe(m),f.current={camera:v,controls:w,geometry:S,material:A,renderer:_,observer:N,invalidate:I},I()}catch(I){a(I instanceof Error?I.message:String(I))}return()=>{var I,N,P,X,D,F,j,R,C;g=!1,y&&window.cancelAnimationFrame(y),(I=f.current)==null||I.observer.disconnect(),(N=f.current)==null||N.controls.removeEventListener("change",f.current.invalidate),(P=f.current)==null||P.controls.dispose(),(D=(X=f.current)==null?void 0:X.material.uniforms.uDensity.value)==null||D.dispose(),(F=f.current)==null||F.geometry.dispose(),(j=f.current)==null||j.material.uniforms.uRocket.value.dispose(),(R=f.current)==null||R.material.dispose(),(C=f.current)==null||C.renderer.dispose(),f.current=null}},[a]),un.useEffect(()=>{const p=f.current;if(!p||!s)return;const m=IM(s),_=p.material.uniforms.uDensity.value;return p.material.uniforms.uDensity.value=m,_==null||_.dispose(),p.invalidate(),()=>{p.material.uniforms.uDensity.value===m&&(p.material.uniforms.uDensity.value=null,m.dispose())}},[s]),un.useEffect(()=>{const p=f.current;p&&(p.material.uniforms.uGamma.value=1/(1+e),p.invalidate())},[e]),un.useEffect(()=>{const p=f.current;p&&(p.camera.position.set(...Mm[n]),p.camera.up.set(0,0,1),p.camera.lookAt(0,0,0),p.camera.updateProjectionMatrix(),p.controls.target.set(0,0,0),p.controls.update(),p.invalidate())},[n,r]),Ee.jsx("div",{className:"volume-canvas",ref:u,children:Ee.jsx("canvas",{ref:d,"aria-label":"Interactive 3D probability-density volume"})})}function kM(){return[0,42,85,128,170,213,255].map(s=>wl[s])}function zM({n:s,l:e,m:n,nuclearCharge:r,onQuantumNumbersChange:a,exposure:u,onExposureChange:d}){const[f,p]=un.useState(null),[m,_]=un.useState(""),[v,x]=un.useState(""),[S,A]=un.useState("iso"),[w,y]=un.useState(0),[g]=un.useState(kM),I=2*(3*s*s-e*(e+1))/(2*r);un.useEffect(()=>{p(null),_("");const D=new Worker(new URL("/QuantumOrbital/assets/orbitalVolume.worker-D8N6fDDD.js",import.meta.url),{type:"module"});return D.onmessage=F=>{if(F.data.error){_(F.data.error);return}p(F.data)},D.onerror=F=>_(F.message||"Could not calculate the density volume."),D.postMessage({n:s,l:e,m:n,nuclearCharge:r,size:s<=3?72:s<=5?88:96,extent:I}),()=>D.terminate()},[s,e,n,r,I]);const N=Array.from({length:s},(D,F)=>F),P=Array.from({length:e*2+1},(D,F)=>F-e),X=1/(1+u);return Ee.jsxs("section",{className:"orbital-workspace","aria-label":"Interactive hydrogenic probability density",children:[Ee.jsxs("div",{className:"orbital-stage",children:[Ee.jsxs("div",{className:"stage-toolbar",children:[Ee.jsxs("div",{className:"stage-readout",children:[Ee.jsx("span",{className:"stage-status"}),Ee.jsx("span",{children:"3D PROBABILITY DENSITY"}),Ee.jsx("b",{children:v?"RENDERER ERROR":f?"FIELD READY":m?"FIELD ERROR":"SAMPLING FIELD"})]}),Ee.jsxs("div",{className:"view-controls","aria-label":"Standard camera views",children:[["iso","xy","xz","yz"].map(D=>Ee.jsx("button",{type:"button",className:S===D?"selected":"",onClick:()=>A(D),"aria-pressed":S===D,title:`${D.toUpperCase()} camera view`,children:D.toUpperCase()},D)),Ee.jsx("button",{type:"button",onClick:()=>{A("iso"),y(D=>D+1)},title:"Reset camera to the initial view",children:"RESET"})]})]}),Ee.jsxs("div",{className:"volume-stage",children:[Ee.jsx(BM,{volume:f,exposure:u,view:S,resetKey:w,onError:x}),(!f||m||v)&&Ee.jsx("div",{className:`volume-message ${m||v?"has-error":""}`,role:m||v?"alert":"status",children:v||m||"Calculating normalized wavefunction volume…"}),Ee.jsxs("div",{className:"volume-domain",children:["x, y, z ∈ [−",I.toFixed(2),", ",I.toFixed(2),"] a₀"]}),Ee.jsxs("div",{className:"volume-help",children:["DRAG ROTATE ",Ee.jsx("span",{children:"·"})," RIGHT DRAG PAN ",Ee.jsx("span",{children:"·"})," SCROLL ZOOM"]})]}),Ee.jsxs("div",{className:"density-legend","aria-label":"Seaborn Rocket density colour scale",children:[Ee.jsx("span",{className:"legend-label",children:"LOWER DENSITY"}),Ee.jsx("div",{className:"rocket-ramp",children:g.map((D,F)=>Ee.jsx("i",{style:{backgroundColor:D}},`${D}-${F}`))}),Ee.jsx("span",{className:"legend-label",children:"HIGHER DENSITY"}),Ee.jsx("span",{className:"legend-name",children:"ROCKET · |ψ|²"})]})]}),Ee.jsxs("aside",{className:"orbital-controls",children:[Ee.jsxs("div",{className:"controls-header",children:[Ee.jsx("div",{className:"eyebrow",children:"HYDROGENIC EIGENSTATE"}),Ee.jsx("h1",{children:"Orbital field"})]}),Ee.jsxs("label",{className:"field-control",children:[Ee.jsx("span",{children:"Nuclear charge, Z"}),Ee.jsx("select",{value:r,onChange:D=>a({nuclearCharge:Number(D.target.value)}),children:LM.map(({z:D,symbol:F})=>{const j=D===1?"":`${D-1}+`;return Ee.jsxs("option",{value:D,children:[F,j?` ${j}`:""," · Z = ",D]},D)})})]}),Ee.jsxs("label",{className:"field-control",children:[Ee.jsx("span",{children:"Principal quantum number, n"}),Ee.jsx("select",{value:s,onChange:D=>a({n:Number(D.target.value)}),children:Array.from({length:8},(D,F)=>F+1).map(D=>Ee.jsx("option",{value:D,children:D},D))})]}),Ee.jsxs("label",{className:"field-control",children:[Ee.jsx("span",{children:"Angular momentum, ℓ"}),Ee.jsx("select",{value:e,onChange:D=>a({l:Number(D.target.value)}),children:N.map(D=>Ee.jsxs("option",{value:D,children:[D," · ",["s","p","d","f","g","h","i","k"][D]]},D))})]}),Ee.jsxs("label",{className:"field-control",children:[Ee.jsx("span",{children:"Magnetic quantum number, m"}),Ee.jsx("select",{value:n,onChange:D=>a({m:Number(D.target.value)}),children:P.map(D=>Ee.jsx("option",{value:D,children:D>0?`+${D}`:D},D))})]}),Ee.jsx("div",{className:"control-rule"}),Ee.jsxs("label",{className:"range-label",htmlFor:"exposure",children:[Ee.jsx("span",{children:"Exposure"}),Ee.jsxs("strong",{children:[u.toFixed(1),"×"]})]}),Ee.jsx("input",{id:"exposure",type:"range",min:"0",max:"2",step:"0.1",value:u,onChange:D=>d(Number(D.target.value))}),Ee.jsxs("div",{className:"range-ends",children:[Ee.jsx("span",{children:"0 · linear"}),Ee.jsx("span",{children:"2"})]}),Ee.jsxs("div",{className:"state-equation",children:[Ee.jsx("div",{className:"eyebrow",children:"ANALYTICAL STATE"}),Ee.jsxs("div",{className:"equation",children:["ψ",Ee.jsx("sub",{children:"nℓm"})," = R",Ee.jsx("sub",{children:"nℓ"})," Y",Ee.jsx("sub",{children:"ℓ"}),Ee.jsx("sup",{children:"m"})]}),Ee.jsxs("div",{className:"equation",children:["E",Ee.jsx("sub",{children:"n"})," = −13.6057 Z²/n² eV"]}),Ee.jsxs("div",{className:"state-meta",children:["Z ",r," · ",s,["s","p","d","f","g","h","i","k"][e]," · m ",n>0?`+${n}`:n]})]}),Ee.jsxs("div",{className:"normalization-note",children:[Ee.jsx("span",{className:"eyebrow",children:"DISPLAY NORMALIZATION"}),Ee.jsxs("span",{children:["v",Ee.jsx("sub",{children:"min"})," = 0 · v",Ee.jsx("sub",{children:"max"})," = q",Ee.jsx("sub",{children:"99.9%"})]}),Ee.jsxs("span",{children:["v",Ee.jsx("sub",{children:"max"})," = ",f?f.vmax.toExponential(2):"—"," a₀⁻³ · grid probability ",f?`${(f.capturedProbability*100).toFixed(2)}%`:"—"]}),Ee.jsxs("span",{children:["PowerNorm γ = ",X.toFixed(3)," · grid ",(f==null?void 0:f.size)||(s<=3?72:s<=5?88:96),"³"]})]}),Ee.jsx("p",{className:"model-note",children:"Exact non-relativistic, one-electron Coulomb eigenstate with an infinite-mass nucleus. For Z > 1 this represents a hydrogen-like ion, not a neutral multi-electron atom. The complex-state densities for +m and −m are identical."})]})]})}function HM(){const[s,e]=un.useState({n:3,l:2,m:1,nuclearCharge:1}),[n,r]=un.useState(0);function a(u){e(d=>{const f={...d,...u};return"n"in u&&(f.l=Math.min(d.l,f.n-1),f.m=Math.max(-f.l,Math.min(f.l,d.m))),"l"in u&&(f.m=Math.max(-f.l,Math.min(f.l,d.m))),f})}return Ee.jsxs("main",{className:"app-shell",children:[Ee.jsxs("header",{className:"app-header",children:[Ee.jsxs("div",{className:"brand",children:[Ee.jsx("img",{src:"/QuantumOrbital/quantum-orbital-mark.svg",alt:""}),Ee.jsxs("div",{children:[Ee.jsx("strong",{children:"QuantumOrbital"}),Ee.jsx("span",{children:"HYDROGENIC ORBITAL EXPLORER"})]})]}),Ee.jsxs("div",{className:"header-model",children:["ANALYTICAL COULOMB EIGENSTATES ",Ee.jsx("span",{children:"·"})," ONE ELECTRON"]}),Ee.jsxs("div",{className:"header-state",children:[s.n,["s","p","d","f","g","h","i","k"][s.l],s.m>0?` +${s.m}`:` ${s.m}`]})]}),Ee.jsx(zM,{...s,onQuantumNumbersChange:a,exposure:n,onExposureChange:r}),Ee.jsxs("footer",{className:"app-footer",children:[Ee.jsxs("span",{children:["STATIONARY-STATE DENSITY ",Ee.jsxs("b",{children:["|ψ",Ee.jsx("sub",{children:"nℓm"}),"|²"]})]}),Ee.jsx("span",{children:"Normalized hydrogenic solutions · infinite nuclear mass"})]})]})}j_.createRoot(document.getElementById("root")).render(Ee.jsx(z_.StrictMode,{children:Ee.jsx(HM,{})}));
