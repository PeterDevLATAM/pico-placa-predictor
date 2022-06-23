import { REGULATIONS_ACTION_TYPES } from "./regulations.types";

export const REGULATIONS_INITIAL_STATE={
  data:{}
};

export const regulationsReducer = (state = REGULATIONS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case REGULATIONS_ACTION_TYPES.SET_REGULATIONS:
      return { ...state, data: payload };
    default:
      return state;
  }
};
