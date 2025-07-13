import { expect, test } from "vitest";
import { MergeSort } from "./merge-sort";

test("Should not sort empty array", () => {
  const elements: number[] = [];

  const rs = MergeSort.execute(elements);

  expect(rs).toEqual([]);
});

test("Should not sort array with just one element", () => {
  const elements: number[] = [10];

  const rs = MergeSort.execute(elements);

  expect(rs).toEqual([10]);
});

test("Should not sort array with just two element", () => {
  const elements: number[] = [10, 8];

  const rs = MergeSort.execute(elements);

  expect(rs).toEqual([8, 10]);
});

test("Should not sort array with just three element", () => {
  const elements: number[] = [10, 8, 9];

  const rs = MergeSort.execute(elements);

  expect(rs).toEqual([8, 9, 10]);
});

test("Should sort array with more than one element", () => {
  const elements: number[] = [];

  const expected: number[] = [];

  const size = 10;

  for (let index = 0; index < size; index++) {
    const x = Math.floor(Math.random() * size)

    expected.push(x);

    elements.push(x);
  }

  expected.sort((a, b) => a - b);

  const rs = MergeSort.execute(elements);

  expect(rs).toEqual(expected);
});