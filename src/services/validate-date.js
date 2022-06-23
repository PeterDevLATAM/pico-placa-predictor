/**
 * @typedef {Object} Response
 * @property {boolean} isValid -isValid
 * @property {string} err - error message
 * @property {Date} date - date
 *
 * @param {Date} date - Date
 * @return {Response}
 */

export const isValidDate = (date) => {
  const now = new Date();
  if (!(date instanceof Date && !isNaN(date)))
    return { isValid: false, err: "Invalid date or time", date: null };

  if (date === "" || date === undefined)
    return { isValid: false, err: "Invalid date or time", date: null };

  if (date < now) {
    return { isValid: false, err: "Date must be ahead in time", date: null };
  }

  return { isValid: true, err: null, date: date };
};
