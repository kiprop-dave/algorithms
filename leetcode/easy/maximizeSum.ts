/*You are given a 0-indexed integer array nums and an integer k. Your task is to perform the following operation exactly k times in order to maximize your score:

    Select an element m from nums.
    Remove the selected element m from the array.
    Add a new element with a value of m + 1 to the array.
    Increase your score by m.

Return the maximum score you can achieve after performing the operation exactly k times.
*/

function maximizeSum(nums: number[], k: number): number {
  let sum = 0;
  const mx = Math.max(...nums);
  while(k > 0){
    sum += mx + k - 1;
    k--;
  }
  return sum;
};
