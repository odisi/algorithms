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

test("Should invert an empty list", () => {
  const list = new LinkedList<number>();

  list.invert();

  // Helper to collect values
  const values: number[] = [];
  
  // @ts-ignore
  let node = list.head;

  while (node) {
    values.push(node.value);

    node = node.next;
  }

  expect(values).toEqual([]);

  expect(list.size).toBe(0);
});

test("Should invert a single-element list", () => {
  const list = new LinkedList<number>();

  list.addAtHead(42);

  list.invert();

  const values: number[] = [];
  
  // @ts-ignore
  let node = list.head;

  while (node) {
    values.push(node.value);

    node = node.next;
  }

  expect(values).toEqual([42]);

  expect(list.size).toBe(1);
});

test("Should invert a multi-element list", () => {
  const list = new LinkedList<number>();

  [1, 2, 3, 4, 5].forEach((v) => list.addAtTail(v));

  list.invert();

  const values: number[] = [];

  // @ts-ignore
  let node = list.head;

  while (node) {
    values.push(node.value);

    node = node.next;
  }

  expect(values).toEqual([5, 4, 3, 2, 1]);

  expect(list.size).toBe(5);
});

test("Should return null for middle of empty list", () => {
  const list = new LinkedList<number>();

  expect(list.middle()).toBeNull();
});

test("Should return the only node for single element list", () => {
  const list = new LinkedList<number>();

  list.addAtHead(42);

  const middle = list.middle();

  expect(middle).not.toBeNull();

  expect(middle!.value).toBe(42);
});

test("Should return the middle node for odd number of elements", () => {
  const list = new LinkedList<number>();

  [1, 2, 3, 4, 5].forEach((v) => list.addAtTail(v));

  const middle = list.middle();

  expect(middle).not.toBeNull();

  expect(middle!.value).toBe(3);
});

test("Should return the second middle node for even number of elements", () => {
  const list = new LinkedList<number>();

  [1, 2, 3, 4, 5, 6].forEach((v) => list.addAtTail(v));

  const middle = list.middle();

  expect(middle).not.toBeNull();

  expect(middle!.value).toBe(4);
});

test("Should return false for a list with no cycle", () => {
  const list = new LinkedList<number>();

  [1, 2, 3, 4, 5].forEach((v) => list.addAtTail(v));

  expect(list.hasCycle()).toBe(false);
});

test("Should return true for a list with a simple cycle (tail connects to head)", () => {
  const list = new LinkedList<number>();

  [1, 2, 3, 4, 5].forEach((v) => list.addAtTail(v));

  // @ts-ignore
  let head = list.head;

  // @ts-ignore
  let tail = list.tail;
  
  if (tail && head) {
    tail.setNext(head);
  }

  expect(list.hasCycle()).toBe(true);
});

test("Should return true for a list with a cycle in the middle", () => {
  const list = new LinkedList<number>();

  [1, 2, 3, 4, 5].forEach((v) => list.addAtTail(v));

  // @ts-ignore
  let head = list.head;

  // Find the third node
  let third = head;
  
  for (let i = 0; i < 2 && third; i++) {
    third = third.next;
  }
  
  // @ts-ignore
  let tail = list.tail;
  
  if (tail && third) {
    tail.setNext(third);
  }

  expect(list.hasCycle()).toBe(true);
});

test("Should return false for an empty list (no node)", () => {
  const list = new LinkedList<number>();

  expect(list.hasCycle()).toBe(false);
});

test("Should return false for a single node (no cycle)", () => {
  const list = new LinkedList<number>();

  list.addAtHead(42);

  expect(list.hasCycle()).toBe(false);
});

test("Should return true for a single node with a cycle (node points to itself)", () => {
  const list = new LinkedList<number>();

  list.addAtHead(99);

  // @ts-ignore
  if (list.head) {
    // @ts-ignore
    list.head.setNext(list.head);
  }

  expect(list.hasCycle()).toBe(true);
});
