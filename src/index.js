import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import './fonts/Rohn/rohn_bold.ttf';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
