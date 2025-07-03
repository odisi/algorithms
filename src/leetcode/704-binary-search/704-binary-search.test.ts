import { expect, test } from "vitest";
import { BinarySearch } from "./704-binary-search";

const obj = new BinarySearch();

test("Should return array index of searched element", () => {
  const arr = [1, 2, 3, 4, 5];

  expect(obj.execute(arr, 1)).toEqual(0);

  expect(obj.execute(arr, 2)).toEqual(1);

  expect(obj.execute(arr, 3)).toEqual(2);

  expect(obj.execute(arr, 5)).toEqual(4);
});

test("Should return -1 when element is not found", () => {
  const arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

  expect(obj.execute(arr, 10)).toEqual(-1);
});