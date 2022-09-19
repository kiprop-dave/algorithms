// insertion sort
// 1. Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.
// 2. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
// 3. However, insertion sort provides several advantages:
//    a. Simple implementation: Jon Bentley shows a three-line C version, and a five-line optimized version[1]
//    b. Efficient for (quite) small data sets, much like other quadratic sorting algorithms
//    c. More efficient in practice than most other simple quadratic (i.e., O(n2)) algorithms such as selection sort or bubble sort
//    d. Adaptive, i.e., efficient for data sets that are already substantially sorted: the time complexity is O(kn) when each element in the input is no more than k places away from its sorted position
//    e. Stable; i.e., does not change the relative order of elements with equal keys
//    f. In-place; i.e., only requires a constant amount O(1) of additional memory space
//    g. Online; i.e., can sort a list as it receives it
// 4. When people manually sort cards in a bridge hand, most use a method that is similar to insertion sort.
// 5. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "insert" themselves into a partially sorted list.
// 6. The algorithm is efficient for small data sets but becomes inefficient as the data set grows larger.
// 7. The algorithm is not suitable for sorting large data sets as its average and worst case complexity are of Ο(n2), where n is the number of items.
// 8. Insertion sort is used when number of elements is small. It can also be useful when input array is almost sorted, only few elements are misplaced in complete big array.
// 9. Insertion sort is a stable sorting algorithm.
// 10. Insertion sort is an in-place sorting algorithm.

//insertion sort function
const insertionSort = arr => {
    let i,j,key;
    for(i=0; i< arr.length; i++){
        j = i;
        key = arr[i]
        while(j > 0 && arr[j-1] > key){
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = key
    }
    return arr;
}

//test
var arr = [25,18,1,15,9,6,2,7,8,3,5,22,19,1,0];
let timed = (f) => (...args) => {
    let start = performance.now();
    let ret = f(...args);
    console.log(`function ${f.name} took ${(performance.now() - start).toFixed(3)}ms`);
    return ret;   
}
// console.log(insertionSort(arr));
let test = () => {insertionSort(arr)}
test = timed(test)   // turns the function into a timed function in one line
test()               // run your code as normal, logs 'function test took 1001.900ms' 