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
import { rrssrc, cationrrs, anionrrs, rrs, analyses } from "./reactions.js";
import AWindow from "./AWindow.js";

class Analysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getRandomFrom = (arr) => {
    return (arr[Math.floor(Math.random() * arr.length)]);
  }

  getNewState = (initial = false) => {
    const allalys = analyses.slice();
    if (!initial && this.state.aly) {
      const index = allalys.indexOf(this.state.aly);
      if (index > -1) {
        allalys.splice(index, 1);
      }
    }
    const aly = this.getRandomFrom(allalys);
    console.log('answer: ', aly.answer);
    return ({
      aly: aly,
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
    console.log('setAnswer: ', selected);
    this.setState({selected: selected});
  }

  reapro = (set, callback) => {
    const options = set.map((x) => ({value: x, label: this.ltx(rrssrc[x].ltx)}));
//    options.push({value: 'ninguno', label: 'Ninguno'});
    return (
      <Select
        key={'reapro' + this.state.reset}
        options={options}
        onChange={(selected) => callback(selected.map((x) => x.value))}
//        values={value ? [value] : []}
        placeholder={"Ninguno"}
        searchable={false}
        multi={true}
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

  render() {
    const analysis = () => {
      return (
        (this.state.aly ?
          <div className="analysis">
            <div className="simplerow">
              {"La solución puede contener: "}
              {this.makeSet(this.state.aly.set)}
            </div>
            {this.makeQuestion(this.state.aly.question)}
            <div className="simplerow">
              {"Se descartan: "}
              {this.reapro(this.state.aly.set, this.setAnswer)}
            </div>
          </div>
        : null)
      );
    }
    const alyButton = () => {
      return (
        <div className="rrButton">
          <AWindow
            name={'Verificar'}
            onClick={() => this.analysisSchema()}
            secondary={() => (true || !this.state.schema)}
            title={() => (this.state.schema)}
            callback={() => this.reset()}
            schema={() => (this.state.schema)}
          />
        </div>
      );
    }
      
    return (
      <div>
        <MathJaxContext version={3} config={mathJaxConfig}>
          <div className="center">
            <div className="allanalysis">
              {analysis()}
            </div>
            {alyButton()}
          </div>
        </MathJaxContext>
        {this.debugButtons()}
      </div>
    );
  }
    

}


export default Analysis;
