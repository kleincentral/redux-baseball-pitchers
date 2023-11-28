import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const pitcherNames = (
  state = ["Maud Nelson", "Ila Borders", "Don Newcombe", "CC Sabathia"],
  action
) => {
  if (action.type === "ADD_PITCHER") {
    return [...state, action.payload];
  }
  return state;
};

const catcherNames = (
  state = ["Roy Campanella", "Elston Howard", "Kenji Jojima"],
  action
) => {
  if (action.type === "ADD_CATCHER") {
    return [...state, action.payload];
  }
  return state;
};

const players = createStore(
  combineReducers({
    pitcherNames,
    catcherNames,
  })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={players}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
