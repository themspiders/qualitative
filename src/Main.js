import "./Main.css";
import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import RWindow from "./RWindow.js";
import Button from "react-bootstrap/Button";
import Window from "./Window.js";
import { bottomright } from "./consts.js";
import Reactions from "./Reactions.js";
import Analysis from "./Analysis.js";
import Organics from "./Organics.js";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
//      screen: null,
      screen: null,
    };
  }

  setScreen = (screen) => {
    this.setState({screen: screen});
 }

  render() {
    return (
      (this.state.screen === null ?
        <div>
          <div className="center">
            <Button onClick={() => this.setScreen('reactions')}>
              {'Reacciones'}
            </Button>
            <Button onClick={() => this.setScreen('analysis')}>
              {'Análisis'}
            </Button>
            <Button onClick={() => this.setScreen('organics')} disabled={true} variant="dark">
              {'Orgánica'}
            </Button>
          </div>
          <div className="bottomright">
            {bottomright}
          </div>
        </div>
      : (this.state.screen === 'analysis'
        ? <Analysis
          />
        : (this.state.screen === 'reactions'
          ? <Reactions
            />
          : <Organics
            />
          )
        )
      )
    );
  }
}

export default Main;
