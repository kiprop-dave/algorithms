/*
Given an array arr and a chunk size size, return a chunked array.
A chunked array contains the original elements in arr, but consists
of subarrays each of length size. The length of the last subarray may be
less than size if arr.length is not evenly divisible by size.
*/

function chunk<T>(arr: T[], size: number): T[][] {
  let output:T[][] = [];
  for(let i = 0; i < arr.length; i = i + size){
    output.push(arr.slice(i,i + size));
  }
  return output;
};
