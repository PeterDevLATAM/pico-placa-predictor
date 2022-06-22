import { QUERY_ACTION_TYPES } from "./query.types.js";

export const QUERY_INITIAL_STATE = {
  onGoing: true,
  approved: false,
  err: null,
};

export const queryReducer = (state = QUERY_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case QUERY_ACTION_TYPES.SET_QUERY_STATUS:
      return { ...state, payload };
    default:
      return state;
  }
};
