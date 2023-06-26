// Given a 1-indexed sorted array(ascending) and a target sum,
// return the indices of the two numbers to sum in order to get the target
//
// Solution:Use two pointers, one at the first element and the other at the last element.
// Compare the elements at those indices. If equal, return the result, if larger, reduce the right index,
// if smaller, increase the left index;


function twoSum(numbers: number[], target: number): number[] {
  const result = new Array<number>(2).fill(0);
  let left = 0, right = numbers.length - 1;

  while (left <= right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      result[0] = left + 1;
      result[1] = right + 1;
      return result;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return result;
};
