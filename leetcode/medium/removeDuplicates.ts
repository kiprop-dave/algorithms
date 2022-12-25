function removeDuplicates(nums: number[]): number {
   let hash = new Map<number,number>();
    for(let i = 0; i < nums.length; i++){
        if(hash.size === 0){
            hash.set(nums[i],1);
            continue;
        }
        let current = hash.get(nums[i]);

        if(current && current < 2){
            hash.set(nums[i],current+1)
        }else if(current && current === 2){
            let p = nums[i];
            while(nums[i] === p && i < nums.length){
                nums.splice(i,1);
            }
            if(i !== nums.length-1){
                hash.set(nums[i],1)
            }
        }else{
            hash.set(nums[i],1)
        }
    }
    return nums.length;
};
