import { expect, test } from "vitest";
import { TwoSum } from "./1-two-sum";

const obj = new TwoSum();

test("Should return indices of the two numbers such that they add up to target", () => {
  expect(obj.execute([2, 7, 11, 15], 9)).toEqual([0, 1]);

  expect(obj.execute([3, 2, 4], 6)).toEqual([1, 2]);

  expect(obj.execute([3, 3], 6)).toEqual([0, 1]);
});
