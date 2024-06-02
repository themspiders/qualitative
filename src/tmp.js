  }
  div[title="#fffffe"] {
  border: 1px solid #999;
  content: "X";
  position: center;
  top: 0;
  left: 0;
  z-index: -1;
  }

  div[title="#fffffe"]:after {
  background-image: url($
  content: "Xee";
  position: center;
  top: 0;
  left: 0;
  z-index: -1;
}

background-image: url("colorlessback.png");



  div[title="#fffffe"] {
  background-image: url("colorlessback.png");
  border: 1px solid #999;
  content: "zz";
  position: center;
  top: 0;
  left: 0;
  z-index: -1;
  }
  



  div[title="#fffffe"]:after {
  background-image: url("colorlessback.png");

  content: "X"; position: absolute; top: 0; left: 0; bottom: 0; right: 0; z-index: 3; overflow: hidden; font-size: 2em; color: red;    text-align: center; text-shadow: 0px 0px 5px black; background: #0a0a0a8c; padding: 5px;
	animation-name: blinking;

  top: 0;
  left: 0;
  z-index: -1;
}








  div[title="#fffffe"] {
    border: 0px solid #0000FF;
      content: "X";
  font-size: 1.2em;
  position: absolute;
  top: -5px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  z-index: -1;
  padding: 5px;
  }

  div[title="#fffffe"]:after {
  background-image: url("colorlessback.png");
  border: 0px solid #999;
  content: "X";
  font-size: 1.2em;
  position: absolute;
  top: -5px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  z-index: -1;
  padding: 5px;

}



//          {reapro("ion", this.setion, this.state.ions)}
          {this.ltx("~ + ~")}
          {reapro("rea", this.setrea, this.state.irea)}
          {plus("rea2", this.setrea2, this.state.irea2)}
          {plus("rea3", this.setrea3, this.state.irea3)}
          {this.ltx("~ \\rightarrow ~")}
          {reapro("pro", this.setpro, this.state.ipro)}
          {plus("pro2", this.setpro2, this.state.ipro2)}
          {plus("pro3", this.setpro3, this.state.ipro3)}





      const options = Object.keys(this.state.ions).map((xx) => ({value: xx, label: rpltx(xx, this.state.ions)}));

        {false && this.state.reset ?
        <Reapro
//          value={options.find((x) => x.value === this.state[x])}
//          value={{value: this.state["x"], label: ''}}
          value={{}}
          x={this.state["ion"]}
          source={this.state.ions}
          callback={this.setion}
//          options={Object.keys(source).map((x) => ({value: x, label: rpltx(x, source)}))}
          options={options}
        />
        :
        <Reapro
//          value={options.find((x) => x.value === this.state[x])}
//          value={{value: this.state["x"], label: ''}}
          x={this.state["ion"]}
          source={this.state.ions}
          callback={this.setion}
//          options={Object.keys(source).map((x) => ({value: x, label: rpltx(x, source)}))}
          options={options}
        />
        }
      <Select
        key={this.state["reset"]}
        options={options}
//        values={[{value: this.state.ion, label: ''}]}
        values={[]}
        onChange={(select) => this.setion(select[0].value)}
//        values={(this.props.values ? this.tovl(this.props.values) : [])}
//        values={[{value: this.props.value, label: this.props.value}]} 
      />










