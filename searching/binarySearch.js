// implementation of binary search algorithm
// this algorithm uses the divide and conquer strategy
// has time complexity of O(logN)
// two approaches to implementing it: recursive and iterative
// Both have same time complexity, recursive has O(logN) space complexity while iterative has O(1)

// function binarySearch(arr,start,end,target){ // iterative approach
//     if(start <= end){
//         let mid = Math.floor((start + end)/2);
//         if(arr[mid] === target){
//             return mid;
//         }else if(arr[mid] > target){
//             return binarySearch(arr,start,mid-1,target);
//         }else if(arr[mid] < target){
//             return binarySearch(arr,mid+1,end,target);
//         }
//     }

//     return -1; // not found
// }
// //tests
// const dataSet = [1,4,6,8,12,15,18,21];

// const searchResult = binarySearch(dataSet,0,dataSet.length-1,21);

// console.log(searchResult);

function binarySearch(arr,target){
    let start,end,mid;
    start = 0;
    end = arr.length-1;

    while(start <= end){
        mid = Math.floor((start + end)/2);
        if(arr[mid] > target){
            end = mid - 1;
        }else if(arr[mid] < target){
            start = mid + 1;
        }
        else if(arr[mid] === target){
            break;
        }
    }

    if(arr[mid] !== target){
        return -1;
    }
    
    return `found at index ${mid}`;
}

//tests
const dataSet = [1,4,6,8,12,15,18,21];
const searchResult = binarySearch(dataSet,50);
console.log(searchResult);
