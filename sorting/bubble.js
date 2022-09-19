// Bubble sort javascript implementation
//Time Complexity: O(N2)
// Auxiliary Space: O(1)

const swap = (arr, i,j) =>{  // utility function to swap the numbers
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr){
    let i,j;
    const n = arr.length;
    for(i = 0; i < n; i++){
        for(j = 0; j < n-i-1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1);
            }
        }
    }
    return arr;
}

// const test = [9,8,7,6,5,4,1,2];
const test = ['z','x','d','b','a']
console.log(bubbleSort(test))