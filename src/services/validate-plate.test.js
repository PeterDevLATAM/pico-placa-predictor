/* eslint-disable jest/valid-expect */

import { expect } from "chai";
import { isValidPlate } from "./validate-plate";

describe("isValidPlate - basic functionality", () => {
  it("Return response.isValid : false when passed an empty string", () => {
    const expected = { isValid: false, letters: null, numbers: null };
    const actual = isValidPlate("");
    expect(actual).to.deep.equal(expected)
  });
  it("Return response.isValid : false when the string has more than 7 chars", () => {
    const expected = { isValid: false, letters: null, numbers: null };
    const actual = isValidPlate("AAAA12345");
    expect(actual).to.deep.equal(expected)
  });
});
