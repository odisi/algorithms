export class MergeSort {
  // Category: Sorting
  // Complexity: O(n log n)
  // Space: O(log n)
  static execute<T>(elements: T[]): T[] {
    return MergeSort.divide(elements, 0, elements.length - 1);
  }

  private static divide<T>(elements: T[], leftIndex: number, rightIndex: number): T[] {
    if (elements.length === 0) {
      return [];
    }

    if (leftIndex >= rightIndex) {
      return [elements[leftIndex]];
    }

    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    const m1 = MergeSort.divide(elements, leftIndex, middleIndex);

    const m2 = MergeSort.divide(elements, middleIndex + 1, rightIndex);

    return MergeSort.merge(m1, m2);
  }

  private static merge<T>(left: T[], right: T[]): T[] {
    const rs = new Array<T>(left.length + right.length);

    let i = 0, j = 0;

    while (i < left.length) {
      while (j < right.length) {
        if (left[i] < right[j]) {
          rs[i + j] = left[i];

          i++;

          break;
        } else {
          rs[i + j] = right[j];
        }

        j++
      }

      if (j === right.length) {
        break;
      }
    }

    for (; i < left.length; i++) {
      rs[i + j] = left[i];
    }

    for (; j < right.length; j++) {
      rs[i + j] = right[j];
    }

    return rs;
  }
}