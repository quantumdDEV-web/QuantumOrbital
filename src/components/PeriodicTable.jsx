import { Search } from 'lucide-react';

export default function PeriodicTable({elements,selected,onSelect,query,setQuery}){
 const filtered=query.trim().toLowerCase();
 const matches=e=>!filtered||e.name.toLowerCase().includes(filtered)||e.symbol.toLowerCase().includes(filtered)||String(e.z)===filtered;
 return <section className="periodic-panel panel">
  <div className="periodic-head"><div><div className="eyebrow">ELEMENT DATABASE</div><h2>Periodic table <small>118 elements</small></h2></div>
   <label className="element-search"><Search size={14}/><input aria-label="Search the 118 elements" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search element, symbol or Z"/></label>
  </div>
  <div className="table-grid">
   {elements.filter(e=>!((e.z>=57&&e.z<=71)||(e.z>=89&&e.z<=103))).map(e=><button key={e.z} className={'element-cell '+(selected.z===e.z?'selected ':'')+(matches(e)?'':'dim')} style={{gridColumn:e.group,gridRow:e.period}} onClick={()=>onSelect(e)} title={e.name+' · Z='+e.z} aria-pressed={selected.z===e.z}><small>{e.z}</small><strong>{e.symbol}</strong><span>{e.name}</span></button>)}
   <div className="element-placeholder" style={{gridColumn:3,gridRow:6}}>57–71<br/><span>Lanthanides</span></div>
   <div className="element-placeholder" style={{gridColumn:3,gridRow:7}}>89–103<br/><span>Actinides</span></div>
  </div>
  <div className="fblock"><span>Lanthanides</span>{elements.slice(56,71).map(e=><button key={e.z} className={`${selected.z===e.z?'selected':''} ${matches(e)?'':'dim'}`} aria-label={`${e.name}, atomic number ${e.z}`} aria-pressed={selected.z===e.z} title={`${e.name} · Z=${e.z}`} onClick={()=>onSelect(e)}>{e.symbol}</button>)}</div>
  <div className="fblock"><span>Actinides</span>{elements.slice(88,103).map(e=><button key={e.z} className={`${selected.z===e.z?'selected':''} ${matches(e)?'':'dim'}`} aria-label={`${e.name}, atomic number ${e.z}`} aria-pressed={selected.z===e.z} title={`${e.name} · Z=${e.z}`} onClick={()=>onSelect(e)}>{e.symbol}</button>)}</div>
 </section>
}
