/* Flatten a nested array given the depth of the array to flatten without using flat or flatMap
 */

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function(arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  let oneD: MultiDimensionalArray = [];

  const flatten = (arr: MultiDimensionalArray, n: number): MultiDimensionalArray => {
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      if (Array.isArray(el) && n > 0) {
        flatten(el, n - 1);
      } else {
        oneD.push(el);
      }
    }
    return oneD;
  }
  return flatten(arr, n);
};
