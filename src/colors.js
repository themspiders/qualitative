const whitecolor = '#ffffff';
const colorlessColor = '#colorless';
const nopptColor = '#noppt';
const nopptName = 'noppt';
const defBlack = '#000000';
const colors = {
  'rosado': {
    shades: ['#ffb6c1', '#ffc0cb'],
    display: 'rosado',
    display2: 'rosada',
    default: '#ffc0cb',
  },
  //'rosa_palido': 
  //'rosa_palido': ['#ffb6c1', '#ffc0cb'],
  'salmon': {
    shades: ['#ffb6c1', '#ff8672'],
    display: 'salmón',
    display2: 'salmón',
    default: '#ffb6c1',
  },
  'rojo_rosa': {
    shades: ['#ff8672', '#ffc0cb', '#dc143c'],
    display: 'rojo/rosa',
    display2: 'rojo/rosa',
    default: '#dc143c',
  },
  'rojo': {
    shades: ['#ff0000'],
    display: 'rojo',
    display2: 'roja',
    default: '#ff0000',
  },
  'rojo_sangre': {
    shades: ['#ff0000', '#8b0000'],
    display: 'rojo sangre',
    display2: 'rojo sangre',
    default: '#8b0000',
  },
  'pardo': {
    shades: ['#8b0000', '#a0522d', '#955f20', '#523c22'],
    display: 'pardo',
    display2: 'pardo',
    default: '#955f20',
  },
  'marron': {
    shades: ['#5c4033', '#523c22'],
    display: 'marrón',
    display2: 'marrón',
    default: '#523c22',
  },
  'negro': {
    shades: ['#523c22', '#060200'],
    display: 'negro',
    display2: 'negro',
    default: '#060200',
  },
  'malva': {
    shades: ['#993366'],
    display: 'malva',
    display2: 'malva',
    default: '#993366',
  },
  'azul': {
    shades: ['#0000ff'],
    display: 'azul',
    display2: 'azul',
    default: '#0000ff',
  },
  'celeste': {
    shades: ['#0693e3'],
    display: 'celeste',
    display2: 'celeste',
    default: '#0693e3',
  },
  'turquesa': {
    shades: ['#40e0d0'],
    display: 'turquesa',
    display2: 'turquesa',
    default: '#40e0d0',
  },
  'verde': {
    shades: ['#8a9a5b', '#008000', '#454b1b'],
    display: 'verde',
    display2: 'verde',
    default: '#008000',
  },
  //'gris_verde': 
  'gris_verde': {
    shades: ['#8a9a5b', '#008000', '#82a67d'],
    display: 'gris verde',
    display2: 'gris verde',
    default: '#82a67d',
  },
  'amarillo': {
    shades: ['#fcdc00'],
    display: 'amarillo',
    display2: 'amarilla',
    default: '#fcdc00',
  },
  'naranja': {
    shades: ['#ffa500'],
    display: 'naranja',
    display2: 'naranja',
    default: '#ffa500',
  },
  'blanco': {
    shades: [whitecolor],
    display: 'blanco',
    display2: 'blanca',
    default: defBlack,
  },
  'incoloro': {
    shades: [colorlessColor],
    display: 'incolora',
    display2: 'incolora',
    default: defBlack,
  },
  'noppt': {
    shades: [nopptColor],
    display: 'sin ppt',
    display2: 'sin ppt',
    default: defBlack,
  },
};

const getNamesFromColor = (color) => {
  return (color ? Object.keys(colors).reduce((a, x) => (colors[x].shades.includes(color) ? a.concat(x) : a), []) : []);
};

const doColorName = (color, display = false) => {
  return (colors[color] ? colors[color][!display ? "display" : "display2"].toUpperCase() : '');
}

const doColorNames = (colorsArr) => {
  return colorsArr.reduce((a, x) => (a === "" ? a : a + "/") + doColorName(x), "");
};

export { colors, whitecolor, colorlessColor, nopptColor, nopptName, getNamesFromColor, doColorName, doColorNames };
