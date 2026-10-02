function rng(seed){let s=seed>>>0;return()=>{s=(1664525*s+1013904223)>>>0;return s/4294967296}}
function gaussian(random){let u=0,v=0;while(!u)u=random();while(!v)v=random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v)}
function angularFactor(l,m,x,y,z,r){
 if(!r)return 1;
 const nx=x/r,ny=y/r,nz=z/r;
 if(l===0)return 1;
 if(l===1)return m===0?nz:Math.sqrt(nx*nx+ny*ny);
 if(l===2){if(m===0)return Math.abs(3*nz*nz-1);if(Math.abs(m)===1)return Math.abs(nz*Math.sqrt(nx*nx+ny*ny));return Math.abs(nx*nx-ny*ny)}
 return Math.abs(nz*(5*nz*nz-3));
}
export function sampleOrbitalPositions(count=16000,n=1,l=0,m=0,seed=271828){
 const random=rng(seed+n*31+l*97+m*193), positions=new Float32Array(count*3);
 const scale=Math.max(0.55,n*n*0.72);
 for(let i=0;i<count;i++){
  let x,y,z,r,weight,tries=0;
  do{
   x=gaussian(random);y=gaussian(random);z=gaussian(random);r=Math.sqrt(x*x+y*y+z*z);
   const radial=Math.exp(-r/(scale*1.35))*Math.pow(r/(scale+0.001),Math.max(0,l));
   const angular=angularFactor(l,m,x,y,z,r);
   weight=Math.min(1,radial*angular);
   tries++;
  }while(random()>Math.max(0.08,weight) && tries<20);
  const jitter=0.55+random()*0.9;
  positions[i*3]=x*scale*jitter;
  positions[i*3+1]=y*scale*jitter;
  positions[i*3+2]=z*scale*jitter;
 }
 return positions;
}
export function sample1sPositions(count,maxA0=12,seed=271828){return sampleOrbitalPositions(count,1,0,0,seed)}
