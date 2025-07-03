import { expect, test } from "vitest";
import { ContainsDuplicateII } from "./219-contains-duplicate-ii";

const obj = new ContainsDuplicateII();

test("Should return true when there are two distinct indices in the array where nums[i] == nums[j] and abs(i - j) <= k", () => {
  expect(obj.execute([1,2,3,1], 3)).toBe(true);

  expect(obj.execute([1,0,1,1], 1)).toBe(true);
});

test("Should return false when there are not two distinct indices in the array where nums[i] == nums[j] or abs(i - j) > k", () => {
  expect(obj.execute([1,2,3,1,2,3], 2)).toBe(false);
});