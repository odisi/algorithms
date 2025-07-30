import { BinaryTree, BinaryTreeNode } from "../../binary-tree/binary-tree";

export class SameTree extends BinaryTree<number> {
  static isSame(t1: BinaryTreeNode<number | null>, t2: BinaryTreeNode<number | null>): boolean {
    if (t1.value != t2.value) {
      return false;
    }

    if ((t1.left == null && t2.left != null) || (t1.left != null && t2.left == null)) {
      return false;
    }

    let rs = true;

    if (t1.left && t2.left) {
      rs &&= SameTree.isSame(t1.left, t2.left);
    }

    if ((t1.right == null && t2.right != null) || (t1.right != null && t2.right == null)) {
      return false;
    }

    if (rs && t1.right && t2.right) {
      return SameTree.isSame(t1.right, t2.right);
    }

    return rs;
  }
}