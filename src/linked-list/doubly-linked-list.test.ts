import { expect, test } from "vitest";
import { DoublyLinkedList } from "./doubly-linked-list";

test("Should add and remove at head and tail correctly", () => {
  const list = new DoublyLinkedList<number>();

  list.addAtHead(1);

  list.addAtTail(2);

  list.addAtHead(0);

  expect(list.removeAtTail()).toBe(2);

  expect(list.removeAtTail()).toBe(1);

  expect(list.removeAtTail()).toBe(0);

  expect(list.removeAtTail()).toBeNull();
});


test("Should maintain correct previous and next pointers", () => {
  const list = new DoublyLinkedList<number>();

  list.addAtHead(2);

  list.addAtHead(1);

  list.addAtTail(3);

  // @ts-ignore
  const head = list.head!;

  // @ts-ignore
  const mid = head.next!;

  // @ts-ignore
  const tail = list.tail!;

  expect(head.value).toBe(1);

  expect(mid.value).toBe(2);

  expect(tail.value).toBe(3);

  expect(head.previous).toBeNull();

  expect(head.next).toBe(mid);

  expect(mid.previous).toBe(head);

  expect(mid.next).toBe(tail);

  expect(tail.previous).toBe(mid);

  expect(tail.next).toBeNull();
});


test("Should handle string values and size correctly", () => {
  const list = new DoublyLinkedList<string>();

  list.addAtHead("a");

  list.addAtTail("b");

  expect(list.size).toBe(2);

  expect(list.removeAtTail()).toBe("b");

  expect(list.removeAtTail()).toBe("a");

  expect(list.size).toBe(0);
});


test("Should handle single element list correctly", () => {
  const list = new DoublyLinkedList<number>();

  list.addAtHead(42);

  expect(list.size).toBe(1);

  expect(list.removeAtTail()).toBe(42);

  expect(list.size).toBe(0);

  expect(list.removeAtTail()).toBeNull();
});


test("Should handle multiple add and remove operations", () => {
  const list = new DoublyLinkedList<number>();

  for (let i = 0; i < 5; i++) {
    list.addAtTail(i);
  }

  expect(list.size).toBe(5);

  expect(list.removeAtTail()).toBe(4);

  expect(list.removeAtTail()).toBe(3);

  expect(list.removeAtTail()).toBe(2);

  expect(list.removeAtTail()).toBe(1);

  expect(list.removeAtTail()).toBe(0);

  expect(list.size).toBe(0);
}); 