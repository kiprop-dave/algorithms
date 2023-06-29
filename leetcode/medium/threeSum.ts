/*
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and 
 * nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/


function threeSum(nums: number[]): number[][] {
  let res: number[][] = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break; // There can't be any other solution afterwards
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  return res;
};
