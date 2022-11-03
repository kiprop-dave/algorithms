// The merge sort algorithm is based on the divide and conquer paradigm.
// The array is recursively divided by two and combined in a sorted manner

function mergeSort(arr){
	if(arr.length < 2){
		return;
	}
	let length = arr.length;
	const mid = Math.floor((length)/2);
	const leftArray = new Array(mid);
	const rightArray = new Array(length - mid);
	let i=0;
	for(i = 0 ; i < mid; i++){
		leftArray[i] = arr[i];
	}
	for(let j = mid; j < length; j++){
		rightArray[j-i] = arr[j];
	}

	mergeSort(leftArray);
	mergeSort(rightArray);
	merge(leftArray,rightArray,arr);
}

function merge(arr1,arr2,output){
	let l1 = arr1.length,l2 = arr2.length,i=0,j=0,k=0;

	while(i < l1 && j < l2){
		if(arr1[i] <= arr2[j]){
			output[k] = arr1[i];
			i++;
		}else{
			output[k] = arr2[j];
			j++;
		}
		k++;
	}
	while(i < l1){
		output[k] = arr1[i]
		i++;
		k++;
	}
	while(j < l2){
		output[k] = arr2[j];
		j++;
		k++;
	}
}

const dataSet = [38,27,43,3,9,82,10];
mergeSort(dataSet);
console.log(dataSet);