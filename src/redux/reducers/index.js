import { combineReducers } from "redux";
import callsReducer from "./callActivities";

const rootReducer = combineReducers({
  callsReducer,
});

export default rootReducer;
