export class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }

  setNext(node: Node<T> | null): void {
    this.next = node;
  }
}