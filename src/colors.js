const whitecolor = '#ffffff';
const colorless = '#colorless';
const noppt = '#noppt';
//const ppt = '#
//#ffb6c1
const colors = {
  'rosado': {
    shades: ['#ffb6c1', '#ffc0cb'],
    display: 'rosado',
  },
  //'rosa_palido': 
  //'rosa_palido': ['#ffb6c1', '#ffc0cb'],
  'salmon': {
    shades: ['#ffb6c1', '#ff8672'],
    display: 'salmón',
  },
  'rojo_rosa': {
    shades: ['#ff8672', '#ffc0cb', '#dc143c'],
    display: 'rojo-rosa',
  },
  'rojo': {
    shades: ['#ff0000'],
    display: 'rojo',
  },
  'rojo_sangre': {
    shades: ['#ff0000', '#8b0000'],
    display: 'rojo sangre',
  },
  'pardo': {
    shades: ['#8b0000', '#a0522d', '#523c22'],
    display: 'pardo',
  },
  'marron': {
    shades: ['#5c4033', '#523c22'],
    display: 'marrón',
  },
  'negro': {
    shades: ['#523c22', '#060200'],
    display: 'negro',
  },
  'malva': {
    shades: ['#993366'],
    display: 'malva',
  },
  'azul': {
    shades: ['#0000ff'],
    display: 'azul',
  },
  'celeste': {
    shades: ['#0693e3'],
    display: 'celeste',
  },
  'turquesa': {
    shades: ['#40e0d0'],
    display: 'turquesa',
  },
  'verde': {
    shades: ['#8a9a5b', '#008000', '#454b1b'],
    display: 'verde',
  },
  //'gris_verde': 
  'gris_verde': {
    shades: ['#8a9a5b', '#008000'],
    display: 'gris verde',
  },
  'amarillo': {
    shades: ['#fcdc00'],
    display: 'amarillo',
  },
  'naranja': {
    shades: ['#ffa500'],
    display: 'naranja',
  },
  'blanco': {
    shades: [whitecolor],
    display: 'blanco',
  },
  'incoloro': {
    shades: [colorless],
    display: 'incolora',
  },
  'noppt': {
    shades: [noppt],
    display: 'sin ppt',
  },
};

const getNamesFromColor = (color) => {
  return (color ? Object.keys(colors).reduce((a, x) => (colors[x].shades.includes(color) ? a.concat(x) : a), []) : []);
};

const doColorName = (color) => {
//  return (color.toUpperCase().replace('_', ' '));
  console.log('doColorNames: ', color);
  return (colors[color] ? colors[color].display : '');
}

const doColorNames = (colorsArr) => {
  return colorsArr.reduce((a, x) => (a === "" ? a : a + "/") + doColorName(x), "");
};

export { colors, whitecolor, colorless, noppt, getNamesFromColor, doColorName, doColorNames };
