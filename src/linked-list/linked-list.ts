import { Node } from './node';

export class LinkedList<T> {
  protected head: Node<T> | null = null;
  protected _size: number = 0;
  protected tail: Node<T> | null = null;

  addAtHead(value: T): void {
    const node = new Node<T>(value);

    if (this.head === null) {
      this.head = node;

      this.tail = node;
    } else {
      node.setNext(this.head);

      this.head = node;
    }

    this._size++;
  }

  addAtTail(value: T): void {
    const node = new Node<T>(value);

    if (this.tail === null) {
      this.head = node;

      this.tail = node;
    } else {
      this.tail.setNext(node);

      this.tail = node;
    }

    this._size++;
  }

  invert(): void {
    let newHead: Node<T> | null = null;

    this.tail = this.head;

    while (this.head !== null) {
      const nextNode: Node<T> | null = this.head.next;

      this.head.setNext(newHead);

      newHead = this.head;

      this.head = nextNode;
    }

    this.head = newHead;
  }

  removeAtHead(): T | null {
    if (this.head === null) {
      return null;
    }

    const head = this.head;

    this.head = head.next;

    head.setNext(null);

    this._size--;

    if (this.head === null) {
      this.tail = null;
    }

    return head.value;
  }

  removeAtTail(): T | null {
    if (this.tail === null) {
      return null;
    }

    let current = this.head!;

    if (current === this.tail) {
      this.head = null;

      this.tail = null;

      this._size = 0;

      return current.value;
    }

    while (current.next !== this.tail) {
      current = current.next!;
    }

    current.setNext(null);

    const value = this.tail.value;

    this.tail = current;

    this._size--;

    return value;
  }

  get size() {
    return this._size;
  }
}