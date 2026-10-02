import { Search } from 'lucide-react';

export default function PeriodicTable({elements,selected,onSelect,query,setQuery}){
 const filtered=query.trim().toLowerCase();
 return <section className="periodic-panel panel">
  <div className="periodic-head"><div><div className="eyebrow">ELEMENT DATABASE</div><h2>Periodic table</h2></div>
   <label className="element-search"><Search size={14}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search element, symbol or Z"/></label>
  </div>
  <div className="table-grid">
   {elements.map(e=>{const match=!filtered||e.name.toLowerCase().includes(filtered)||e.symbol.toLowerCase().includes(filtered)||String(e.z)===filtered; return <button key={e.z} className={'element-cell '+(selected.z===e.z?'selected ':'')+(match?'':'dim')} style={{gridColumn:e.group,gridRow:e.period}} onClick={()=>onSelect(e)} title={e.name+' · Z='+e.z}><small>{e.z}</small><strong>{e.symbol}</strong><span>{e.name}</span></button>})}
  </div>
  <div className="fblock"><span>Lanthanides</span>{elements.slice(56,71).map(e=><button key={e.z} className={selected.z===e.z?'selected':''} onClick={()=>onSelect(e)}>{e.symbol}</button>)}</div>
  <div className="fblock"><span>Actinides</span>{elements.slice(88,103).map(e=><button key={e.z} className={selected.z===e.z?'selected':''} onClick={()=>onSelect(e)}>{e.symbol}</button>)}</div>
 </section>
}