function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let l1 = nums1.length;
  let l2 = nums2.length;
  let output = new Array<number>(l1 + l2);
  let i = 0,
    j = 0,
    k = 0;
  while (i < l1 && j < l2) {
    if (nums1[i] < nums2[j]) {
      output[k] = nums1[i];
      i++;
    } else {
      output[k] = nums2[j];
      j++;
    }
    k++;
  }
  while (i < l1) {
    output[k] = nums1[i];
    i++;
    k++;
  }
  while (j < l2) {
    output[k] = nums2[j];
    j++;
    k++;
  }
  let even = output.length % 2 === 0;
  let mid = Math.floor(output.length / 2);
  if (!even) {
    return output[mid];
  } else {
    let med = (output[mid] + output[mid - 1]) / 2;
    return med;
  }
}

console.log(findMedianSortedArrays([1, 2], [3, 4]));
