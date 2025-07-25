import { expect, test } from "vitest";
import { BinaryTree, BinaryTreeNode } from "./binary-tree";

const binaryTree = new BinaryTree<number>();

binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(8);
binaryTree.insert(1);
binaryTree.insert(4);
binaryTree.insert(7);
binaryTree.insert(9);

test("Should traverse binary tree in pre-order", () => {
  const expected: number[] = [5, 3, 1, 4, 8, 7, 9];

  const rs = binaryTree.traversePreOrder();

  expect(rs).toEqual(expected);
});

test("Should traverse binary tree in in-order", () => {
  const expected: number[] = [1, 3, 4, 5, 7, 8, 9];

  const rs = binaryTree.traverseInOrder();

  expect(rs).toEqual(expected);
});

test("Should traverse binary tree in post-order", () => {
  const expected: number[] = [1, 4, 3, 7, 9, 8, 5];

  const rs = binaryTree.traversePostOrder();

  expect(rs).toEqual(expected);
});

test("Should find item in binary tree", () => {
  const element = 9;

  const expected: BinaryTreeNode<number> = new BinaryTreeNode(element);

  const rs = binaryTree.find(element);

  expect(rs).toEqual(expected);
});

test("Should not find item in binary tree", () => {
  const element = 2;

  const rs = binaryTree.find(element);

  expect(rs).toBeNull();
});

test("Should find item by dfs in binary tree", () => {
  const element = 9;

  const expected: BinaryTreeNode<number> = new BinaryTreeNode(element);

  const rs = binaryTree.findDFS(element);

  expect(rs).toEqual(expected);
});

test("Should not find item by dfs in binary tree", () => {
  const element = 2;

  const rs = binaryTree.find(element);

  expect(rs).toBeNull();
});