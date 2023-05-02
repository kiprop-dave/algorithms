/* There is a function signFunc(x) that returns:

    1 if x is positive.
    -1 if x is negative.
    0 if x is equal to 0.

You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).
*/


function arraySign(nums: number[]): number {
  let prod = nums.reduce((acc,curr) => acc * curr,1);
  return prod > 0 ? 1 : prod < 0 ? -1 : 0;
};
