import { combineReducers } from "redux";
import { queryReducer } from "./query/query.reducer.js";
import { regulationsReducer } from "./regulations/regulations.reducer.js";

export const rootReducer = combineReducers({
  query: queryReducer,
  regulations: regulationsReducer,
});
