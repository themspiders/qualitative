export const initTitle = "El juego de mesa";

export const initText1 = "\
    El juego selecciona una reacción arbitraria de todas las que hay, pero no la muestra completamente.\
    Algunos reactivos o productos o colores (como por ser el de precipitado o solución) de la reacción elegida\
    también ya se preseleccionan arbitrariamente,\
    y la idea es elegir las demás cosas que faltan para completarla. En caso de rendirse, apretar el botón \"reset\"\
    para avanzar a otra reacción. Para que la aplicación se visualice bien, es\
    mejor abrirla desde la computadora o sino con el celular pero con la pantalla de costado. Está en construcción y pueden surgir errores.\
    \"debug\" es solo un botón para ver qué puede suceder en caso de surgir algún error.\
  "
;

export const initText = "\
  \"Todo\" muestra todas las reacciones (al apretar el boton, esperar un toque que carguen)\
  "
;

export const bottomright = 'by initramfs';

export const numReactions = 11;

export const getNumParams = (rrparams) => {
//  return 20;
  return (Math.floor(rrparams.length/2) + 1);
};

export const mathJaxConfig = {
  tex: {
    loader: { load: ['[tex]/html'] },
    packages: { '[+]': ['html'] },
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)']
    ],
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]']
    ]
  }
};


