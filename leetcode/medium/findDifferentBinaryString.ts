/*
 * Given an array of binary strings nums with the same length, return a binary string of the same length
 * but not included in the array.
 *
  */


function findDifferentBinaryString(nums: string[]): string {
  let out: string = ''
  for (let i = 0; i < nums.length; i++) {
    out += nums[i][i] === '0' ? '1' : '0';
  }
  return out;
};
