import { expect, test } from "vitest";
import { QuickSort } from "./quick-sort";

test("Should not sort empty array", () => {
  const elements: number[] = [];

  QuickSort.execute(elements, 0, elements.length - 1);

  expect(elements).toEqual([]);
});

test("Should not sort array with just one element", () => {
  const elements: number[] = [10];

  QuickSort.execute(elements, 0, elements.length - 1);

  expect(elements).toEqual([10]);
});

test("Should sort array with more than one element", () => {
  const elements: number[] = [];
  
  const expected: number[] = [];

  for (let index = 0; index < 1000000; index++) {
    const x = Math.floor(Math.random() * 1000000)

    expected.push(x);

    elements.push(x);
  }

  expected.sort((a, b) => a - b);

  QuickSort.execute(elements, 0, elements.length - 1);

  expect(elements).toEqual(expected);
});