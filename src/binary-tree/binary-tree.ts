export class BinaryTreeNode<T> {
  left: BinaryTreeNode<T> | null = null;
  right: BinaryTreeNode<T> | null = null;
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

export class BinaryTree<T> {
  private root: BinaryTreeNode<T> | null = null;

  find(value: T): BinaryTreeNode<T> | null {
    return this.findNode(this.root, value);
  }

  findDFS(value: T): BinaryTreeNode<T> | null {
    return this.dfs(this.root, value);
  }

  insert(value: T): void {
    if (this.root === null) {
      this.root = new BinaryTreeNode(value);
    } else {
      this.insertNode(this.root, value);
    }
  }

  traverseInOrder(): Array<T> {
    const rs = new Array<T>();

    this.inOrder(rs, this.root);

    return rs;
  }

  traversePostOrder(): Array<T> {
    const rs = new Array<T>();

    this.postOrder(rs, this.root);

    return rs;
  }

  traversePreOrder(): Array<T> {
    const rs = new Array<T>();

    this.preOrder(rs, this.root);

    return rs;
  }

  private findNode(node: BinaryTreeNode<T> | null, value: T): BinaryTreeNode<T> | null {
    if (node == null) {
      return null;
    }

    if (value === node.value) {
      return node;
    }

    if (value < node.value) {
      return this.findNode(node.left, value);
    }

    return this.findNode(node.right, value);
  }

  private dfs(node: BinaryTreeNode<T> | null, value: T): BinaryTreeNode<T> | null {
    if (node == null) {
      return null;
    }

    if (value === node.value) {
      return node;
    }

    const rs = this.findNode(node.left, value);

    if (rs !== null) {
      return rs;
    }

    return this.findNode(node.right, value);
  }

  private inOrder(rs: Array<T>, node: BinaryTreeNode<T> | null): void {
    if (node === null) {
      return;
    }

    this.inOrder(rs, node.left);

    rs.push(node.value);

    this.inOrder(rs, node.right);
  }

  private insertNode(node: BinaryTreeNode<T>, value: T): void {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new BinaryTreeNode(value);
      } else {
        this.insertNode(node.left, value);
      }
    } else if (value > node.value) {
      if (node.right === null) {
        node.right = new BinaryTreeNode(value);
      } else {
        this.insertNode(node.right, value);
      }
    }
  }

  private postOrder(rs: Array<T>, node: BinaryTreeNode<T> | null): void {
    if (node === null) {
      return;
    }

    this.postOrder(rs, node.left);

    this.postOrder(rs, node.right);

    rs.push(node.value);
  }

  private preOrder(rs: Array<T>, node: BinaryTreeNode<T> | null): void {
    if (node === null) {
      return;
    }

    rs.push(node.value);

    this.preOrder(rs, node.left);

    this.preOrder(rs, node.right);
  }
}