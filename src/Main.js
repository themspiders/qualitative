import "./Main.css";
import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { rrssrc, cationrrs, anionrrs, rrs } from "./reactions.js";
import Reapro from "./Reapro.js";
import RWindow from "./RWindow.js";
import ColorPicker from "./ColorPicker.js";
import { colors, nopptName, nopptColor, doColorName } from "./colors.js";
import Button from "react-bootstrap/Button";
import Window from "./Window.js";
import { bottomright } from "./consts.js";

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
    this.state = this.getInitialState();
  }

  componenDidMount() {
    console.log('componentDidMount');
  }

  getInitialState = () => {
    return (this.getNewState(false));
  }

  // undefined.x = error
  // defined.noexiste = undefined

  ltx = (x, source, coef) => {
    let ret = (source ? (source[x] && source[x]['ltx']) : x)
    if (coef && coef[x] && coef[x] > 1) {
      ret = `{${coef[x]} ~ ${ret}}`;
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
  
  makeRRFromState = (ppt, sol) => {
    return ({
      ion: this.state.ion,
      rea: this.state.rea,
      rea2: this.state.rea2,
      rea3: this.state.rea3,
      pro: this.state.pro,
      pro2: this.state.pro2,
      pro3: this.state.pro3,
      ppt: ppt,
      sol: sol,
      coef: (rrs[this.state.ion] && rrs[this.state.ion][this.state.rea]
        ? rrs[this.state.ion][this.state.rea]['coef'] : null),
   });
 }

  displaypptsol = (key, pptsol) => {
    if (!pptsol) {
      return <div></div>;
    }
    return (
      <div style={{"user-select": "none", "color": colors[pptsol]["default"]}}>
      {
      !key
        ? (pptsol === 'noppt' ? doColorName(pptsol, key) : 'PPT ' + doColorName(pptsol, key))
        : ('SOL ' + doColorName(pptsol, key))
      }
      </div>
    );
  }

  makeMjrr = (rr) => {
//    console.log('coef: ', rr.coef);
    return (
      <MathJaxContext version={3} config={config}>
        {this.ltx(rr.ion, rrssrc, rr.coef)}
        {this.ltx("~ + ~")}
        {this.ltx(rr.rea, rrssrc, rr.coef)}
        {this.plusr(rr.rea2, rrssrc, rr.coef)}
        {this.plusr(rr.rea3, rrssrc, rr.coef)}
        {this.ltx("~ \\rightarrow ~")}
        {this.ltx(rr.pro, rrssrc, rr.coef)}
        {this.plusr(rr.pro2, rrssrc, rr.coef)}
        {this.plusr(rr.pro3, rrssrc, rr.coef)}
      </MathJaxContext>
    );
  }
  
  makeMjps = (rr) => {
    return (
      <div className="displaypptsol">
        {this.displaypptsol(0, rr.ppt)}
        {this.displaypptsol(1, rr.sol)}
      </div>
    );
  }
  
  getpptFromRR = (rr) => {
    if (rr.ppt) {
      return rrssrc[rr.pro]["color"];
    } else {
      return false;
    }
  }

//        && ((!rrcare.ppt && this.state.pptcolor === noppt)
//          || (rrcare.ppt && this.state.pptcolor && colors[this.state.ipro[this.state.pro]["color"]].shades.includes(this.state.pptcolor)))
//        && (!rrcare.sol || (rrcare.sol && colors[rrcare["sol"]].shades.includes(this.state.solcolor)))

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
        && ((!rrcare.ppt && this.state.ppt === nopptName)
          || (rrcare.ppt && this.state.ppt && this.state.ipro[this.state.pro]["color"] === this.state.ppt))
        && (!rrcare.sol || (rrcare.sol && rrcare["sol"] === this.state.sol))
      );
//      const mjrr = (reaction ? this.makeMjrr(this.makeRRFromState(this.getpptFromRR(rrcare), rrcare["sol"])) : null);
      let rrState = null;
      let mjrr = null;
      let mjps = null
      console.log('reaction: ', reaction);
      if (reaction) {
        rrState = this.makeRRFromState(this.getpptFromRR(rrcare), rrcare["sol"]);
        mjrr = this.makeMjrr(rrState);
        mjps = this.makeMjps(rrState);
      }
      this.setState({
        rrcount: this.state.rrcount + 1,
        reaction: reaction,
        mjrr: mjrr,
        mjps: mjps,
        reaproAmountState: (reaction ? this.reaproAmount(rrState) : null),
      });
    }
  }

  getRandomFrom = (arr, x) => {
//    console.log('GRF: ', {arr}, {x});
    return (arr[Math.floor(Math.random() * arr.length)]);
  }

  iifnot = (x, arr) => {
    const index = arr.indexOf(x);
    if (x && index < 0) {
      arr.push(x);
    }
  }

  getAll = () => {
    const reas = {};
    const rea2s = {};
    const rea3s = {};
    const pros = {};
    const pro2s = {};
    const pro3s = {};
    
    for (let ion in rrs) {
      for (let rea in rrs[ion]) {
        reas[rea] = rrssrc[rea];
        const ionrea = rrs[ion][rea];
        [["rea2", rea2s], ["rea3", rea3s], ["pro2", pro2s], ["pro3", pro3s]].forEach(([key, s]) => {
          if (ionrea[key] && !s[ionrea[key]]) {
            s[ionrea[key]] = rrssrc[ionrea[key]];
          }
        });
      }
    }
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
    if (sublength === null) {
      return [];
    }
    if (sublength && length < sublength) {
      return ret;
    }
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
    const sions = [];
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
        if (rrssrc[ion]) {
          reactions.push({ion: ion, rea: rea, ...ionrea, ppt: this.getPPT(ion, rea, rrssrc),});
        }
      }
    }
    
    //console.log('reactions: ', reactions);
    
    if (rand) {
      reactions = this.getRandomSubArr(reactions, rand);
    }
    
    console.log('reactions: ', reactions);
    
    //console.log({sions}, {reas}, {rea2s}, {rea3s}, {pros}, {pro2s}, {pro3s});
        
    reactions.forEach((rr) => {
      [
      [rr["ion"], sions],
      [rr["rea"], reas],
      [rr["rea2"], rea2s],
      [rr["rea3"], rea3s],
      [rr["pro"], pros],
      [rr["pro2"], pro2s],
      [rr["pro3"], pro3s],
      ]
      .forEach(([rp, addToArr]) => {
        if (false && rp && !rrssrc[rp]) {
          console.log('no ltx: ', rp);
        }
        this.iifnot(rp, addToArr);
      });
    });

    const chosenrr = this.getRandomFrom(reactions);
      
    const [ions, irea, irea2, irea3, ipro, ipro2, ipro3] = [{}, {}, {}, {}, {}, {}, {}];
    [[sions, ions], [reas, irea], [rea2s, irea2], [rea3s, irea3], [pros, ipro], [pro2s, ipro2], [pro3s, ipro3]]
    .forEach(([arr, obj]) => {
      for(const rp of arr) {
        obj[rp] = rrssrc[rp];
      }
    });

    const rrparams = this.getParams(chosenrr);
    const numParams = Math.floor(rrparams.length/2) + 1; //(allParams.length/2 % 2);
    const selectedParams = this.getRandomSubArr(rrparams, numParams);
