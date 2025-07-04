import { expect, test } from "vitest";
import { LinkedList } from "./linked-list";

test("Should return correct values when removing at head and tail", () => {
  const list = new LinkedList<number>();

  list.addAtHead(1);

  list.addAtTail(2);

  list.addAtTail(3);

  expect(list.removeAtHead()).toBe(1);

  expect(list.removeAtTail()).toBe(3);

  expect(list.removeAtHead()).toBe(2);

  expect(list.removeAtHead()).toBeNull();

  expect(list.removeAtTail()).toBeNull();
});

test("Should handle string values", () => {
  const list = new LinkedList<string>();

  list.addAtHead("a");

  list.addAtTail("b");

  expect(list.size).toBe(2);

  expect(list.removeAtHead()).toBe("a");

  expect(list.removeAtTail()).toBe("b");

  expect(list.size).toBe(0);
});

test("Should handle single element list correctly", () => {
  const list = new LinkedList<number>();

  list.addAtHead(42);

  expect(list.size).toBe(1);

  expect(list.removeAtTail()).toBe(42);

  expect(list.size).toBe(0);

  expect(list.removeAtHead()).toBeNull();

  expect(list.removeAtTail()).toBeNull();
});

test("Should handle multiple add and remove operations", () => {
  const list = new LinkedList<number>();

  for (let i = 0; i < 5; i++) {
    list.addAtTail(i);
  }

  expect(list.size).toBe(5);

  expect(list.removeAtHead()).toBe(0);

  expect(list.removeAtTail()).toBe(4);

  expect(list.removeAtHead()).toBe(1);

  expect(list.removeAtTail()).toBe(3);

  expect(list.removeAtHead()).toBe(2);

  expect(list.size).toBe(0);
});
