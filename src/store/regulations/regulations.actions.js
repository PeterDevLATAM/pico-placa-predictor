import { REGULATIONS_ACTION_TYPES } from "./regulations.types.js";
import { createAction } from "../../utils/reducer.utils.js";

export const setRegulations = (regulations) => {
  return createAction(REGULATIONS_ACTION_TYPES.SET_REGULATIONS, regulations);
};
