import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Window from "./Window.js";
import { initTitle, initText } from "./consts.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = "Analisis Qualitativo";
root.render(
  <React.StrictMode>
    {false ?
      <Window
        callback={() => {}}
//        title={initTitle}
        body={initText}
        clickable={false}
        show={true}
      >
      </Window>
    : null}
    <Main />
  </React.StrictMode>
);

