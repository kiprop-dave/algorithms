// Three way merge sort

function threeWay(arr){
	if(arr.length < 2){
		return;
	}
	const l = arr.length;
	const third = Math.ceil(l/3);
	const lastThird = l - (2*third);
	const arr1 = new Array(third);
	const arr2 = new Array(third);
	const arr3 = new Array(lastThird);
	let i,j,k
	for(i = 0; i< third; i++){
		arr1[i] = arr[i];
	}
	for(j = i; j < 2*third; j++){
		arr2[j-third] = arr[j];
	}
	for(k = j; k < l; k++){
		arr3[k-2*third] = arr[k]
	}
	// console.log({arr1,arr2,arr3})
	threeWay(arr1);
	threeWay(arr2);
	threeWay(arr3);
	merge(arr1,arr2,arr3,arr);
}

function merge(arr1,arr2,arr3,arr){
	let i = 0,j = 0,k = 0,l = 0;
	
	while(i < arr1.length && j < arr2.length && k < arr3.length){
		if(arr1[i] <= arr2[j] && arr1[i] < arr3[k] ){
			arr[l] = arr1[i];
			i++;
		}else if(arr2[j] <= arr1[i] && arr2[j] < arr3[k]){
			arr[l] = arr2[j];
			j++;
		}else{
			arr[l] = arr3[k];
			k++;
		}
		l++;
	}
	while(i < arr1.length && j < arr2.length){
		if(arr1[i] <= arr2[j]){
			arr[l] = arr1[i];
			i++;
		}else{
			arr[l] = arr2[j];
			j++;
		}
		l++;
	}
	while(i < arr1.length){
		arr[l] = arr1[i];
		i++;
		l++;
	}
	while(j < arr2.length){
		arr[l] = arr2[j];
		j++;
		l++;
	}
	while(k < arr3.length){
		arr[l] = arr3[k];
		k++;
		l++;
	}
}

const data = [13,9,7,18,1,15,27,14,1,47,40,35,2];
threeWay(data);
console.log(data);
