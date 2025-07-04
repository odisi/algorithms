import { expect, test } from "vitest";
import { LinkedList } from "./linked-list";

const obj = new LinkedList<number>();

test("Should return size of linked list", () => {
  obj.addAtHead(10);

  expect(obj.size).toEqual(1);

  obj.addAtHead(14);

  expect(obj.size).toEqual(2);

  obj.addAtTail(20);

  expect(obj.size).toEqual(3);

  obj.addAtTail(19);

  expect(obj.size).toEqual(4);

  obj.removeAtHead();

  expect(obj.size).toEqual(3);

  obj.removeAtHead();

  expect(obj.size).toEqual(2);

  obj.removeAtTail();

  expect(obj.size).toEqual(1);

  obj.removeAtTail();

  expect(obj.size).toEqual(0);

  obj.removeAtTail();

  expect(obj.size).toEqual(0);

  obj.removeAtHead();
  
  expect(obj.size).toEqual(0);
});
