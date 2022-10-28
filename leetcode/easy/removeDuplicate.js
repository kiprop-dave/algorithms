const removeDuplicate = (nums) =>{
	let remaining = 0;
	for(let i = 0; i < nums.length; i++){
		for(let j = i+1; j< nums.length;j++){
			if(nums[i] !== nums[j]){
				break;
			}else if(nums[i] === nums[j]){
				nums.splice(j,1,"_");
			}
		}
		if(typeof nums[i] === "number"){
			remaining +=1;
		}
	}
	for(let i = 0; i < nums.length; i++){
		for(let j = i+1; j< nums.length;j++){
			if(nums[i] === "_" && typeof nums[j] === "number"){
				swap(nums,i,j)
			}
		}
	}
	return nums;
}

const swap = (arr,index1,index2) =>{
	let temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
	return arr;
}

const dataSet = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicate(dataSet));