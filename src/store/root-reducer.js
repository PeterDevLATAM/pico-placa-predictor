import { combineReducers } from "redux";
import { queryReducer } from "./query/query.reducer.js";

export const rootReducer = combineReducers({
  query: queryReducer,
});
