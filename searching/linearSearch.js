// linear search implementation, just loop through the array until you find the element
// Time complexity of O(N)

const linearSearch = (arr,target) => {
    let found = -1;
    for(let i = 0; i< arr.length ;i++){
        if(arr[i] === target){
            found = `found at index ${i}`;
        }
    }
    return found;
}

//test
const dataSet = [1,4,6,8,12,15,18,21];
const searchResult = linearSearch(dataSet,30);
console.log(searchResult);