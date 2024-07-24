import "./Main.css";
import React from "react";
import Select from "react-dropdown-select";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Reapro from "./Reapro.js";
import RWindow from "./RWindow.js";
import Button from "react-bootstrap/Button";
import Window from "./Window.js";
import { bottomright, mathJaxConfig } from "./consts.js";
import { numReactions, getNumParams } from "./consts.js";
import { rrssrc, cationrrs, anionrrs, rrs, analyses, orgsrc, orgrrs } from "./allinfo/allinfo.js";
import AWindow from "./AWindow.js";
import { Kekule } from 'kekule';
// if Kekule widgets is used, the theme CSS should be imported as well
import 'kekule/theme/default';
console.log(Kekule.VERSION);

class Organics extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getRandomFrom = (arr) => {
    return (arr[Math.floor(Math.random() * arr.length)]);
  }

  getNewState = (initial = false) => {
    const allrrs = orgrrs.slice();
    if (!initial && this.state.rr) {
      const index = allrrs.indexOf(this.state.rr);
      if (index > -1) {
        allrrs.splice(index, 1);
      }
    }
    const rr = this.getRandomFrom(allrrs);
    console.log('reaction: ', rr);
    return ({
      rr: rr,
      selected: [],
    });
  }

  getInitialState = () => {
    return ({...this.getNewState(true), reset: false});
  }

  ltx = (x) => {
    return (
      <MathJax inline dynamic>
        {`$${x}$`}
      </MathJax>
    );
  }
  
  makeSet = (s) => {
    const separator = (x) => {
      return (s.indexOf(x) === s.length - 1 ? '' : ', ~ ');
    }
    let sret = s.reduce((a, x) => a + (rrssrc[x] ? rrssrc[x].ltx : `\\text{${x}}`) + separator(x), '');
    sret = this.ltx(sret);
    return sret;
  }
  
  makeQuestion = (q) => {
    const separator = (x) => {
      return (q.indexOf(x) === q.length - 1 ? '' : ' ~ ');
    }
//    console.log('q: ', q);
    let qret = q.reduce((a, x) => a + (rrssrc[x] ? rrssrc[x].ltx : `\\text{${x}}`) + separator(x), '');
//    console.log('qret: ', qret);
    qret = this.ltx(qret);
    return qret;
  }

  reset = () => {
    const newState = this.getNewState();
    this.setState({
      ...newState,
      reset: !this.state.reset,
    });
  }

  debugButtons = () => {
      return (
        <div className="buttons">
          {true
          ? <Button onClick={() => this.reset()}>
            {'Reset'}
          </Button>
        : null}
      </div>
    );
  }

  setAnswer = (selected) => {
    this.setState({selected: selected});
  }

  reapro = (set, callback) => {
//    const options = set.map((x) => ({value: x, label: this.ltx(rrssrc[x].ltx)}));
    const options = set.map((x) => ({value: x, label: x}));
//    options.push({value: 'ninguno', label: 'Ninguno'});
    return (
      <Select
        key={'reapro' + this.state.reset}
        options={options}
        onChange={(selected) => callback(selected.map((x) => x.value))}
//        values={value ? [value] : []}
        placeholder={"Seleccionar"}
        searchable={false}
        multi={false}
      />
    );
  }
  
  areEqualSets = (arr1, arr2) => {
    return (
      arr1.every((x) => arr2.includes(x)) && arr2.every((x) => arr1.includes(x))
    );
  }

  analysis = () => {
    if (!this.state.aly) {
      return false;
    }
    /*
    const ans1 = (
      (this.state.aly.answer === []
      ? this.state.selected === ['ninguno']
      : this.areEqualSets(this.state.aly.answer, this.state.selected)
      )
    );
    */
    const ans = this.areEqualSets(this.state.aly.answer, this.state.selected);
    const analysis = ans;
    return analysis;
  }

  analysisSchema = () => {
    const analysis = this.analysis();
    this.setState({schema: analysis});
  }

  test = () => {
    var chemViewer = new Kekule.ChemWidget.Viewer(document);
    chemViewer
      .setEnableToolbar(false)
      .setEnableDirectInteraction(false)
      .setEnableEdit(false)
      .setToolButtons([])
      .setPredefinedSetting('static');
    chemViewer.setDimension('50px', '50px');
    
//    document.getElementById("x1").setAttribute = chemViewer;
    const elem = React.createElement(
    "div",
    {style:{color:"red"}, id: 'idmol'},
    "hello",
    );
//    chemViewer.appendToElem(document.getElementById('idmol')).setChemObj(orgsrc);
    chemViewer.appendToElem(elem).setChemObj(orgsrc);
    this.setState({chvw: elem});
    console.log('elem: ', elem);
    return elem;
  }
  
//              {this.reapro([<div id='x1'>x</div>, 'xx'], this.setAnswer)}
  render() {
    const reapro = () => {
      return (
        (true ?
          <div className="analysis">
            {this.reapro([this.state.chvw ? this.state.chvw : 'ss1', 'ss2'], this.setAnswer)}
          </div>
        : null)
      );
    }
    const debug = () => {
      return <Button onClick={() => this.test()}>debug</Button>
    }
//              {this.test()}
    return (
      <div>
        <MathJaxContext version={3} config={mathJaxConfig}>
          <div className="center">
            <div className="allanalysis">
              <div id='id2'>id2</div>;
              {reapro()}
            </div>
            {debug()}
          </div>
        </MathJaxContext>
        {this.debugButtons()}
      </div>
    );
  }
    

}


export default Organics;
