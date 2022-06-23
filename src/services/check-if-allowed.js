import { DATA } from "../utils/temp-data.js";
const getComparingDate = (timeString, date) => {
  const formatYmd = date.toISOString().slice(0, 10);
  const comparingDate = new Date(`${formatYmd}T${timeString}.000`);
  return comparingDate;
};

/**
 *
 * @param {number} lastDigitOfPlate
 * @param {Date} date
 * @return {boolean}
 */
export const isAllowed = (lastDigitOfPlate, date) => {
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

  if (!DATA[day].forbidenPlates[lastDigitOfPlate]) {
    return true;
  }
  //Check if not forbidden
  const start1 = getComparingDate(DATA[day].firstPeriod.start, date);
  const end1 = getComparingDate(DATA[day].firstPeriod.end, date);
  const start2 = getComparingDate(DATA[day].secondPeriod.start, date);
  const end2 = getComparingDate(DATA[day].secondPeriod.end, date);

  if (
    DATA[day].forbidenPlates[lastDigitOfPlate] &&
    ((date >= start1 && date < end1) || (date >= start2 && date < end2))
  ) {
    return false;
  } else {
    return true;
  }
};
