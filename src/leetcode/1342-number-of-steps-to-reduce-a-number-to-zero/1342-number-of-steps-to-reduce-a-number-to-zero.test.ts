import { expect, test } from "vitest";
import { NumberOfStepsToReduceANumberToZero } from "./1342-number-of-steps-to-reduce-a-number-to-zero";

test("Should return missing value", () => {
  // 14 = 1110 in binary
  expect(NumberOfStepsToReduceANumberToZero.execute(14)).toEqual(6);

  // 8 = 1000 in binary
  expect(NumberOfStepsToReduceANumberToZero.execute(8)).toEqual(4);

  // 123 = 1111011 in binary
  expect(NumberOfStepsToReduceANumberToZero.execute(123)).toEqual(12);
});
32