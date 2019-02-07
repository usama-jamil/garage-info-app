import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Router from "./components/Router";

import { createStore } from "redux";
//Simply importing config file of firebase
import "./config";
//that  object  hold all the  reducer in the app
import rootReducer from "./store/reducers/rootReducer";
//Provider is use for bind the store to react
import { Provider } from "react-redux";

//here  you pass object of reducer that manage by createStore
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
