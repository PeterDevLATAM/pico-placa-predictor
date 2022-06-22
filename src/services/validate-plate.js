import { Plate } from "../model/plate.model.js";

/**
 * @typedef {Object} Response
 * @property {boolean} isValid -isValid
 * @property {Plate} plate -license plate
 *
 * @param {string} str - Date
 * @return {Response}
 */
export const isValidPlate = (str) => {
  const error = { isValid: false, plate: null };

  if (str === "" || str === undefined || str.length > 7) {
    return error;
  }
  const letters = str.substr(0, 3);
  const numbers = str
    .substr(3)
    .split("")
    .map((x) => +x);

  if (numbers.includes(NaN)) return error;

  if (!/^[a-zA-Z]+$/.test(letters)) return error;

  const plate = new Plate(letters, numbers);
  return { isValid: true, plate };
};
