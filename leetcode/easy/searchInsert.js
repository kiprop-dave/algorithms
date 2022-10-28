const searchInsert = function(nums, target) {
    let start,mid,end;
    start = 0;
    end = nums.length -1;
    while(start <= end){
        mid = Math.floor((start+end)/2);
        if(nums[mid] === target){
            return mid
        }else if(nums[mid] < target){
            start = mid+1;
        }else if(nums[mid] > target){
            end = mid - 1;
        }
    }

    return start;
};

const data1 = [1,3,5,6];
const target1 = 5;
const data2 = [1,3,5,6];
const target2 = 2;
const data3 = [1,3,5,6];
const target3 = 7;
const data4 = [1,3,5,6];
const target4 = 0;


console.log(searchInsert([1,3],2));