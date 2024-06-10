const whitecolor = '#ffffff';
const colorlessColor = '#colorless';
const nopptColor = '#noppt';
const nopptName = 'noppt';
const defBlack = '#000000';
//const ppt = '#
//#ffb6c1
const colors = {
  'rosado': {
    shades: ['#ffb6c1', '#ffc0cb'],
    display: 'rosado',
    default: '#ffc0cb',
  },
  //'rosa_palido': 
  //'rosa_palido': ['#ffb6c1', '#ffc0cb'],
  'salmon': {
    shades: ['#ffb6c1', '#ff8672'],
    display: 'salmón',
    default: '#ffb6c1',
  },
  'rojo_rosa': {
    shades: ['#ff8672', '#ffc0cb', '#dc143c'],
    display: 'rojo-rosa',
    default: '#dc143c',
  },
  'rojo': {
    shades: ['#ff0000'],
    display: 'rojo',
    default: '#ff0000',
  },
  'rojo_sangre': {
    shades: ['#ff0000', '#8b0000'],
    display: 'rojo sangre',
    default: '#8b0000',
  },
  'pardo': {
    shades: ['#8b0000', '#a0522d', '#523c22'],
    display: 'pardo',
    default: '#8b0000',
  },
  'marron': {
    shades: ['#5c4033', '#523c22'],
    display: 'marrón',
    default: '#523c22',
  },
  'negro': {
    shades: ['#523c22', '#060200'],
    display: 'negro',
    default: '#060200',
  },
  'malva': {
    shades: ['#993366'],
    display: 'malva',
    default: '#993366',
  },
  'azul': {
    shades: ['#0000ff'],
    display: 'azul',
    default: '#0000ff',
  },
  'celeste': {
    shades: ['#0693e3'],
    display: 'celeste',
    default: '#0693e3',
  },
  'turquesa': {
    shades: ['#40e0d0'],
    display: 'turquesa',
    default: '#40e0d0',
  },
  'verde': {
    shades: ['#8a9a5b', '#008000', '#454b1b'],
    display: 'verde',
    default: '#008000',
  },
  //'gris_verde': 
  'gris_verde': {
    shades: ['#8a9a5b', '#008000'],
    display: 'gris verde',
    default: '#008000',
  },
  'amarillo': {
    shades: ['#fcdc00'],
    display: 'amarillo',
    default: '#fcdc00',
  },
  'naranja': {
    shades: ['#ffa500'],
    display: 'naranja',
    default: '#ffa500',
  },
  'blanco': {
    shades: [whitecolor],
    display: 'blanco',
    default: defBlack,
  },
  'incoloro': {
    shades: [colorlessColor],
    display: 'incolora',
    default: defBlack,
  },
  'noppt': {
    shades: [nopptColor],
    display: 'sin ppt',
    default: defBlack,
  },
};

const getNamesFromColor = (color) => {
  return (color ? Object.keys(colors).reduce((a, x) => (colors[x].shades.includes(color) ? a.concat(x) : a), []) : []);
};

const doColorName = (color) => {
//  return (color.toUpperCase().replace('_', ' '));
//  console.log('doColorNames: ', color);
  return (colors[color] ? colors[color].display.toUpperCase() : '');
}

const doColorNames = (colorsArr) => {
  return colorsArr.reduce((a, x) => (a === "" ? a : a + "/") + doColorName(x), "");
};

export { colors, whitecolor, colorlessColor, nopptColor, nopptName, getNamesFromColor, doColorName, doColorNames };
