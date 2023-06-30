/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two 
endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.
*/
//Solution:Use a two pointer approach while modifying the pointer with the smaller height

function maxArea(height: number[]): number {
  let maxArea = 0;
  let l = 0, r = height.length - 1;
  while (l < r) {
    const area = Math.min(height[l], height[r]) * (r - l);
    maxArea = Math.max(maxArea, area);
    if (height[l] <= height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return maxArea;
};
