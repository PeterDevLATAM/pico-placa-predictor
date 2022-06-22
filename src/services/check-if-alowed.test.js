/* eslint-disable jest/valid-expect */

import { expect } from "chai";
import { isAllowed } from "./check-if-allowed";

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
    const date= new Date()
    const expected = undefined;
    const actual = isAllowed();
    expect(actual).to.equal(expected);
  });
  
});
