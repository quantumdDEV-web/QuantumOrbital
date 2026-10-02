// Standard weights and longest-lived-isotope mass numbers follow NIST's 2024 table.
const RAW_ELEMENTS = 'H|Hydrogen|1.008;He|Helium|4.0026;Li|Lithium|6.94;Be|Beryllium|9.0122;B|Boron|10.81;C|Carbon|12.011;N|Nitrogen|14.007;O|Oxygen|15.999;F|Fluorine|18.998;Ne|Neon|20.180;Na|Sodium|22.990;Mg|Magnesium|24.305;Al|Aluminum|26.982;Si|Silicon|28.085;P|Phosphorus|30.974;S|Sulfur|32.06;Cl|Chlorine|35.45;Ar|Argon|39.95;K|Potassium|39.098;Ca|Calcium|40.078;Sc|Scandium|44.956;Ti|Titanium|47.867;V|Vanadium|50.942;Cr|Chromium|51.996;Mn|Manganese|54.938;Fe|Iron|55.845;Co|Cobalt|58.933;Ni|Nickel|58.693;Cu|Copper|63.546;Zn|Zinc|65.38;Ga|Gallium|69.723;Ge|Germanium|72.630;As|Arsenic|74.922;Se|Selenium|78.971;Br|Bromine|79.904;Kr|Krypton|83.798;Rb|Rubidium|85.468;Sr|Strontium|87.62;Y|Yttrium|88.906;Zr|Zirconium|91.224;Nb|Niobium|92.906;Mo|Molybdenum|95.95;Tc|Technetium|97;Ru|Ruthenium|101.07;Rh|Rhodium|102.91;Pd|Palladium|106.42;Ag|Silver|107.87;Cd|Cadmium|112.41;In|Indium|114.82;Sn|Tin|118.71;Sb|Antimony|121.76;Te|Tellurium|127.60;I|Iodine|126.90;Xe|Xenon|131.29;Cs|Cesium|132.91;Ba|Barium|137.33;La|Lanthanum|138.91;Ce|Cerium|140.12;Pr|Praseodymium|140.91;Nd|Neodymium|144.24;Pm|Promethium|145;Sm|Samarium|150.36;Eu|Europium|151.96;Gd|Gadolinium|157.25;Tb|Terbium|158.93;Dy|Dysprosium|162.50;Ho|Holmium|164.93;Er|Erbium|167.26;Tm|Thulium|168.93;Yb|Ytterbium|173.05;Lu|Lutetium|174.97;Hf|Hafnium|178.49;Ta|Tantalum|180.95;W|Tungsten|183.84;Re|Rhenium|186.21;Os|Osmium|190.23;Ir|Iridium|192.22;Pt|Platinum|195.08;Au|Gold|196.97;Hg|Mercury|200.59;Tl|Thallium|204.38;Pb|Lead|207.2;Bi|Bismuth|208.98;Po|Polonium|209;At|Astatine|210;Rn|Radon|222;Fr|Francium|223;Ra|Radium|226;Ac|Actinium|227;Th|Thorium|232.04;Pa|Protactinium|231.04;U|Uranium|238.03;Np|Neptunium|237;Pu|Plutonium|244;Am|Americium|243;Cm|Curium|247;Bk|Berkelium|247;Cf|Californium|251;Es|Einsteinium|252;Fm|Fermium|257;Md|Mendelevium|258;No|Nobelium|259;Lr|Lawrencium|262;Rf|Rutherfordium|267;Db|Dubnium|268;Sg|Seaborgium|269;Bh|Bohrium|270;Hs|Hassium|269;Mt|Meitnerium|277;Ds|Darmstadtium|281;Rg|Roentgenium|282;Cn|Copernicium|285;Nh|Nihonium|286;Fl|Flerovium|290;Mc|Moscovium|290;Lv|Livermorium|293;Ts|Tennessine|294;Og|Oganesson|294';

