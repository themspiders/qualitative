import "./Main.css";
import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import RWindow from "./RWindow.js";
import Button from "react-bootstrap/Button";
import Window from "./Window.js";
import { bottomright } from "./consts.js";
import Reactions from "./Reactions.js";
import Analysis from "./Analysis.js";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      analysis: null,
    };
  }

  setReactions = () => {
    this.setState({analysis: false});
  }

  setAnalysis = () => {
    this.setState({analysis: true});
  }

  render() {
    return (
      (this.state.analysis === null ?
        <div className="center">
          <Button onClick={() => this.setReactions()}>
            {'Reacciones'}
          </Button>
          <Button onClick={() => this.setAnalysis()}>
            {'Analisis'}
          </Button>
        </div>
      : (this.state.analysis === true
        ? <Analysis
          />
        : <Reactions
          />
        )
      )
    );
  }
}


export default Main;
