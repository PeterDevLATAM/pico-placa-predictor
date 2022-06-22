/* eslint-disable jest/valid-expect */

import { expect } from "chai";
import { isAllowed } from "./check-if-allowed.js";

describe("isAllowed - basic functionality", () => {
  it("Return undefined when passed an empty string", () => {
    const expected = undefined;
    const actual = isAllowed("", "");
    expect(actual).to.equal(expected);
  });
  it("Return undefined when one of params are undefined", () => {
    const expected = undefined;
    const actual = isAllowed("");
    expect(actual).to.equal(expected);
  });
  it("Return undefined when both params are undefined", () => {
    const expected = undefined;
    const actual = isAllowed();
    expect(actual).to.equal(expected);
  });
  it("Return true when date is weekend", () => {
    const validDate = new Date("2022-06-26T11:46:00.000");
    const expected = true;
    const actual = isAllowed(0, validDate);
    expect(actual).to.equal(expected);
  });
  it("Return true when valid date", () => {
    const validDateTime = new Date("2022-06-20T07:07:00.000");
    const validPlate = 3;
    const expected = true;
    const actual = isAllowed(validPlate, validDateTime);
    expect(actual).to.equal(expected);
  });
  it("Return false when invalid date and time", () => {
    const notValidDateTime = new Date("2022-06-20T07:07:00.000");
    const notValidPlate = 2;
    const expected = false;
    const actual = isAllowed(notValidPlate, notValidDateTime);
    expect(actual).to.equal(expected);
  });
  it("Return true when invalid date and valid time", () => {
    const validDateTime = new Date("2022-06-20T03:07:00.000");
    const validPlate = 2;
    const expected = true;
    const actual = isAllowed(validPlate, validDateTime);
    expect(actual).to.equal(expected);
  });
});
