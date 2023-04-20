// You are given a 0-indexed array nums that consists of n distinct positive integers.
// Apply m operations to this array, where in the ith operation you replace the number operations[i][0] with operations[i][1].

function arrayChange(nums: number[], operations: number[][]): number[] {
  let map:Record<string,number> = {};
  nums.forEach((n,i) => map[n] = i);
  operations.forEach((pair) => {
    let n = pair[0],r = pair[1];
    let i = map[n];
    nums[i] = r;
    delete map[n];
    map[r] = i;
  })
  return nums;
};

console.log(arrayChange([1,2],[[1,3],[2,1],[3,2]]));
// Output [2,1]
