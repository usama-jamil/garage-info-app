import garagePageReducer from "./garagePageReducer";
import authReducer from "./authReducer";

// this  function is  use to combine all the reducer that use in our app
import { combineReducers } from "redux";

// this file  holds all the reducer we  made

const rootReducer = combineReducers({
  authReducer,
  garagePageReducer
});

export default rootReducer;
