import { combineReducers } from "redux";
import homeReducer from "./Components/reducer";

const rootReducer = combineReducers({
  homeReducer: homeReducer,
});

export default rootReducer;
