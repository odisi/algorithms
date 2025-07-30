import { BinaryTree } from "../../binary-tree/binary-tree";
import { expect, test } from "vitest";

test("Should create level order by traversal binary tree", () => {
  const elements = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];

  const binaryTree = new BinaryTree<number | null>();

  const bt = binaryTree.buildBinaryTree(elements);

  const rs = binaryTree.orderTraversal(bt);

  expect(rs).toEqual([[5], [4, 8], [11, 13, 4], [7, 2, 1]]);
});

test("Should create level order by traversal binary tree 2", () => {
  const elements = [3, 9, 20, null, null, 15, 7];

  const binaryTree = new BinaryTree<number | null>();

  const bt = binaryTree.buildBinaryTree(elements);

  const rs = binaryTree.orderTraversal(bt);

  expect(rs).toEqual([[3], [9, 20], [15, 7]]);
});

test("Should create level order by traversal binary tree 2", () => {
  const elements: number[] = [];

  const binaryTree = new BinaryTree<number | null>();

  const bt = binaryTree.buildBinaryTree(elements);

  const rs = binaryTree.orderTraversal(bt);

  expect(rs).toEqual([]);
});