import { associatedLegendre, createRadialCdf, radiusAtCdf } from '../physics/hydrogen/orbitalMath.js';

function rng(seed){let s=seed>>>0;return()=>{s=(1664525*s+1013904223)>>>0;return s/4294967296}}
const radialTables = new Map();
const angularMaxima = new Map();
function radialTable(n,l){const key=`${n}:${l}`;if(!radialTables.has(key))radialTables.set(key,createRadialCdf(n,l));return radialTables.get(key)}
function angularMaximum(l,m){const key=`${l}:${Math.abs(m)}`;if(!angularMaxima.has(key)){let max=0;for(let i=0;i<=2048;i++){const value=associatedLegendre(l,m,-1+2*i/2048);max=Math.max(max,value*value)}angularMaxima.set(key,max||1)}return angularMaxima.get(key)}
export function sampleOrbitalPositions(count=16000,n=1,l=0,m=0,seed=271828){
 const safeN=Math.max(1,Math.floor(n)),safeL=Math.min(Math.max(0,Math.floor(l)),safeN-1),safeM=Math.max(-safeL,Math.min(safeL,Math.floor(m)));
 const random=rng(seed+safeN*31+safeL*97+safeM*193), positions=new Float32Array(count*3);
 const radial=radialTable(safeN,safeL),maxAngular=angularMaximum(safeL,safeM);
 for(let i=0;i<count;i++){
  let cosTheta,phi;
  do{cosTheta=2*random()-1;phi=2*Math.PI*random();const value=associatedLegendre(safeL,safeM,cosTheta);if(random()<=value*value/maxAngular)break}while(true);
  const sinTheta=Math.sqrt(1-cosTheta*cosTheta),radius=radiusAtCdf(radial,random());
  positions[i*3]=radius*sinTheta*Math.cos(phi);
  positions[i*3+1]=radius*cosTheta;
  positions[i*3+2]=radius*sinTheta*Math.sin(phi);
 }
 return positions;
}
export function sample1sPositions(count,maxA0=12,seed=271828){return sampleOrbitalPositions(count,1,0,0,seed)}
