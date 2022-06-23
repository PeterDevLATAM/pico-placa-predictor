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
  it("Return true when valid date", () => {
    const validDateTime = new Date("2022-06-20T07:07:00.000Z");
    const validPlate = 3;
    const expected = true;
    const actual = isAllowed(validPlate, validDateTime);
    expect(actual).to.equal(expected);
  });

  it("Return false when invalid date and time", () => {
    const notValidDateTime = new Date("2022-07-04T08:00:00.000Z");
    const notValidPlate = 2;
    const expected = false;
    const actual = isAllowed(notValidPlate, notValidDateTime);
    expect(actual).to.equal(expected);
  });

  it("Return true when prohibited date and valid time", () => {
    const validDateTime = new Date("2022-08-02T22:00:00.000Z");
    const validPlate = 4;
    const expected = true;
    const actual = isAllowed(validPlate, validDateTime);
    expect(actual).to.equal(expected);
  });

  it("Return false edge case 06", () => {
    const notValidDateTime = new Date("2022-06-24T06:00:00.000Z");
    const notValidPlate = 9;
    const expected = false;
    const actual = isAllowed(notValidPlate, notValidDateTime);
    expect(actual).to.equal(expected);
  });

  it("Return false edge case 16", () => {
    const notValidDateTime = new Date("2022-06-24T16:00:00.000Z");
    const notValidPlate = 9;
    const expected = false;
    const actual = isAllowed(notValidPlate, notValidDateTime);
    expect(actual).to.equal(expected);
  });

  it("Return false edge case 9.30", () => {
    const notValidDateTime = new Date("2022-06-28T09:30:00.000Z");
    const notValidPlate = 4;
    const expected = false;
    const actual = isAllowed(notValidPlate, notValidDateTime);
    expect(actual).to.equal(expected);
  });

  it("Return false edge case 21:00", () => {
    const notValidDateTime = new Date("2022-06-28T21:00:00.000Z");
    const notValidPlate = 3;
    const expected = false;
    const actual = isAllowed(notValidPlate, notValidDateTime);
    expect(actual).to.equal(expected);
  });

});
