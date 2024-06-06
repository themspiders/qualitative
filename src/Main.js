import "./Main.css";
import React, { useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { cations, crea, cpro, rrs } from "./reactions.js";
import Select from "react-dropdown-select";
import Reapro from "./Reapro.js";
import Window from "./Window.js";
import ColorPicker from "./ColorPicker.js";
import { colors, noppt } from "./colors.js";
import Button from "react-bootstrap/Button";

console.log(rrs);

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
//    console.log(Object.keys(rrs));
    //const x = Object.keys(rrs);
//    this.options = Object.keys(rrs).map(x => ({value: x, label: this.rpltx(x)}));
    this.state = this.getInitialState();
  }

  componenDidMount() {
    console.log('componentDidMount');
  }

  getInitialState = () => {
    const [reas, rea2s, rea3s, pros, pro2s, pro3s] = this.getAll2();
    return {
      //ca: new Reapro({source: ions, callback: this.setReapro2}),
      ion: null,
      rea: null,
      rea2: null,
      rea3: null,
      pro: null,
      pro2: null,
      pro3: null,
      reaction: false,
      mjrr: null,
      ppt: null,
      sol: null,
      ions: cations,
      irea: reas,
      irea2: rea2s,
      irea3: rea3s,
      ipro: pros,
      ipro2: pro2s,
      ipro3: pro2s,
      reset: false,
    };
  }
  
  showReapro2 = (x) => {
    if (this.state.ion && this.state.rea) {
      const rrcare = rrs[this.state.ion][this.state.rea];
      return (rrcare && x in rrcare);
    } else {
      return false;
    }
  };

  setReapro2 = () => {
    console.log('setReapro2');
    ["rea2", "rea3", "pro2", "pro3"].forEach((x) => {this.setState({[x]: (this.state[x] && !this.showReapro2(x) ? null : this.state[x])})});
  }
  
  // undefined.x = error
  // defined.noexiste = undefined

  ltx = (x, source, coef) => {
    let ret = (source ? (source[x] && source[x]['ltx']) : x)
//    const coef = (setCoef && source[x] && source[x]['
    if (coef && coef > 1) {
      ret = `{${coef} ~ ${ret}}`;
    }
    return (
      <MathJax inline dynamic>
        {`$${ret}$`}
      </MathJax>
    );
  }

  plusr = (x, source, coef) => {
    return (
      x ?
        <>
          {this.ltx("~ + ~")}
          {this.ltx(x, source, coef)}
        </>
      : null
    );
  }

  makeMjrr = () => {
    const coef = rrs[this.state.ion][this.state.rea]['coef'];
    console.log('coef: ', coef);
    return (
      <MathJaxContext version={3} config={config}>
        {this.ltx(this.state.ion, this.state.ions, coef[this.state.ion])}
        {this.ltx("~ + ~")}
        {this.ltx(this.state.rea, this.state.irea, coef[this.state.rea])}
        {this.plusr(this.state.rea2, this.state.irea2, coef[this.state.rea2])}
        {this.plusr(this.state.rea3, this.state.irea2, coef[this.state.rea3])}
        {this.ltx("~ \\rightarrow ~")}
        {this.ltx(this.state.pro, this.state.ipro, coef[this.state.pro])}
        {this.plusr(this.state.pro2, this.state.ipro2, coef[this.state.pro2])}
        {this.plusr(this.state.pro3, this.state.ipro3, coef[this.state.pro3])}
      </MathJaxContext>
    );
  }

  debug = () => {
    if (!(this.state.ion && this.state.rea && rrs[this.state.ion][this.state.rea])) {
      console.log('debug: false');
      return;
    }
    console.log('debug');
    const rrcare = rrs[this.state.ion][this.state.rea];
    const vars = [
    ["this.state.ion", this.state.ion],
    ["this.state.rea", this.state.rea],
    ["rrcare", rrcare],
    ["rrcare.rea2", rrcare.rea2],
    ["this.state.rea2", this.state.rea2],
    ["rrcare.rea3", rrcare.rea3],
    ["this.state.rea3", this.state.rea3],
    ["rrcare.pro", rrcare.pro],
    ["this.state.pro", this.state.pro],
    ["rrcare.pro2", rrcare.pro2],
    ["this.state.pro2", this.state.pro2],
    ["rrcare.pro3", rrcare.pro3],
    ["this.state.pro3", this.state.pro3],
    ["rrcare.ppt", rrcare.ppt],
    ["this.state.ppt", this.state.ppt],
    ["[ipro[this.state.pro][color]", (this.state.pro ? this.state.ipro[this.state.pro]["color"] : null)],
    ["colors[ipro[this.state.pro][color]", (this.state.pro ? colors[this.state.ipro[this.state.pro]["color"]] : null)],
    ];
    vars.forEach(([key, value]) => {console.log(`${key}: `, value)});
  }
    

  reaction = () => {
//    this.reset();
//    return;
    if (this.state.ion && this.state.rea && rrs[this.state.ion][this.state.rea]) {
      const rrcare = rrs[this.state.ion][this.state.rea];
      const reaction = (
        (rrcare.pro && this.state.pro && rrcare.pro === this.state.pro)
        && ((!rrcare.rea2 && !this.state.rea2) || (rrcare.rea2 && this.state.rea2 && rrcare.rea2 === this.state.rea2))
        && ((!rrcare.rea3 && !this.state.rea3) || (rrcare.rea3 && this.state.rea3 && rrcare.rea3 === this.state.rea3))
        && ((!rrcare.pro2 && !this.state.pro2) || (rrcare.pro2 && this.state.pro2 && rrcare.pro2 === this.state.pro2))
        && ((!rrcare.pro3 && !this.state.pro3) || (rrcare.pro3 && this.state.pro3 && rrcare.pro3 === this.state.pro3))
        && ((!rrcare.ppt && this.state.ppt === noppt)
          || (rrcare.ppt && this.state.ppt && colors[this.state.ipro[this.state.pro]["color"]].includes(this.state.ppt)))
        && (!rrcare.sol || (rrcare.sol && colors[rrcare["sol"]].includes(this.state.sol)))
      );
      const mjrr = (reaction ? this.makeMjrr() : null);
      //const mjrr = this.ltx('{{{Mn}^{2+}}_{(ac)}}');
      this.setState({reaction: reaction, mjrr: mjrr});
    } else {
      this.setState({reaction: false, mjrr: null});
    }
  }
  
  reset1 = () => {
  console.log("document: ", document.getElementById("cr3+"));
  return;
  }

  randomx = (source) => {
    const rdm = Math.floor(Math.random() * source.length);
//    Object.keys(this.source)[]
  }

  randomxxx = (max) => {
    const fixing = 3;
    const des = Math.floor(Math.random() * fixing);
    if (des === 0) {
      return this.randomxx(this.state.ions);
    } else if (des === 1) {
      return this.randomxx(this.state.irea);
    } else {
      return this.randomxx(this.state.ipro);
    }
  }
  
  getReas = (ion) => {
    const reas = Object.keys(crea).filter((x) => rrs[ion][x]);
    console.log('getReas: ', ion, reas);
  }

  iifnot = (x, arr) => {
    const index = arr.indexOf(x);
    if (x && index < 0) {
      arr.push(x);
    }
  }

  getAll = () => {
//    const ions = [];
    const reas = {};
    const rea2s = {};
    const rea3s = {};
    const pros = {};
    const pro2s = {};
    const pro3s = {};
    
    for (let ion in rrs) {
//      this.iifnot(ion, ions);
//      console.log('ion: ', ion);
      for (let rea in rrs[ion]) {
//        console.log('rea: ', rea);
//        console.log('ionrea = rrs[ion][rea]: ', rrs[ion][rea]);
        reas[rea] = crea[rea];
        const ionrea = rrs[ion][rea];
        [["rea2", rea2s], ["rea3", rea3s], ["pro2", pro2s], ["pro3", pro3s]].forEach(([key, s]) => {
          if (ionrea[key] && !s[ionrea[key]]) {
            s[ionrea[key]] = (key[0] === "r" ? crea[ionrea[key]] : cpro[ionrea[key]]);
            if (!s[ionrea[key]]) {
//              console.log('s: ', s, 'ionrea: ', ionrea, 'ionrea[key]: ', ionrea[key]);
            }
          }
        });
      }
    }
        console.log('pross: ', pros);
//  console.log('getAll: ', reas, rea2s, rea3s, pros, pro2s, pro3s);
  return [reas, rea2s, rea3s, pros, pro2s, pro3s];
  }

  getAll2 = (rand) => {
//    const ions = [];
    const reas = [];
    const rea2s = [];
    const rea3s = [];
    const pros = [];
    const pro2s = [];
    const pro3s = [];
    const reactions = [];
    
    for (let ion in rrs) {
//      this.iifnot(ion, ions);
//      console.log('ion: ', ion);
      for (let rea in rrs[ion]) {
//        console.log('rea: ', rea);
//        console.log('ionrea = rrs[ion][rea]: ', rrs[ion][rea]);
        //reaction = ionrea
        const ionrea = rrs[ion][rea];
        reactions.push({ion: ion, rea: rea, ionrea: ionrea});
      }
    }
    
    if (rand) {
      const length = reactions.length;
      [...Array(length - rand)].forEach((x) => {
        const index = Math.floor(Math.random() * reactions.length);
        reactions.splice(index, 1);
      });
    }
    
    console.log('reactions: ', reactions);
    
    reactions.forEach(({ion, rea, ionrea}) => {
//      this.iifnot(rea, reas);
//      this.iifnot(ionrea["rea2"], rea2s);
//      this.iifnot(ionrea["rea3"], rea3s);
//      this.iifnot(ionrea["pro"], pros);
//      this.iifnot(ionrea["pro2"], pro2s);
//      this.iifnot(ionrea["pro3"], pro3s);
      [[rea, reas], [ionrea["rea2"], rea2s], [ionrea["rea3"], rea3s], [ionrea["pro"], pros], [ionrea["pro2"], pro2s], [ionrea["pro3"], pro3s]]
      .forEach(([rp, addToArr]) => {
        this.iifnot(rp, addToArr);
      });
    });
      
    const [irea, irea2, irea3, ipro, ipro2, ipro3] = [{}, {}, {}, {}, {}, {}];
//  [irea, irea2, irea3, ipro, ipro2, ipro3]
    const [rs, ps] = [crea, cpro];
    [[reas, irea, rs], [rea2s, irea2, rs], [rea3s, irea3, rs], [pros, ipro, ps], [pro2s, ipro2, ps], [pro3s, ipro3, ps]]
    .forEach(([arr, obj, source]) => {
      for(const rp of arr) {
        obj[rp] = source[rp];
      }
    });

//    console.log('getAllRea2: ', reas, rea2s, rea3s, pros, pro2s, pro3s);
//    console.log('getAllRea2: ', irea, irea2, irea3, ipro, ipro2, ipro3);
    return [irea, irea2, irea3, ipro, ipro2, ipro3];
  }

  test = () => {
    this.reset();
//    const am = ["ion", "rea", "pro", "rea2", "rea3", "pro2", "pro3"].map((x) => this.state[x]);
//    console.log(am, am.reduce((a, x) => a + (x && x !== true ? 1 : 0), 0));
  }
  
  reset = () => {
    const ions = cations;
    const irea = crea;
    const ipro = cpro;
    
    const rnca = this.randomx(ions);

    this.setState({
      ion: null,
      rea: null,
      pro: null,
      rea2: null,
      rea3: null,
      pro2: null,
      pro3: null,
      ppt: null,
      sol: null,
//      ions: ions,
//      irea: ire,
//      ipro: ipro,
      reset: !this.state.reset,
    });
//    [this.ca, this.re, this.pro, this.rea2, this.rea3, this.pro2, this.pro3] = [null, null, null, null, null, null, null];
//    console.log("rea: ", this.state.rea);
//    this.setState({});
    const [reas, rea2s, rea3s, pros, pro2s, pro3s] = this.getAll2(20);
    console.log('here');
    console.log([reas, rea2s, rea3s, pros, pro2s, pro3s]);
    this.setState({irea: reas, irea2: rea2s, irea3: rea3s, ipro: pros, ipro2: pro2s, ipro3: pro3s});
  }
  
  setion = (x) => {
    this.setState({ion: x, x: this.state.x + 1});
//    this.setState({ion: x});
    this.setReapro2();
  }
  
  setrea = (x) => {
    this.setState({rea: x});
    this.setReapro2();
  }

  setrea2 = (x) => {
    this.setState({rea2: x});
  }

  setrea3 = (x) => {
    this.setState({rea3: x});
  }
  
  setpro = (x) => {
    this.setState({pro: x});
  }

  setpro2 = (x) => {
    this.setState({pro2: x});
  }
  
  setpro3 = (x) => {
    this.setState({pro3: x});
  }

  setPPT = (color) => {
    console.log("setPPT: ", color);
    this.setState({ppt: color});
  }

  setSOL = (color) => {
    console.log("setSOL: ", color);
    this.setState({sol: color});
  }
  
  reaproAmount = () => {
    const am = ["ion", "rea", "pro", "rea2", "rea3", "pro2", "pro3"].map((x) => this.state[x]);
    return (am.reduce((a, x) => a + (x ? 1 : 0), 0));
  }
    
  render() {
    const ltx = (x) => {
      return (
        <MathJax inline dynamic>
          {`$${x}$`}
        </MathJax>
      );
    }
    const rpltx = (x, source) => {
      return (ltx(source[x]['ltx']));
    }
    const reapro = (x, setx, source) => {
      const options = Object.keys(source).map((xx) => ({value: xx, label: rpltx(xx, source)}));
      return (
        <Reapro
//          value={options.find((x) => x.value === this.state[x])}
          key={x + this.state.reset}
          source={source}
          callback={setx}
//          options={Object.keys(source).map((x) => ({value: x, label: rpltx(x, source)}))}
          options={options}
        />
      );
    };
    const plus = (x, setx, source) => {
      return (
        this.showReapro2(x) ?
          <div className="reaction">
            {this.ltx("~ + ~")}
            {reapro(x, setx, source)}
          </div>
        : null
      );
    };
    return (
      <MathJaxContext version={3} config={config}>
      <div className="center">
        <div className="reaction">
          {reapro("ion", this.setion, this.state.ions)}
          {this.ltx("~ + ~")}
          {reapro("rea", this.setrea, this.state.irea)}
          {plus("rea2", this.setrea2, this.state.irea2)}
          {plus("rea3", this.setrea3, this.state.irea3)}
          {this.ltx("~ \\rightarrow ~")}
          {reapro("pro", this.setpro, this.state.ipro)}
          {plus("pro2", this.setpro2, this.state.ipro2)}
          {plus("pro3", this.setpro3, this.state.ipro3)}
        </div>
        <ColorPicker
          name={'PPT'}
          callback={(color) => this.setPPT(color)}
          color={this.state.ppt}
        />
        {this.state.ion && this.state.rea && rrs[this.state.ion][this.state.rea] && rrs[this.state.ion][this.state.rea]["sol"]
        ? <ColorPicker
            name={'SOL'}
            callback={(color) => this.setSOL(color)}
            color={this.state.sol}
          />
        : null}
        <Window
          name={'Reacción'}
          onClick={() => this.reaction()}
          secondary={true || !this.state.reaction}
          title={this.state.reaction}
          callback={() => this.reset()}
          mjrr={this.state.mjrr}
          size={this.state.mjrr && this.reaproAmount() > 4}
        />
        {true
        ? <Button variant="primary" onClick={() => this.debug()}>
              debug
          </Button>
        : null}
        {true
        ? <Button variant="primary" onClick={() => this.test()}>
            test
          </Button>
        : null}
      </div>
      </MathJaxContext>
    );
  }
}

export default Main;




