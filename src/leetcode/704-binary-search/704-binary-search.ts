export class BinarySearch {
  // Category: binary search
  // Complexity: O(log n)
  // Space: O(1)

  search(nums: number[], target: number): number {
    let startIndex = 0;

    let endIndex = nums.length - 1;

    while (startIndex <= endIndex) {
      const middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);

      if (nums[middleIndex] === target) {
        return middleIndex;
      }

      if (target > nums[middleIndex]) {
        startIndex = middleIndex + 1;
      }
      else {
        endIndex = middleIndex - 1;
      }
    }

    return -1;
  }
}

0 - 10

0 + (10 - 0) / 2