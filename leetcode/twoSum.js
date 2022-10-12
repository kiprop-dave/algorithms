//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(arr,target){
    let positions = [];
    let i,j;
    for(i = 0; i < arr.length; i++){
       for(j = i; j < arr.length; j++){
        const numSum = arr[i] + arr[j];
        if(i !=j && numSum == target){
            positions.push(i,j);
            break;
        }
       }
    }
    return positions
}
// const nums =  [2,7,11,15];
const nums =[3,2,4]
const sum = 6;
console.log(twoSum(nums,sum))