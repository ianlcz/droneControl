import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-globally";
import App from "./App";
import "./index.css";

const initialState = {
  isDroneConnected: false,
};

ReactDOM.render(
  <Provider globalState={initialState}>
    <App />
  </Provider>,
  document.getElementById("root")
);
