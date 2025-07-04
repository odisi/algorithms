import { LinkedList } from './linked-list';
import { Node } from './node';

export class DoublyLinkedList<T> extends LinkedList<T> {
  addAtHead(value: T): void {
    super.addAtHead(value);

    if (this.head!.next) {
      this.head!.next.previous = this.head;
    }
  }

  addAtTail(value: T): void {
    const node = new Node<T>(value);

    if (this.tail === null) {
      this.head = node;

      this.tail = node;
    } else {
      this.tail.setNext(node);

      node.setPrevious(this.tail)

      this.tail = node;
    }

    this._size++;
  }

  removeAtTail(): T | null {
    if (this.tail === null) {
      return null;
    }

    const value = this.tail.value;

    this.tail = this.tail.previous;

    this._size--;

    return value;
  }
}