//    console.log('subarr: ', selectedParams);
    const canSelect = {};
    allParams.forEach((x) => {
      canSelect[x] = !selectedParams.includes(x);
    });
//    canSelect["ppt"] = true;
    
    console.log({chosenrr}, {canSelect});

//    const [pptcolor, solcolor] = [...["ppt", "sol"].map((x) => (!canSelect[x] ? this.getRandomFrom(colors[chosenrr[x]], 1) : null))];
    
    const pptcolor = (!canSelect["ppt"] ? (chosenrr["ppt"] ? this.getRandomFrom(colors[chosenrr["ppt"]].shades) : nopptColor) : null);
    const solcolor = (!canSelect["sol"] ? this.getRandomFrom(colors[chosenrr["sol"]].shades) : null);
    const pptname = (!canSelect["ppt"] ? (chosenrr["ppt"] ? chosenrr["ppt"] : nopptName) : null);
    const solname = (!canSelect["sol"] ? chosenrr["sol"] : null);


//    console.log('getAllRea2: ', reas, rea2s, rea3s, pros, pro2s, pro3s);
//    console.log('getAllRea2: ', irea, irea2, irea3, ipro, ipro2, ipro3);
    return [ions, irea, irea2, irea3, ipro, ipro2, ipro3, chosenrr, canSelect, pptcolor, pptname, solcolor, solname];
  }

  getNewState = (reset, numReactions = 11) => {
    const [ions, reas, rea2s, rea3s, pros, pro2s, pro3s, chosenrr, canSelect, pptcolor, pptname, solcolor, solname] = this.getAll2(numReactions);
    //la decision es: si hay algun reactivo o producto preseleccionado que identifique una reaccion de amoniaco
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
      rrcount: 0,
      mjrr: null,
      mjps: null,
      ions: ions,
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
      ppt: pptname,
      sol: solname,
      reaproAmount: this.reaproAmount(chosenrr),
      reaproAmountState: null,
    };
  }

  reset = () => {
//    console.log('reset: ');
    const newState = this.getNewState(!this.state.reset);
    this.setState({
      ...newState,
      reset: !this.state.reset,
    });
  }

  test = () => {
    this.reset();
//    const am = ["ion", "rea", "pro", "rea2", "rea3", "pro2", "pro3"].map((x) => this.state[x]);
//    console.log(am, am.reduce((a, x) => a + (x && x !== true ? 1 : 0), 0));
  }
  
  testltx = () => {
    this.getNewState(!this.state.reset, false);
  }

  debug = () => {
    console.log('this.state.pptsol: ', this.state.ppt, this.state.sol);
    if (false && this.state.chosenrr) {
      console.log('debug: rA: ', this.reaproAmount(this.state.chosenrr));
    }
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
    ["rrcare.ppt", rrcare.ppt ? rrcare.ppt : false],
    ["this.state.ppt", this.state.ppt],
    ["ppt === ppt", rrcare.ppt ===  this.state.ppt],
    ["rrcare.sol", rrcare.sol],
    ["this.state.sol", this.state.sol],
    ["sol === sol", rrcare.sol ===  this.state.sol],
//    ["[ipro[this.state.pro][color]", (this.state.pro ? this.state.ipro[this.state.pro]["color"] : null)],
//    ["colors[ipro[this.state.pro][color]", (this.state.pro ? colors[this.state.ipro[this.state.pro]["color"]].shades : null)],
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
//    console.log("setPPT: ", color);
    this.setState({ppt: color});
  }

  setSOL = (color) => {
//    console.log("setSOL: ", color);
    this.setState({sol: color});
  }
  
  reaproAmount = (rr) => {
    console.log('rA: ', rr);
    const am = ["ion", "rea", "pro", "rea2", "rea3", "pro2", "pro3"].map((x) => rr[x]);
    console.log('suma: ', am.reduce((a, x) => a + (x ? 1 : 0), 0));
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
  
//  const allreactions = () => {
  reveal = () => {
    const rr = this.makeMjrr(this.state.chosenrr);
    const ps = this.makeMjps(this.state.chosenrr);
    const body = <div>{rr}{ps}</div>
    return (
      <div className="rrButton">
        <Window
          name={'Revelar'}
          body={rr}
          footer={ps}
          size={this.state.reaproAmount > 4}
          clickable={true}
          callback={() => {}}
        />
      </div>
    );
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
      return (
        <Reapro
          key={x + this.state.reset}
          source={source}
          callback={setx}
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

    const pptcp = () => {
      if (!this.state.canSelect["ppt"]) {
        return <div>{this.displaypptsol(false, this.state.ppt)}</div>;
      }
      return (
          (true ? 
          <ColorPicker
            key={"PPT" + this.state.reset}
            name={"PPT"}
            callback={(color) => this.setPPT(color)}
            color={this.state.pptcolor}
            pptsolname={this.state.ppt}
            disabled={!this.state.canSelect.ppt}
          />
          : null)
      );
    }
    
    const solcp = () => {
      if (!this.state.canSelect["sol"]) {
        return <div>{this.displaypptsol(true, this.state.sol)}</div>;
      }
      return (
          (true && (this.state.ion && this.state.rea && rrs[this.state.ion][this.state.rea] && rrs[this.state.ion][this.state.rea]["sol"])
          ? <ColorPicker
              key={"SOL" + this.state.reset}
              name={"SOL"}
              callback={(color) => this.setSOL(color)}
              color={this.state.solcolor}
              pptsolname={this.state.sol}
              disabled={!this.state.canSelect.sol}
            />
          : null)
      );
    }

    const pptsol = () => {
      return (
        <div className="pptsol">
          {pptcp()}
          {solcp()}
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
          <RWindow
            name={'Reacción'}
            onClick={() => this.reaction()}
            secondary={() => (true || !this.state.reaction)}
            title={() => (this.state.reaction)}
            callback={() => this.reset()}
            mjrr={() => (this.state.mjrr)}
            mjps={() => (this.state.mjps)}
            scheme={() => (this.state.reaction)}
            size={() => (this.state.reaproAmountState && this.state.reaproAmountState > 4)}
          />
        </div>
      );
    }
    
    const debugButtons = () => {
      return (
        <div className="buttons">
          {false
          ? <Button onClick={() => this.debug()}>
              {'Debug'}
            </Button>
          : null}
          {true
          ? <Button onClick={() => this.test()}>
              {'Reset'}
            </Button>
          : null}
          {this.reveal()}
        </div>
      );
    }

    return (
      <div>
      <MathJaxContext version={3} config={config}>
      <div className="center">
        <div className="allreaction">
          {reaction()}
        </div>
        {pptsol()}
        {rrButton()}
      </div>
      </MathJaxContext>
      {debugButtons()}
      <div className="bottomright">
        {bottomright}
      </div>
      </div>
    );
  }
}

export default Main;




