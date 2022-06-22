import { QUERY_ACTION_TYPES } from "./query.types.js";
import { createAction } from "../../utils/reducer.utils.js";

export const setQueryStatus = (queryStatus) => {
  return createAction(QUERY_ACTION_TYPES.SET_QUERY_STATUS, queryStatus);
};
