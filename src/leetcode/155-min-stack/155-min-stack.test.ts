import { expect, test } from "vitest";
import { MinStack } from "./155-min-stack";

const obj = new MinStack();

test("Should return indices of the two numbers such that they add up to target", () => {
  obj.push(3);
  obj.push(1);
  obj.push(4);
  obj.push(2);
  obj.push(0);

  expect(obj.getMin()).toEqual(0);

  expect(obj.top()).toEqual(0);

  obj.pop()

  expect(obj.getMin()).toEqual(1);

  expect(obj.top()).toEqual(2);

  obj.pop();

  expect(obj.getMin()).toEqual(1);

  expect(obj.top()).toEqual(4);

  obj.pop();

  expect(obj.getMin()).toEqual(1);

  expect(obj.top()).toEqual(1);

  obj.pop();

  expect(obj.getMin()).toEqual(3);

  expect(obj.top()).toEqual(3);
});
