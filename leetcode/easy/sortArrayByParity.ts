/*Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.
  * Solution: Use two pointers and swap the values if the left pointer is odd and the right pointer is even.
  */

function sortArrayByParity(nums: number[]): number[] {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    if (nums[r] % 2 !== 0) {
      r--;
    }
    if (nums[l] % 2 === 0) {
      l++;
    } else if (nums[r] % 2 === 0 && nums[l] % 2 !== 0) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
      r--;
    }
  }
  return nums;
};
