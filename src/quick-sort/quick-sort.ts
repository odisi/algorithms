export class QuickSort {
  // Category: Sorting
  // Complexity time in best case: O(n log n)
  // Complexity time in worst case: O(n²)
  // Space in best case: O(log n)
  // Space in worst case: O(n)
  static execute<T>(elements: T[], leftIndex: number, rightIndex: number): void {
    if (leftIndex < rightIndex) {
      const pivotIndex = QuickSort.partition(elements, leftIndex, rightIndex);

      QuickSort.execute(elements, leftIndex, pivotIndex - 1);

      QuickSort.execute(elements, pivotIndex + 1, rightIndex);
    }
  }

  private static partition<T>(elements: T[], leftIndex: number, rightIndex: number): number {
    const pivot = elements[rightIndex];

    let i = leftIndex - 1;

    for (let j = leftIndex; j < rightIndex; j++) {
      if (elements[j] < pivot) {
        i++;

        QuickSort.swap(elements, i, j);
      }
    }

    QuickSort.swap(elements, i + 1, rightIndex);

    return i + 1;
  }

  private static swap<T>(elements: T[], leftIndex: number, rightIndex: number): void {
    const temp = elements[leftIndex];

    elements[leftIndex] = elements[rightIndex];

    elements[rightIndex] = temp;
  }
}