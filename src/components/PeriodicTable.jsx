import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';

export default function PeriodicTable({elements,selected,onSelect,query,setQuery}){
 const [colorBy,setColorBy]=useState('category');
 const filtered=query.trim().toLowerCase();
 const matches=e=>!filtered||e.name.toLowerCase().includes(filtered)||e.symbol.toLowerCase().includes(filtered)||String(e.z)===filtered;
 const energyRange=useMemo(()=>{
  const values=elements.map(e=>e.ionizationEnergy).filter(Number.isFinite);
  return {min:Math.min(...values),max:Math.max(...values)};
 },[elements]);
 const energyColor=e=>{
  if(!Number.isFinite(e.ionizationEnergy))return {backgroundColor:'#171d24',borderColor:'#303a44'};
  const t=(e.ionizationEnergy-energyRange.min)/(energyRange.max-energyRange.min||1);
  return {backgroundColor:`hsl(${205-165*t} 58% ${22+11*t}%)`,borderColor:`hsl(${205-165*t} 60% ${31+13*t}%)`};
 };
 const colorStyle=e=>colorBy==='ionization'?energyColor(e):undefined;
 const energyLabel=e=>Number.isFinite(e.ionizationEnergy)?`${e.ionizationEnergy.toFixed(2)} eV`:'No data';
 const energyDescription=e=>colorBy==='ionization'?` · 1st ionization: ${energyLabel(e)}`:'';
 const energyAria=e=>colorBy==='ionization'?`, first ionization energy ${energyLabel(e)}`:'';
 return <section className="periodic-panel panel">
  <div className="periodic-head"><div><div className="eyebrow">ELEMENT DATABASE</div><h2>Periodic table <small>118 elements</small></h2></div>
   <div className="periodic-tools"><label className="color-select"><span>Color by</span><select aria-label="Color periodic table by" value={colorBy} onChange={e=>setColorBy(e.target.value)}><option value="category">Element category</option><option value="ionization">1st ionization energy</option></select></label><label className="element-search"><Search size={14}/><input aria-label="Search the 118 elements" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search element, symbol or Z"/></label></div>
  </div>
  <div className="table-grid">
   {elements.filter(e=>!((e.z>=57&&e.z<=71)||(e.z>=89&&e.z<=103))).map(e=><button key={e.z} className={'element-cell '+(selected.z===e.z?'selected ':'')+(matches(e)?'':'dim')} style={{...colorStyle(e),gridColumn:e.group,gridRow:e.period}} onClick={()=>onSelect(e)} title={`${e.name} · Z=${e.z}${energyDescription(e)}`} aria-label={`${e.name}, atomic number ${e.z}${energyAria(e)}`} aria-pressed={selected.z===e.z}><small>{e.z}</small><strong>{e.symbol}</strong><span>{e.name}</span>{colorBy==='ionization'&&<em>{Number.isFinite(e.ionizationEnergy)?e.ionizationEnergy.toFixed(1):'—'}</em>}</button>)}
   <div className="element-placeholder" style={{gridColumn:3,gridRow:6}}>57–71<br/><span>Lanthanides</span></div>
   <div className="element-placeholder" style={{gridColumn:3,gridRow:7}}>89–103<br/><span>Actinides</span></div>
  </div>
  <div className="fblock"><span>Lanthanides</span>{elements.slice(56,71).map(e=><button key={e.z} style={colorStyle(e)} className={`${selected.z===e.z?'selected':''} ${matches(e)?'':'dim'}`} aria-label={`${e.name}, atomic number ${e.z}${energyAria(e)}`} aria-pressed={selected.z===e.z} title={`${e.name} · Z=${e.z}${energyDescription(e)}`} onClick={()=>onSelect(e)}>{e.symbol}</button>)}</div>
  <div className="fblock"><span>Actinides</span>{elements.slice(88,103).map(e=><button key={e.z} style={colorStyle(e)} className={`${selected.z===e.z?'selected':''} ${matches(e)?'':'dim'}`} aria-label={`${e.name}, atomic number ${e.z}${energyAria(e)}`} aria-pressed={selected.z===e.z} title={`${e.name} · Z=${e.z}${energyDescription(e)}`} onClick={()=>onSelect(e)}>{e.symbol}</button>)}</div>
  {colorBy==='ionization'&&<div className="energy-legend"><span>First ionization energy · eV</span><div><small>{energyRange.min.toFixed(1)}</small><i/><small>{energyRange.max.toFixed(1)}</small></div><small className="energy-coverage">Gray tiles indicate values not available in this dataset.</small></div>}
 </section>
}
