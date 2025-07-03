import { expect, test } from "vitest";
import { ContainsDuplicate } from "./217-contains-duplicate";

const obj = new ContainsDuplicate();

test("Should return true when any value appears at least twice in the array", () => {
  expect(obj.execute([1,2,3,1])).toBe(true);

  expect(obj.execute([1,1,1,3,3,4,3,2,4,2])).toBe(true);
});

test("Should return false when all values are unique in the array", () => {
  expect(obj.execute([1,2,3,4])).toBe(false);
});