export const ELEMENT_DATA_SOURCES = {
  periodicTable: 'https://www.nist.gov/document/periodic-table-2024',
  atomicWeights: 'https://www.nist.gov/pml/atomic-weights-and-isotopic-compositions-relative-atomic-masses',
  ionizationEnergies: 'https://www.nist.gov/pml/ground-levels-and-ionization-energies-neutral-atoms'
};

const GROUPS = {
  1:[1,3,11,19,37,55,87],2:[4,12,20,38,56,88],3:[21,39,57,89],
  4:[22,40,72,104],5:[23,41,73,105],6:[24,42,74,106],7:[25,43,75,107],
  8:[26,44,76,108],9:[27,45,77,109],10:[28,46,78,110],11:[29,47,79,111],
  12:[30,48,80,112],13:[5,13,31,49,81,113],14:[6,14,32,50,82,114],
  15:[7,15,33,51,83,115],16:[8,16,34,52,84,116],17:[9,17,35,53,85,117],
  18:[2,10,18,36,54,86,118]
};
const NOBLE = new Set([2,10,18,36,54,86,118]);
const ALKALI = new Set([3,11,19,37,55,87]);
const ALKALINE = new Set([4,12,20,38,56,88]);
const HALOGEN = new Set([9,17,35,53,85,117]);
const METALLOID = new Set([5,14,32,33,51,52]);
const NONMETAL = new Set([1,6,7,8,15,16,34]);
const LANTHANIDE = new Set([57,58,59,60,61,62,63,64,65,66,67,68,69,70,71]);
const ACTINIDE = new Set([89,90,91,92,93,94,95,96,97,98,99,100,101,102,103]);

const AUFBAU = [[1,'s',2],[2,'s',2],[2,'p',6],[3,'s',2],[3,'p',6],[4,'s',2],[3,'d',10],[4,'p',6],[5,'s',2],[4,'d',10],[5,'p',6],[6,'s',2],[4,'f',14],[5,'d',10],[6,'p',6],[7,'s',2],[5,'f',14],[6,'d',10],[7,'p',6]];
// Ground-state exceptions represented as electrons moved from the Aufbau
// estimate to the observed subshell, following NIST's periodic table.
const CONFIGURATION_ADJUSTMENTS = {
  24:[[4,'s',-1],[3,'d',1]], 29:[[4,'s',-1],[3,'d',1]],
  41:[[5,'s',-1],[4,'d',1]], 42:[[5,'s',-1],[4,'d',1]],
  44:[[5,'s',-1],[4,'d',1]], 45:[[5,'s',-1],[4,'d',1]],
  46:[[5,'s',-2],[4,'d',2]], 47:[[5,'s',-1],[4,'d',1]],
  57:[[4,'f',-1],[5,'d',1]], 58:[[4,'f',-1],[5,'d',1]],
  64:[[4,'f',-1],[5,'d',1]], 78:[[6,'s',-1],[5,'d',1]],
  79:[[6,'s',-1],[5,'d',1]], 89:[[5,'f',-1],[6,'d',1]],
  90:[[5,'f',-2],[6,'d',2]], 91:[[5,'f',-1],[6,'d',1]],
  92:[[5,'f',-1],[6,'d',1]], 93:[[5,'f',-1],[6,'d',1]],
  96:[[5,'f',-1],[6,'d',1]], 103:[[6,'d',-1],[7,'p',1]]
};

