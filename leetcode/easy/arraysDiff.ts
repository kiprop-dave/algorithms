/*
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

    answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
    answer[1] is a list of all distinct integers in nums2 which are not present in nums1.

Note that the integers in the lists may be returned in any order
*/

function findDifference(nums1: number[], nums2: number[]): number[][] {
  const listOne = new Set(nums1);
  const listTwo = new Set(nums2);
  for(const val of listOne){
    const ex = listTwo.delete(val);
    if(ex) listOne.delete(val);
  }
  return [[...listOne.values()],[...listTwo.values()]];
};
