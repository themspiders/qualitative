import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = "Analisis Qualitativo";
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

