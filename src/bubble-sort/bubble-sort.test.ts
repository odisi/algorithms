import { expect, test } from "vitest";
import { BubbleSort } from "./bubble-sort";

test("Should not sort empty array", () => {
  const elements: number[] = [];

  BubbleSort.execute(elements);

  expect(elements).toEqual([]);
});

test("Should not sort array with just one element", () => {
  const elements: number[] = [10];

  BubbleSort.execute(elements);

  expect(elements).toEqual([10]);
});

test("Should not sort array with just two element", () => {
  const elements: number[] = [10, 7];

  BubbleSort.execute(elements);

  expect(elements).toEqual([7, 10]);
});

test("Should sort array with more than one element", () => {
  const elements: number[] = [];
  
  const expected: number[] = [];

  for (let index = 0; index < 1000; index++) {
    const x = Math.floor(Math.random() * 1000)

    expected.push(x);

    elements.push(x);
  }

  expected.sort((a, b) => a - b);

  BubbleSort.execute(elements);
  
  expect(elements).toEqual(expected);
});