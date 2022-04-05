import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { store } from "./store/store";
import { toolkitStore } from "./toolkit-store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={toolkitStore}>
    <App />
  </Provider>,

  document.getElementById("root")
);
