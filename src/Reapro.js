import React from "react";
import Select from "react-dropdown-select";
import { MathJax } from "better-react-mathjax";
//import { cations, crea, cpro, rrs } from "./reactions.js";
import "./Main.css";

class Reapro extends React.Component {
  constructor(props) {
    super(props);
    this.reapro = (this.props.reapro ? this.props.reapro : null);
    this.canSelect = true;
    this.source = (this.props.source ? this.props.source : {});
    this.callback = (this.props.callback ? this.props.callback : (() => {}));
//    this.values = (this.props.values ? this.tovl(this.props.values) : []);
//    console.log('values: ', this.values);
    this.options = Object.keys(this.source).map((x) => ({value: x, label: this.rpltx(x)}));
//    this.options = [];
//    this.state = {
//      values1: this.props.values1,
//    };
  }

//  componentDidUpdate(prevProps) {
//    if(prevProps.values1 !== this.props.values1) { 
//      this.setState({values1: this.props.values1});
//    }
//  }

  setReapro(select) {
    console.log('select: ', select);
    console.log('values: ', this.props);
    this.reapro = (select[0] ? select[0].value : null);
    this.callback(this.reapro);
  }

  ltx(x) {
    return (
      <MathJax inline dynamic>
        {`$${x}$`}
      </MathJax>
    );
  }
  
  rpltx(x) {
//    console.log('rpltx: ', x);
    return (this.ltx(this.source[x]['ltx']));
  }

  tovl(arr) {
    console.log('arr: ', arr);
    const y = arr.map(x => ({value: x, label: this.ltx(this.source[x]['ltx'])}));
    console.log('y: ', y);
    return y;
  }    
  
  dropdown(options) {
    return (
      <Select id={'cr3+'} options={options} values={this.values} onChange={(select) => this.setReapro(select)} />
    );
  }

  display(item, sel) {
    return (this.canSelect ? this.dropdown(this.options) : this.rpltx(this.reapro));
  }
  
  getOptions = () => {
    const ss = this.props.source;
    this.optionss = Object.keys(ss).map((x) => ({value: x, label: this.ltx(ss[x]['ltx'])}));
  }

  render() {
//    console.log(this.options);
//    const options = Object.keys(this.source).map((x) => ({value: x, label: this.rpltx(x)}));
//    this.getOptions();
//    const value = this.props.options.find((x) => x.value === this.props.value);
    var value = this.props.valuex;
    console.log('value: ', value);
//    console.log('render: ', this.props.value, value);
//    console.log(this.props.values.length > 0 ? this.ltx(this.source[this.props.values[0]]['ltx']));
//this.ltx(this.source[this.props.values[0]]['ltx'])
//    const ltx = this.ltx(this.source[this.props.values[0]]['ltx']);

    return (
      <Select 
        options={this.props.options}
        onChange={(select) => this.setReapro(select)}
//        values={(this.props.values ? this.tovl(this.props.values) : [])}
//        values={[{value: this.props.value, label: this.props.value}]} 
          values={value ? [value] : []}
      />
    );
  }
      
}

export default Reapro;
