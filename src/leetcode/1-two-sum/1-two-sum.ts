export class TwoSum {

  // Category: Hash Table
  // Complexity time: O(n)
  // Space: O(n)
  execute(nums: number[], target: number): number[] {
    let map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];

      if (map.has(diff)) {
        return [map.get(diff)!, i];
      } else {
        map.set(nums[i], i);
      }
    }

    return [];
  }
}