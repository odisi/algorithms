import { BinaryTree } from "../../binary-tree/binary-tree";
import { expect, test } from "vitest";
import { BinaryTreeOrderTraversal } from "./102-binary-tree-level-order-traversal";

test("Should create level order by traversal binary tree 100", () => {
  const elements = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];

  const binaryTree = new BinaryTree<number | null>();

  const bt = binaryTree.buildBinaryTree(elements);

  const rs = BinaryTreeOrderTraversal.execute(bt!);

  expect(rs).toEqual([[5], [4, 8], [11, 13, 4], [7, 2, 1]]);
});

test("Should create level order by traversal binary tree 2 100", () => {
  const elements = [3, 9, 20, null, null, 15, 7];

  const binaryTree = new BinaryTree<number | null>();

  const bt = binaryTree.buildBinaryTree(elements);

  const rs = BinaryTreeOrderTraversal.execute(bt!);

  expect(rs).toEqual([[3], [9, 20], [15, 7]]);
});

test("Should create level order by traversal binary tree 2 100", () => {
  const elements: number[] = [];

  const binaryTree = new BinaryTree<number | null>();

  const bt = binaryTree.buildBinaryTree(elements);

  const rs = BinaryTreeOrderTraversal.execute(bt!);

  expect(rs).toEqual([]);
});