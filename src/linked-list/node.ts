export class Node<T> {
  next: Node<T> | null;
  previous: Node<T> | null;
  value: T;

  constructor(value: T) {
    this.next = null;
    this.previous = null;
    this.value = value
  }

  setNext(node: Node<T> | null): void {
    this.next = node;
  }

  setPrevious(node: Node<T> | null): void {
    this.previous = node;
  }
}