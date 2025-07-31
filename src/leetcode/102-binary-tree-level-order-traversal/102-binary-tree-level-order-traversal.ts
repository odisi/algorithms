import { BinaryTree, BinaryTreeNode } from "../../binary-tree/binary-tree";

export class BinaryTreeOrderTraversal extends BinaryTree<number> {
  static execute(tree: BinaryTreeNode<number | null> | null): number[][] {
    if (tree == null) {
      return []
    }

    const rs: number[][] = [];

    const queue: BinaryTreeNode<number | null>[] = [tree];

    while (queue.length > 0) {
      const level: number[] = [];

      const queueLength = queue.length;

      for (let index = 0; index < queueLength; index++) {
        const node = queue.shift();

        level.push(node!.value!)

        if (node!.left) {
          queue.push(node!.left);
        }

        if (node!.right) {
          queue.push(node!.right);
        }
      }

      if (level.length > 0) {
        rs.push(level);
      }
    }

    return rs;
  }
}