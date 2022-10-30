// Given an integer array nums,
 // return true if any value appears at least twice in the array, and return false if every element is distinct.

 function containsDuplicate(nums){
 	const l  = nums.length;
 	const hash = new Map();
 	let i;
 	if(l === 0){
 		return false;
 	}
 	for(i = 0; i < l; i++){
 		if(hash.has(nums[i])){
 			return true;
 		}else{
 			hash.set(nums[i],nums[i]);
 		}
 	}
 	return false;
 }

 const nums = [1,1,1,3,3,4,3,2,4,2];
 const nums2 = [1,2,3,4]

 console.log(containsDuplicate([]));