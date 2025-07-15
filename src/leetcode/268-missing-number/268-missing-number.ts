export class MissingNumber {
  static execute(nums: number[]): number {
    const n = nums.length;

    const expectedSum = (n * (n + 1)) / 2;

    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }

    return expectedSum - sum;
  }
}