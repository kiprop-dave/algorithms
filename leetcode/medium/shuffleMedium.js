// Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations
// of the array should be equally likely as a result of the shuffling.

// Implement the Solution class:

    // Solution(int[] nums) Initializes the object with the integer array nums.
    // int[] reset() Resets the array to its original configuration and returns it.
    // int[] shuffle() Returns a random shuffling of the array.




class Solution{
    constructor(nums){
        this.original = nums;
    }
    shuffle(){
        const l = this.original.length;
        let i;
        const shuffled = [...this.original]
        for(i = 0;i < l; i++){
            let rand = Math.floor(Math.random()*l);
            [shuffled[i],shuffled[rand]]=[shuffled[rand],shuffled[i]];
        }
        return shuffled;
    }
    reset(){
        return this.original;
    }
}