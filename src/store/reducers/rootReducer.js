// this  function is  use to combine all the reducer that use in our app
import { combineReducers } from "redux";


import garagePageReducer from "./garagePageReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import { firestoreReducer } from "react-redux-firebase";

// this file  holds all the reducer we  made
const rootReducer = combineReducers({
  authReducer,
  garagePageReducer,
  userReducer,
  firestoreReducer
});

export default rootReducer;
