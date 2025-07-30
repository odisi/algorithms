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

  buildBinaryTree(values: T[]): BinaryTreeNode<T> | null {
    if (values.length === 0) {
      return null;
    }

    const root = new BinaryTreeNode<T>(values[0]);

    const queue: BinaryTreeNode<T>[] = [root];

    let i = 1;

    while (i < values.length) {
      const current = queue.shift()!;

      // Add left child
      if (i < values.length) {
        if (values[i] !== null) {
          current.left = new BinaryTreeNode(values[i]);

          queue.push(current.left);
        }

        i++;
      }

      // Add right child
      if (i < values.length) {
        if (values[i] !== null) {
          current.right = new BinaryTreeNode(values[i]);

          queue.push(current.right);
        }

        i++;
      }
    }

    return root;
  }

  find(value: T): BinaryTreeNode<T> | null {
    return this.findNode(this.root, value);
  }

  findDFS(value: T): BinaryTreeNode<T> | null {
    return this.dfs(this.root, value);
  }

  hasPathSum(node: BinaryTreeNode<number | null> | null, targetSum: number): boolean {
    if (node === null) {
      return false;
    }

    return this._hasPathSum(node, 0, targetSum);
  }

  insert(value: T): void {
    if (this.root === null) {
      this.root = new BinaryTreeNode(value);
    } else {
      this.insertNode(this.root, value);
    }
  }

  orderTraversal(node: BinaryTreeNode<number | null> | null): number[][] {
    const rs: BinaryTreeNode<number | null>[][] = [];

    if (node == null) {
      return [];
    }

    this._orderTraversal([node], rs);

    return rs.map(x => x.map(y => y.value!));
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

  private _hasPathSum(node: BinaryTreeNode<number | null> | null, currentSum: number, targetSum: number): boolean {
    if (node != null) {
      if (node.left == null && node.right == null && currentSum + node.value! === targetSum) {
        return true;
      }

      if (currentSum + node.value! > targetSum) {
        return false;
      }

      if (this._hasPathSum(node.left, currentSum + node.value!, targetSum)) {
        return true;
      }

      return this._hasPathSum(node.right, currentSum + node.value!, targetSum);
    }

    return false;
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

  private _orderTraversal(nodes: BinaryTreeNode<number | null>[], rs: BinaryTreeNode<number | null>[][]) {
    rs.push(nodes);

    const aux = [];

    for (let index = 0; index < nodes.length; index++) {
      const node = nodes[index];

      if (node.left) {
        aux.push(node.left);
      }

      if (node.right) {
        aux.push(node.right);
      }
    }

    if (aux.length) {
      this._orderTraversal(aux, rs);
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