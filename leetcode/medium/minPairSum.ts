/*
  * Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn)
  * such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
  * Solution:
  * Time complexity: O(nlogn)
  * Space complexity: O(1)
  */

function minPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let max: number = 0;
  const n = nums.length;
  for (let i = 0; i < n / 2; i++) {
    const sum = nums[i] + nums[n - 1 - i];
    max = Math.max(max, sum)
  }
  return max;
};
