import { isValidDate } from "./validate-date";
import { isValidPlate } from "./validate-plate";
import { data } from "../utils/temp-data";

/**
 *
 * @param {number} lastDigitOfPlate
 * @param {Date} date
 * @return {boolean}
 */
export const isAllowed = (lastDigitOfPlate, date) => {
  if (lastDigitOfPlate === "" || date === "" || !lastDigitOfPlate || !date)
    return undefined;
};
