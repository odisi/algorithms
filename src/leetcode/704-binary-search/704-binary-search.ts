export class BinarySearch {
  // Category: binary search
  // Complexity: O(log n)
  // Space: O(1)

  execute(nums: number[], target: number, startIndex: number = 0, endIndex: number = nums.length - 1): number {
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