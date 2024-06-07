import "./Main.css";
import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { cations, crea, cpro, rrs } from "./reactions.js";
import Reapro from "./Reapro.js";
import Window from "./Window.js";
import ColorPicker from "./ColorPicker.js";
import { colors, noppt } from "./colors.js";
import Button from "react-bootstrap/Button";

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

const allParams = ["ion", "rea", "rea2", "rea3", "pro", "pro2", "pro3", "ppt", "sol"];

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
    return (this.getNewState(false));
  }


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
        && ((!rrcare.ppt && this.state.pptcolor === noppt)
          || (rrcare.ppt && this.state.pptcolor && colors[this.state.ipro[this.state.pro]["color"]].shades.includes(this.state.pptcolor)))
        && (!rrcare.sol || (rrcare.sol && colors[rrcare["sol"]].shades.includes(this.state.solcolor)))
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

  getRandomFrom = (arr, x) => {
    console.log('GRF: ', {arr}, {x});
    return (arr[Math.floor(Math.random() * arr.length)]);
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
  
  getPPT = (ion, rea, source) => {
    if (ion && rea && rrs[ion][rea]) {
      if (rrs[ion][rea].ppt) {
        return source[rrs[ion][rea].pro].color;
      }
    }
    return false;
  }

  getSOL = (ion, rea, source) => {
    if (ion && rea && rrs[ion][rea]) {
      return rrs[ion][rea].sol;
    }
    return null;
  }

  getRandomSubArr = (arr, sublength) => {
    const ret = arr;
    const length = ret.length;
    [...Array(length - sublength)].forEach((x) => {
      const index = Math.floor(Math.random() * ret.length);
      ret.splice(index, 1);
    });
    return ret;
  };

  getParams = (rr) => {
    // rr = {ion, rea, ...ionrea, ppt};
    const ret = Object.keys(rr);
    let index = ret.indexOf("coef");
    if (index > -1) {
      ret.splice(index, 1);
    }
    index = ret.indexOf("sol");
    if (index > -1 && !rr["sol"]) {
      ret.splice(index, 1);
    }
    console.log(ret);
    return (ret);
  }

  getAll2 = (rand) => {
//    const ions = [];
    const reas = [];
    const rea2s = [];
    const rea3s = [];
    const pros = [];
    const pro2s = [];
    const pro3s = [];
    let reactions = [];
    
    for (let ion in rrs) {
//      this.iifnot(ion, ions);
//      console.log('ion: ', ion);
      for (let rea in rrs[ion]) {
//        console.log('rea: ', rea);
//        console.log('ionrea = rrs[ion][rea]: ', rrs[ion][rea]);
        //reaction = ionrea
        const ionrea = rrs[ion][rea];
        if (cations[ion]) {
          reactions.push({ion: ion, rea: rea, ...ionrea, ppt: this.getPPT(ion, rea, cpro),});
        }
      }
    }
    
    console.log('reactions: ', reactions);
    
    if (rand) {
      reactions = this.getRandomSubArr(reactions, rand);
    }
    
    console.log('reactions: ', reactions);
    
    reactions.forEach((rr) => {
//      this.iifnot(rea, reas);
//      this.iifnot(ionrea["rea2"], rea2s);
//      this.iifnot(ionrea["rea3"], rea3s);
//      this.iifnot(ionrea["pro"], pros);
//      this.iifnot(ionrea["pro2"], pro2s);
//      this.iifnot(ionrea["pro3"], pro3s);
      [[rr["rea"], reas], [rr["rea2"], rea2s], [rr["rea3"], rea3s], [rr["pro"], pros], [rr["pro2"], pro2s], [rr["pro3"], pro3s]]
      .forEach(([rp, addToArr]) => {
        this.iifnot(rp, addToArr);
      });
    });

    const chosenrr = this.getRandomFrom(reactions);
      
    const [irea, irea2, irea3, ipro, ipro2, ipro3] = [{}, {}, {}, {}, {}, {}];
//  [irea, irea2, irea3, ipro, ipro2, ipro3]
    const [rs, ps] = [crea, cpro];
    [[reas, irea, rs], [rea2s, irea2, rs], [rea3s, irea3, rs], [pros, ipro, ps], [pro2s, ipro2, ps], [pro3s, ipro3, ps]]
    .forEach(([arr, obj, source]) => {
      for(const rp of arr) {
        obj[rp] = source[rp];
      }
    });

    const rrparams = this.getParams(chosenrr);
    const numParams = Math.floor(rrparams.length/2) + 1; //(allParams.length/2 % 2);
    const selectedParams = this.getRandomSubArr(rrparams, numParams);
    console.log('subarr: ', selectedParams);
    const canSelect = {};
    allParams.forEach((x) => {
      canSelect[x] = !selectedParams.includes(x);
    });
    
    console.log({chosenrr}, {canSelect});

//    const [pptcolor, solcolor] = [...["ppt", "sol"].map((x) => (!canSelect[x] ? this.getRandomFrom(colors[chosenrr[x]], 1) : null))];
    
    const pptcolor = (!canSelect["ppt"] ? (chosenrr["ppt"] ? this.getRandomFrom(colors[chosenrr["ppt"]].shades) : noppt) : null);
    const solcolor = (!canSelect["sol"] ? this.getRandomFrom(colors[chosenrr["sol"]].shades) : null);

//    console.log('getAllRea2: ', reas, rea2s, rea3s, pros, pro2s, pro3s);
//    console.log('getAllRea2: ', irea, irea2, irea3, ipro, ipro2, ipro3);
    return [irea, irea2, irea3, ipro, ipro2, ipro3, chosenrr, canSelect, pptcolor, solcolor];
  }

  getNewState = (reset) => {
    const numReactions = 11;
//    [this.ca, this.re, this.pro, this.rea2, this.rea3, this.pro2, this.pro3] = [null, null, null, null, null, null, null];
//    console.log("rea: ", this.state.rea);
//    this.setState({});
    const [reas, rea2s, rea3s, pros, pro2s, pro3s, chosenrr, canSelect, pptcolor, solcolor] = this.getAll2(numReactions);
    //la desicion es: si hay algun reactivo o producto preseleccionado que identifique una reaccion de amoniaco
    //entonces todos los repros estan visibles por defecto.
    const params = {};
    allParams.forEach((x) => {
      params[x] = (!canSelect[x] ? chosenrr[x] : null);
    });

//    console.log([reas, rea2s, rea3s, pros, pro2s, pro3s, chosenrr]);
    console.log('newState: ');
    console.log({chosenrr}, {canSelect}, {params}, {pptcolor}, {solcolor});
    return {
      //ca: new Reapro({source: ions, callback: this.setReapro2}),
      /*
      ion: null,
      rea: null,
      rea2: null,
      rea3: null,
      pro: null,
      pro2: null,
      pro3: null,
      ppt: null,
      sol: null,
      */
      ...params,
      reaction: false,
      mjrr: null,
      ions: cations,
      irea: reas,
      irea2: rea2s,
      irea3: rea3s,
      ipro: pros,
      ipro2: pro2s,
      ipro3: pro3s,
      reset: reset,
      chosenrr: chosenrr,
      canSelect: canSelect,
      pptcolor: pptcolor,
      solcolor: solcolor,
    };
  }

  reset = () => {
    const newState = this.getNewState(!this.state.reset);
    this.setState({
      ...newState,
      reset: !this.state.reset,
    });
    
//    this.setState({irea: reas, irea2: rea2s, irea3: rea3s, ipro: pros, ipro2: pro2s, ipro3: pro3s});
  }

  test = () => {
    this.reset();
//    const am = ["ion", "rea", "pro", "rea2", "rea3", "pro2", "pro3"].map((x) => this.state[x]);
//    console.log(am, am.reduce((a, x) => a + (x && x !== true ? 1 : 0), 0));
  }

  debug = () => {
    console.log('debug', this.state.chosenrr);
    return;
    if (!(this.state.ion && this.state.rea && rrs[this.state.ion][this.state.rea])) {
      console.log('debug: false');
      return;
    }
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
    ["colors[ipro[this.state.pro][color]", (this.state.pro ? colors[this.state.ipro[this.state.pro]["color"]].shades : null)],
    ];
    vars.forEach(([key, value]) => {console.log(`${key}: `, value)});
  }
  
  setion = (x) => {
    this.setState({ion: x, x: this.state.x + 1});
//    this.setState({ion: x});
//    this.setReapro2();
  }
  
  setrea = (x) => {
    this.setState({rea: x});
//    this.setReapro2();
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
    this.setState({pptcolor: color});
  }

  setSOL = (color) => {
    console.log("setSOL: ", color);
    this.setState({solcolor: color});
  }
  
  reaproAmount = () => {
    const am = ["ion", "rea", "pro", "rea2", "rea3", "pro2", "pro3"].map((x) => this.state[x]);
    return (am.reduce((a, x) => a + (x ? 1 : 0), 0));
  }

  showReapro2 = (x) => {
    let ret = true;
    if (this.state.ion && this.state.rea) {
      const rrcare = rrs[this.state.ion][this.state.rea];
      ret = (rrcare && x in rrcare);
    } else {
      ret = false;
    }
    if (!ret && this.state[x]) {
      this.setState({[x]: null});
    }
    return ret;
  };

  render() {
    const ltx = (x) => {
      return (
        <MathJax inline dynamic>
          {`$${x}$`}
        </MathJax>
      );
    }
    const rpltx = (x, source) => {
      if (!ltx(source[x]['ltx'])) {
        console.log('x: ', x, source);
      }
      return (ltx(source[x]['ltx']));
    }
    const reapro = (x, setx, source) => {
      if (!this.state.canSelect[x]) {
        return rpltx(this.state[x], source);
      }
      const options = Object.keys(source).map((xx) => ({value: xx, label: rpltx(xx, source)}));
//      const value = (this.state[x] ? options.find(({value, label}) => value === this.state[x]) : null);
//      const valuex = (this.state[x] ? {"value": this.state[x], "label": ltx(this.state[x])} : null);
      if (false && this.state[x]) {
        console.log('x: ', x);
        console.log('state[x]: ', this.state[x]);
        console.log('source: ', source);
        console.log('options: ', options);
//        console.log('reapro: value: ', valuex);
      }
//      return (ltx(this.state[x]));
      return (
        <Reapro
//          value={options.find((x) => x.value === this.state[x])}
          key={x + this.state.reset}
//          valuex={valuex}
          source={source}
          callback={setx}
//          options={Object.keys(source).map((x) => ({value: x, label: rpltx(x, source)}))}
          options={options}
        />
      );
    };
    const plus = (x, setx, source) => {
      return (
        !this.state.canSelect[x] || this.showReapro2(x) ?
          <div className="reaction">
            {this.ltx("~ + ~")}
            {!this.state.canSelect[x] ? rpltx(this.state[x], source) : reapro(x, setx, source)}
          </div>
        : null
      );
    };

    const pptsol = () => {
      return (
        <div className="pptsol">
          {true ? 
          <ColorPicker
            key={"PPT" + this.state.reset}
            name={"PPT"}
            callback={(color) => this.setPPT(color)}
            color={this.state.pptcolor}
            pptsol={this.state.ppt}
            disabled={!this.state.canSelect.ppt}
          />
          : null}
          {(this.state.ion && this.state.rea && rrs[this.state.ion][this.state.rea] && rrs[this.state.ion][this.state.rea]["sol"])
          ? <ColorPicker
              key={"SOL" + this.state.reset}
              name={"SOL"}
              callback={(color) => this.setSOL(color)}
              color={this.state.solcolor}
              pptsol={this.state.sol}
              disabled={!this.state.canSelect.sol}
            />
          : null}
        </div>
      );
    }

    const reaction = () => {
      return (
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
      );
    }

    const rrButton = () => {
      return (
        <div className="rrButton">
          <Window
            name={'Reacción'}
            onClick={() => this.reaction()}
            secondary={!this.state.reaction}
            title={this.state.reaction}
            callback={() => this.reset()}
            mjrr={this.state.mjrr}
            size={this.state.mjrr && this.reaproAmount() > 4}
          />
        </div>
      );
    }
    
    const debugButtons = () => {
      return (
        <div className="buttons">
          {true
          ? <Button onClick={() => this.debug()}>
              debug
            </Button>
          : null}
          {true
          ? <Button onClick={() => this.test()}>
              reset
            </Button>
          : null}
        </div>
      );
    }

    return (
      <div>
      <MathJaxContext version={3} config={config}>
      <div className="center">
        <div className="allreaction">
          {reaction()}
          {rrButton()}
        </div>
        {pptsol()}
      </div>
      </MathJaxContext>
      {debugButtons()}
      </div>
    );
  }
}

export default Main;