function fullConfiguration(z) {
  let left=z;
  const occupancy=new Map();
  for (const [n,l,max] of AUFBAU) { if (!left) break; const e=Math.min(left,max); if(e) occupancy.set(`${n}${l}`,e); left-=e; }
  for (const [n,l,delta] of CONFIGURATION_ADJUSTMENTS[z]||[]) {
    const key=`${n}${l}`; occupancy.set(key,(occupancy.get(key)||0)+delta);
  }
  return AUFBAU.map(([n,l])=>[n,l,occupancy.get(`${n}${l}`)||0]).filter(([, ,e])=>e>0);
}
const nobleCore = {2:'He',10:'Ne',18:'Ar',36:'Kr',54:'Xe',86:'Rn',118:'Og'};
function compactConfiguration(z) {
  const full=fullConfiguration(z);
  let coreZ=0, coreName='';
  for (const nz of [86,54,36,18,10,2]) if(z>nz){coreZ=nz;coreName=nobleCore[nz];break;}
  if(!coreZ) return full.map(([n,l,e])=>`${n}${l}${e}`).join(' ');
  const coreLen=fullConfiguration(coreZ).length;
  return `[${coreName}] ${full.slice(coreLen).map(([n,l,e])=>`${n}${l}${e}`).join(' ')}`;
}
function groupOf(z){if((z>=58&&z<=70)||(z>=90&&z<=102))return null;for(const [g,zs] of Object.entries(GROUPS))if(zs.includes(z))return Number(g);return null}
function periodOf(z){if(z<=2)return 1;if(z<=10)return 2;if(z<=18)return 3;if(z<=36)return 4;if(z<=54)return 5;if(z<=86)return 6;return 7}
function categoryOf(z){
  if(NOBLE.has(z))return 'Noble gas'; if(ALKALI.has(z))return 'Alkali metal'; if(ALKALINE.has(z))return 'Alkaline earth';
  if(HALOGEN.has(z))return 'Halogen'; if(LANTHANIDE.has(z))return 'Lanthanide'; if(ACTINIDE.has(z))return 'Actinide';
  if(METALLOID.has(z))return 'Metalloid'; if(NONMETAL.has(z))return 'Nonmetal';
  if([13,31,49,50,81,82,83,84,113,114,115,116].includes(z))return 'Post-transition metal';
  return 'Transition metal';
}
const commonIE = {1:13.5984,2:24.5874,3:5.3917,4:9.3227,5:8.2980,6:11.2603,7:14.5341,8:13.6181,9:17.4228,10:21.5645,11:5.1391,12:7.6462,13:5.9858,14:8.1517,15:10.4867,16:10.36,17:12.9676,18:15.7596,19:4.3407,20:6.1132,21:6.5615,22:6.8281,23:6.7462,24:6.7665,25:7.434,26:7.9025,27:7.881,28:7.6399,29:7.7264,30:9.3942,31:5.9993,32:7.8994,33:9.7886,34:9.7524,35:11.8138,36:13.9996,37:4.1771,38:5.6949,39:6.2173,40:6.6341,41:6.7589,42:7.0924,43:7.1194,44:7.3605,45:7.4589,46:8.3368,47:7.5762,48:8.9938,49:5.7864,50:7.3439,51:8.6084,52:9.0098,53:10.4512,54:12.1298,55:3.8939,56:5.2117,57:5.5769,58:5.5386,59:5.4702,60:5.525,61:5.5819,62:5.6437,63:5.6704,64:6.1498,65:5.8638,66:5.9391,67:6.0215,68:6.1077,69:6.1844,70:6.2542,71:5.4259,72:6.8251,73:7.5496,74:7.864,75:7.8335,76:8.4382,77:8.967,78:8.9588,79:9.2256,80:10.4375,81:6.1083,82:7.4167,83:7.2855,84:8.4181,85:9.3175,86:10.7485,87:4.0727,88:5.2784,89:5.3802,90:6.3067,91:5.89,92:6.1941,93:6.2655,94:6.0258,95:5.9738,96:5.9922,97:6.1979,98:6.2819,99:6.3684,100:6.5,101:6.58,102:6.6262,103:4.96,104:6.02};

export const ELEMENT_DATA = RAW_ELEMENTS.split(';').map((row,i)=>{
  const [symbol,name,mass]=row.split('|'); const z=i+1; const cfg=fullConfiguration(z);
  const shells=cfg.reduce((a,[n,,e])=>(a[n]=(a[n]||0)+e,a),{});
  return {z,symbol,name,mass:Number(mass),group:groupOf(z),period:periodOf(z),category:categoryOf(z),electrons:z,shells,configuration:compactConfiguration(z),ionizationEnergy:commonIE[z]??null};
});
export const getElement = z => ELEMENT_DATA.find(e=>e.z===z) || ELEMENT_DATA[0];
