import { BinaryTree } from "../../binary-tree/binary-tree";
import { expect, test } from "vitest";

test("Should has path sum", () => {
  const elements = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];

  const binaryTree = new BinaryTree<number | null>();

  const bt = binaryTree.buildBinaryTree(elements);

  const rs = binaryTree.hasPathSum(bt, 18);

  expect(rs).toBeTruthy();
});

test("Should not has path sum", () => {
  const elements = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];

  const binaryTree = new BinaryTree<number | null>();

  const bt = binaryTree.buildBinaryTree(elements);

  const rs = binaryTree.hasPathSum(bt, 17);

  expect(rs).toBeFalsy();
});