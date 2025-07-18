import { expect, test } from "vitest";
import { NumberOf1Bits } from "./191-number-of-1-bits";

test("Should return number of 1 bits", () => {
  // 14 = 1110 in binary
  expect(NumberOf1Bits.execute(11)).toEqual(3);

  // 8 = 1000 in binary
  expect(NumberOf1Bits.execute(128)).toEqual(1);

  // 123 = 1111011 in binary
  expect(NumberOf1Bits.execute(2147483645)).toEqual(30);
});
32