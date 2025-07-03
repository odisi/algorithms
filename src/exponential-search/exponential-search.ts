import { BinarySearch } from "../leetcode/704-binary-search/704-binary-search";

export class ExponentialSearch {

  // Category: exponential search
  // Complexity: O(log n)
  // Space: O(1)
  execute(nums: number[], target: number): number {
    if(nums.length === 0) {
      return -1;
    }

    if(nums[0] === target) {
      return 0;
    }

    let i = 1;

    while (i < nums.length && nums[i] <= target) {
      i *= 2;
    }

    const binarySearch = new BinarySearch();

    return binarySearch.execute(nums, target, Math.floor(i / 2), Math.min(i, nums.length - 1));
  }
}
