import { DATA } from "../utils/temp-data.js";

/**
 *
 * @param {number} lastDigitOfPlate
 * @param {Date} date
 * @return {boolean}
 */
export const isAllowed = (lastDigitOfPlate, date) => {
  if (
    lastDigitOfPlate === "" ||
    date === "" ||
    lastDigitOfPlate === undefined ||
    date === undefined
  ) {
    return undefined;
  }
  if (date.getDay() === 0 || date.getDate() === 6) return true;
};


