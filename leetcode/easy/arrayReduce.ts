/*
Write a function that accepts an array of integers nums, a reducer function fn, and an intial value init. It should return a reduced array.
* */


type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  return nums.reduce((acc,curr) => fn(acc,curr),init);
};
