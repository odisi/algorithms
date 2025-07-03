export class ContainsDuplicate {

  // Category: Sliding Window
  // Complexity: O(n)
  // Space: O(n)
  execute(nums: number[]): boolean {
    let map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        return true;
      }

      map.set(nums[i], i);
    }

    return false;
  }
}