/* eslint-disable jest/valid-expect */
import { Plate } from "../model/plate.model.js";
import { expect } from "chai";
import { isValidPlate } from "./validate-plate.js";

describe("isValidPlate - basic functionality", () => {
  it("Return response.isValid : false when passed an empty string", () => {
    const expected = {isValid: false, plate: null};
    const actual = isValidPlate("");
    expect(actual).to.deep.equal(expected);
  });
  it("Return response.isValid : false when the string has more than 7 chars", () => {
    const expected = {isValid: false, plate: null};
    const actual = isValidPlate("AAAA12345");
    expect(actual).to.deep.equal(expected);
  });
  it("Return response.isValid : false if it has Letters in numbers", () => {
    const expected = {isValid: false, plate: null};
    const actual = isValidPlate("AAA123A");
    expect(actual).to.deep.equal(expected);
  });
  it("Return response.isValid : false if it has numbers in letters", () => {
    const expected = {isValid: false, plate: null};
    const actual = isValidPlate("A1A1234");
    expect(actual).to.deep.equal(expected);
  });
  it("Return Plate object if correct size and correct data", () => {
    const plate = new Plate("AAA", [1, 2, 3, 4]);
    const expected = { isValid: true, plate };
    const actual = isValidPlate("AAA1234");
    expect(actual).to.deep.equal(expected);
  });
});
