export const initTitle = "My Chemical Wizardry";

/*
export const initText = "\
  \{<a href="#" aria-hidden="true"></a>}\
  "
;
*/

const redirect = () => {
  window.location.replace('https://hechiceriaquimica.web.app');
}

export const initText = <a href="#" onClick={() => redirect()}>https://hechiceriaquimica.web.app/</a>;

/*
//<a href="#" onClick={() => this.setState({infoWindow: true})}>info</a>
*/

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


