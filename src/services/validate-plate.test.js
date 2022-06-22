/* eslint-disable jest/valid-expect */

import { expect } from "chai";
import { isValidPlate } from "./validate-plate";

describe("isValidPlate - basic functionality", () => {
  it("Return response.isValid : false when passed an empty string", () => {
    const expected = { isValid: false, letters: null, numbers: null };
    const actual = isValidPlate("");
    expect(actual).to.deep.equal(expected);
  });
  it("Return response.isValid : false when the string has more than 7 chars", () => {
    const expected = { isValid: false, letters: null, numbers: null };
    const actual = isValidPlate("AAAA12345");
    expect(actual).to.deep.equal(expected);
  });
  it("Return letters and numbers if correct size", () => {
    const expected = { isValid: true, letters: "AAA", numbers: [1, 2, 3, 4] };
    const actual = isValidPlate("AAA1234");
    expect(actual).to.deep.equal(expected);
  });
  it("Return response.isValid : false if it has Letters in numbers", () => {
    const expected = { isValid: false, letters: null, numbers: null };
    const actual = isValidPlate("AAA123A");
    expect(actual).to.deep.equal(expected);
  });
  it("Return response.isValid : false if it has numbers in letters", () => {
    const expected = { isValid: false, letters: null, numbers: null };
    const actual = isValidPlate("A1A1234");
    expect(actual).to.deep.equal(expected);
  });
});
