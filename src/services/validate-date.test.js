/* eslint-disable jest/valid-expect */

import { expect } from "chai";
import { isValidDate } from "./validate-date.js";

describe("isValidDate - basic functionality", () => {
  it("Return response.isValid : false when passed an empty string", () => {
    const expected = {
      isValid: false,
      err: "Invalid date or time",
      date: null,
    };
    const actual = isValidDate("");
    expect(actual).to.deep.equal(expected);
  });
  it("Return response.isValid : false when passed undefined", () => {
    const expected = { isValid: false, err: "Invalid date or time", date: null };
    const actual = isValidDate(undefined);
    expect(actual).to.deep.equal(expected);
  });
  it("Return response.isValid : false when passing a previous date", () => {
    const previousDate = new Date("2020", "09", "10");
    const expected = {
      isValid: false,
      err: "Date must be ahead in time",
      date: null,
    };
    const actual = isValidDate(previousDate);
    expect(actual).to.deep.equal(expected);
  });

  it("Return date and isValid:true error:null when ok", () => {
    const dateOK = new Date("2023", "09", "10");
    const expected = {
      isValid: true,
      err: null,
      date: dateOK,
    };
    const actual = isValidDate(dateOK);
    expect(actual).to.deep.equal(expected);
  });
});
