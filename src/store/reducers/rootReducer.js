// this  function is  use to combine all the reducer that use in our app
import { combineReducers } from "redux";


import garagePageReducer from "./garagePageReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";

// this file  holds all the reducer we  made
const rootReducer = combineReducers({
  authReducer,
  garagePageReducer,
  userReducer
});

export default rootReducer;
