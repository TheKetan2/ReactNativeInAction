import { combineReducers } from "redux";
import bookReducer from "./bookReducer";

const rootReducers = combineReducers({ bookReducer });

export default rootReducers;
