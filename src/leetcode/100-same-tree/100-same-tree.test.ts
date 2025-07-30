import { BinaryTree } from "../../binary-tree/binary-tree";
import { expect, test } from "vitest";
import { SameTree } from "./100-same-tree";

test("Should return same tree", () => {
  const elements = [1, 2, 3];

  const binaryTree = new BinaryTree<number>();

  const bt1 = binaryTree.buildBinaryTree(elements);

  const bt2 = binaryTree.buildBinaryTree(elements);

  const rs = SameTree.isSame(bt1!, bt2!);

  expect(rs).toBeTruthy();
});

test("Should return not same tree", () => {
  const elements1 = [1, 2];
  const elements2 = [1, null, 2];

  const binaryTree = new BinaryTree<number | null>();

  const bt1 = binaryTree.buildBinaryTree(elements1);

  const bt2 = binaryTree.buildBinaryTree(elements2);

  const rs = SameTree.isSame(bt1!, bt2!);

  expect(rs).toBeFalsy();
});

test("Should return not same tree", () => {
  const elements1 = [1, 2, 1];
  
  const elements2 = [1, 1, 2];

  const binaryTree = new BinaryTree<number | null>();

  const bt1 = binaryTree.buildBinaryTree(elements1);

  const bt2 = binaryTree.buildBinaryTree(elements2);

  const rs = SameTree.isSame(bt1!, bt2!);

  expect(rs).toBeFalsy();
});