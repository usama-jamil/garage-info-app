import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Router from "./components/Router";


//Simply importing config file of firebase
import "./config";


import { createStore , applyMiddleware } from "redux";
//that  object  hold all the  reducer in the app
import rootReducer from "./store/reducers/rootReducer";
//Provider is use for bind the store to react
import { Provider } from "react-redux";
//this is  a middle ware to  run async call through  this
import thunk  from "redux-thunk"

//here  you pass object of reducer that manage by createStore
const store = createStore(rootReducer, applyMiddleware(thunk));

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
