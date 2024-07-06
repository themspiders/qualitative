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
        <div>
          <div className="center">
            <Button onClick={() => this.setReactions()}>
              {'Reacciones'}
            </Button>
            <Button onClick={() => this.setAnalysis()}>
              {'Análisis'}
            </Button>
            <Button onClick={() => {}} disabled={true} variant="dark">
              {'Orgánica'}
            </Button>
          </div>
          <div className="bottomright">
            {bottomright}
          </div>
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
