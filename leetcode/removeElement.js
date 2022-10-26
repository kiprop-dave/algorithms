const removeElement = function(nums, val) {
    let remaining = 0;
    let last = nums.length - 1;
    for(let i = nums.length-1;i >=0; i--){
        if(nums[i] === val){
            nums[i] = "_";
            swap(nums,i,last)
            last -= 1;
        }else {
            remaining ++;
        }
    }
    return {remaining,nums};
};

const swap = (arr,i1,i2) =>{
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    return arr;
}

const dataSet = [0,1,2,2,3,0,4,2];

console.log(removeElement(dataSet,2))