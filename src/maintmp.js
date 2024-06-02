import './Main.css';
import React, { useState } from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { cations, cre, cpro, rr } from './reactions.js';
import Select from 'react-dropdown-select';
import Repro from './Repro.js';
import Window from './Window.js';

console.log(rr);

const config = {
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

//      <MathJax>{"\\(\\frac{10}{4x} \\approx 2^{12}\\)"}</MathJax>

let re = '{{{Cr}^{3+}}_{(ac)}}';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.sol = null;
    console.log(Object.keys(rr));
    //const x = Object.keys(rr);
    this.options = Object.keys(rr).map(x => ({value: x, label: this.rpltx(x)}));
    this.state = {
      ca: new Repro({optList: cations, callback: this.setRepro2}),
      re: new Repro({optList: cre, callback: this.setRepro2}),
      pro: new Repro({optList: cpro}),
      re2: null,
      re3: null,
      pro2: null,
      pro3: null,
      reaction: false,
    };
    this.ca = null;
    this.re = null;
    this.pro = null;
    this.re2 = null;
    this.re3 = null;
    this.pro2 = null;
    this.pro3 = null;
  }

  ltx = (x) => {
    return (
          <MathJax inline dynamic>
            {`$${x}$`}
          </MathJax>
    );
  }
  
  rpltx = (x) => {
    return (this.ltx(rr[x]['ltx']));
  }
  
  dropdown = (options) => {
    return (
      <Select options={options} onChange={(values) => console.log(values)} />
    );
  } 

  selection = (item, sel) => {
    return (sel ? this.dropdown(this.options) : this.rpltx(item));
  }

  setRepro2 = () => {
    const rp = (x, inrepro) => {
      if (this.state.ca.repro && this.state.re.repro) {
        const rrcare = rr[this.state.ca.repro][this.state.re.repro];
        if (rrcare) {
          console.log('rrcare: ', this.state.ca.repro, this.state.re.repro, x, x in rrcare);
        }
        if (rrcare && x in rrcare) {
          const rrcarex = rrcare[x];
          console.log('rrcarex: ', rrcarex, inrepro[rrcarex]);
          const xx = (new Repro({id: this.state.ca.repro, optList: {[rrcarex]: inrepro[rrcarex]}}));
          return xx;
        } else {
          return null;
        }
      } else {
        return null;
      }
    };
    const re2old = (this.state.re2 ? this.state.re2.repro : null);
    const re3old = (this.state.re3 ? this.state.re3.repro : null);
    const pro2old = (this.state.pro2 ? this.state.pro2.repro : null);
    const pro3old = (this.state.pro3 ? this.state.pro3.repro : null);
    const re2 = rp('re2', cre);
    const re3 = rp('re3', cre);
    const pro2 = rp('pro2', cpro);
    const pro3 = rp('pro3', cpro);
    if (re2) {
      re2.repro = re2old;
    }
    if (re3) {
      re3.repro = re3old;
    }
    if (pro2) {
      pro2.repro = pro2old;
    }
    if (pro3) {
      pro3.repro = pro3old;
    }
    this.setState({re2: null, re3: null, pro2: null, pro3: null});
    this.setState({re2: re2, re3: re3, pro2: pro2, pro3: pro3});
  }
  // undefined.x = error
  // defined.noexiste = undefined
  reaction = () => {
    this.reset();
    return;
    if (this.state.ca.repro && this.state.re.repro && rr[this.state.ca.repro][this.state.re.repro]) {
      const rrcare = rr[this.state.ca.repro][this.state.re.repro];

      const reaction = (
        (rrcare.pro === this.state.pro.repro)
        && ((!rrcare.re2 && !this.state.re2) || (rrcare.re2 && this.state.re2 && rrcare.re2 === this.state.re2.repro))
        && ((!rrcare.re3 && !this.state.re3) || (rrcare.re3 && this.state.re3 && rrcare.re3 === this.state.re3.repro))
        && ((!rrcare.pro2 && !this.state.pro2) || (rrcare.pro2 && this.state.pro2 && rrcare.pro2 === this.state.pro2.repro))
        && ((!rrcare.pro3 && !this.state.pro3) || (rrcare.pro3 && this.state.pro3 && rrcare.pro3 === this.state.pro3.repro))
      );
      this.setState({reaction: reaction});
    } else{
      this.setState({reaction: false});
    }
  }
  
  reset1 = () => {
  console.log('document: ', document.getElementById('cr3+'));  
  return;
  }
  
  reset = () => {
//    const ca = new Repro({values: [1], key: null, optList: cations, callback: this.setRepro2});
//    const re = new Repro({key: null, optList: cations, callback: this.setRepro2});
//    const pro = new Repro({key: null, optList: cpro});
//    this.setState({ca: ca, re: re, pro: pro, re2: null, re3: null, pro2: null, pro3: null});
      this.setState({ca: null, re: null, pro: null, re2: null, re3: null, pro2: null, pro3: null});
    console.log('CA: ', this.ca);
  }
  
  setCa = (x) => {
    this.ca = x;
  } 
  
  render() {
    const plus = (x) => {
      return (
        x ?
          <div className="reaction">
            {this.ltx("~ + ~")}
            
            {x.display()}
          </div>
        : null
      );
    };
    return (
      <MathJaxContext version={3} config={config}>
      <div className="center">
        <div className="reaction">
          <Repro
            key={null}
            values={this.ca ? [this.ca] : []}
            optList={cations}
            callback={this.setCa}
          />
          <div>{'reaction: ' + (this.state.reaction ? 'true' : 'false')}</div> 
        </div>
        <button className="button" onClick={() => this.reaction()}>Reacción</button>
      </div>
      </MathJaxContext>
    );
  }
}

export default Main;



          {this.ltx("~ + ~")}
          {repro(this.re, this.setre, cre)}
          {plus(this.state.re2)}
          {plus(this.state.re3)}
          {this.ltx("~ \\rightarrow ~")}
          {repro(this.pro, this.setpro, cpro)}
          {plus(this.state.pro2)}
          {plus(this.state.pro3)}







  onClick = () => {
    console.log('props: ', this.props.values1);
  }
  
  render1() {
    return (
      <button className="button" onClick={this.onClick}>{this.props.values}</button>
    );
  }
