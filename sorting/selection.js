// selection sort
// The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) 
// from the unsorted part and putting it at the beginning. 

const swap = (arr,i,j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function selectionSort(arr){
    const n = arr.length;
    let i,j;
    for(i = 0; i < n-1; i++){
        let key = i;
        for(j = i+1; j < n; j++){
            if(arr[j] < arr[key]){
                key = j;
            }
            swap(arr,i,key);
        }
    }
    return arr;
}

const test = [9,8,7,6,5];
console.log(selectionSort(test));


//selection sort is not stable
// Overall complexity of O(n^2)
// Auxilliary space of O(1) - useful when memory write is a costly operation