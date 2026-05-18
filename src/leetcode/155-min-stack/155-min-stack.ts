export class MinStack {
  // Category: Stack
  // Complexity time: O(1)
  // Space: O(1)

  private stack: number[] = [];
  private minStack: number[] = [];

  push(val: number): void {
    this.stack.push(val);

    let min = val;

    if (this.minStack.length > 0) {
      min = Math.min(this.minStack[this.minStack.length - 1], val);
    }

    this.minStack.push(min);
  }

  pop(): void {
    this.stack.pop();

    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}