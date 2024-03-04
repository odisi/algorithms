import { expect, test } from "vitest";
import { Fibonacci } from "./fibonacci";

const fib = new Fibonacci();

test("Should return 0 when input is 0", () => {
  expect(fib.recursive(0)).toBe(0);

  expect(fib.iterative(0)).toBe(0);
});

test("Should return 1 when input is 1", () => {
  expect(fib.recursive(1)).toBe(1);

  expect(fib.iterative(1)).toBe(1);
});

test("Should return 1 when input is 2", () => {
  expect(fib.recursive(2)).toBe(1);

  expect(fib.iterative(2)).toBe(1);
});

test("Should return 2 when input is 3", () => {
  expect(fib.recursive(3)).toBe(2);

  expect(fib.iterative(3)).toBe(2);
});

test("Should return 3 when input is 4", () => {
  expect(fib.recursive(4)).toBe(3);

  expect(fib.iterative(4)).toBe(3);
});

test("Should return 5 when input is 5", () => {
  expect(fib.recursive(5)).toBe(5);

  expect(fib.iterative(5)).toBe(5);
});

test("Should return 8 when input is 6", () => {
  expect(fib.recursive(6)).toBe(8);

  expect(fib.iterative(6)).toBe(8);
});
