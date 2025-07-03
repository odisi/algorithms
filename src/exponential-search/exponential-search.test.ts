import { expect, test } from "vitest";
import { ExponentialSearch } from "./exponential-search";

const exponentialSearch = new ExponentialSearch();

const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 35, 55, 89, 144, 233, 377, 610, 987];

test("Should return index when target is in array", () => {
  expect(exponentialSearch.execute(arr, 0)).toEqual(0);

  expect(exponentialSearch.execute(arr, 987)).toEqual(17);
});

test("Should return -1 when target is not in array", () => {
  expect(exponentialSearch.execute(arr, 144)).toEqual(13);
});