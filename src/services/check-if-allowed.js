import { DATA } from "../utils/temp-data.js";
const getComparingDate = (timeString, date) => {
  const formatYmd = date.toISOString().slice(0, 10);
  const comparingDate = new Date(`${formatYmd}T${timeString}.000Z`);
  return comparingDate;
};

/**
 * 
 * 
 * @param {number} lastDigitOfPlate
 * @param {Date} date
 * @param {Object} data
 * @return {boolean}
 */
export const isAllowed = (lastDigitOfPlate, date, data) => {
  if (
    lastDigitOfPlate === undefined ||
    date === undefined ||
    lastDigitOfPlate === "" ||
    date === ""
  ) {
    return undefined;
  }
  const day = date.getDay();

  if (day === 0 || day === 6) return true;

  if (!data[day].forbidenPlates[lastDigitOfPlate]) {
    return true;
  }
  //Check if not forbidden
  const start1 = getComparingDate(data[day].firstPeriod.start, date);
  const end1 = getComparingDate(data[day].firstPeriod.end, date);
  const start2 = getComparingDate(data[day].secondPeriod.start, date);
  const end2 = getComparingDate(data[day].secondPeriod.end, date);

  if (
    DATA[day].forbidenPlates[lastDigitOfPlate] &&
    ((date >= start1 && date <= end1) || (date >= start2 && date <= end2))
  ) {
    return false;
  } else {
    return true;
  }
};
