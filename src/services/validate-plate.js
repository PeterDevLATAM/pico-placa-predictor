export const isValidPlate = (str) => {
  if (str === "" || str.length > 7)
    return { isValid: false, letters: null, numbers: null };
};
