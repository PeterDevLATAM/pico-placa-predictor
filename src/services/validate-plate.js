/**
 * @typedef {Object} Response
 * @property {boolean} isValid -isValid
 * @property {string} letters - Letters of the plate
 * @property {Array} numbers - Numbers of the plate
 *
 * @param {string} str - Date
 * @return {Response} 
 */
export const isValidPlate = (str) => {
  if (str === "" || str.length > 7) {
    return { isValid: false, letters: null, numbers: null };
  }
  const letters = str.substr(0, 3);
  const numbers = str.substr(3).split('').map(x=>+x);
  if(numbers.includes(NaN)) return { isValid: false, letters: null, numbers: null }
  if(!/^[a-zA-Z]+$/.test(letters)) return { isValid: false, letters: null, numbers: null }

  return { isValid: true, letters, numbers };
};
