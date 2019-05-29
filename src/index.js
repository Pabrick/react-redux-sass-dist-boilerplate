import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import webpackgif from './assets/images/webpack.gif';

ReactDOM.render(<App />, document.getElementById("root"));
document.getElementById('webpack-gif').setAttribute('src', webpackgif);