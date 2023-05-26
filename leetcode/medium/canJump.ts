/*
You are given an integer array nums. You are initially positioned at the array's first index,
and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.
*/

function canJump(nums: number[]): boolean {
  let stepsLeft = nums[0];
  for(let i = 1; i < nums.length; i++){
    if(stepsLeft === 0) return false;
    stepsLeft = Math.max(stepsLeft - 1,nums[i]);
  }
  return true;
};
