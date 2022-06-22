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
    const validDate = new Date("2022-06-26T11:46:00.000Z");
    const expected = true;
    const actual = isAllowed(0, validDate);
    expect(actual).to.equal(expected);
  });
  it("Return true when valid date and time", () => {
    const validDateTime = new Date("2022-06-20T07:07:00.000Z");
    const validPlate = 3;
    const expected = true;
    const actual = isAllowed(validPlate, validDateTime);
    expect(actual).to.equal(expected);
  });
});
