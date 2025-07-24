import { expect, test } from "vitest";
import { CountingBits } from "./338-counting-bits";

test("Should return number of bits 1", () => {
  expect(CountingBits.execute(2)).toEqual([0, 1, 1]);

  expect(CountingBits.execute(5)).toEqual([0, 1, 1, 2, 1, 2]);
});
32