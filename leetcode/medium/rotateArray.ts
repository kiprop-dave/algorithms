// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    let len = nums.length;
    if (k % len === 0) return;
    k = k % len;
    while(k > 0){
        let lastElem = nums.pop();
        nums.unshift(lastElem);
        k -= 1;
    }
};
