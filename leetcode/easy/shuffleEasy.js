// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 

function shuffle(arr,n){
	let p1 = 0,p2 = n,first = true;
	const result = [];
	while(p1 <= n && p2 < arr.length){
		if(first){
			result.push(arr[p1]);
			p1++;
			first = false;
		}else{
			result.push(arr[p2]);
			p2++;
			first = true;
		}
	}
	return result;
}

const test1 = [2,5,1,3,4,7]
const n1 = 3;
const test2 = [1,2,3,4,4,3,2,1];
const n2 = 4
const test3 = [1,1,2,2];
const n3 = 2

console.log(shuffle(test2,n2));