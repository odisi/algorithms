export class BubbleSort {
  // Category: Sorting
  // Complexity time in best case: O(n) array is already sorted
  // Complexity time in worst case: O(n²)
  // Space in best case: O(log n)
  // Space in worst case: O(n)
  static execute<T>(elements: T[]): void {
    for (let i = 0; i < elements.length - 1; i++) {
      for (let j = i + 1; j < elements.length; j++) {
        if (elements[j] < elements[i]) {
          BubbleSort.swap(elements, i, j);
        }
      }
    }
  }

  private static swap<T>(elements: T[], leftIndex: number, rightIndex: number): void {
    const temp = elements[leftIndex];

    elements[leftIndex] = elements[rightIndex];

    elements[rightIndex] = temp;
  }
}