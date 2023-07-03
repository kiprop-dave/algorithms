/*
 *Given n non-negative integers representing an elevation map where the width of each bar is 1, 
 compute how much water it can trap after raining.
 */

function trap(height: number[]): number {
  if (!height.length) return 0;
  let l = 0, r = height.length - 1, res = 0;
  let maxLeft = height[l], maxRight = height[r];
  while (l < r) {
    if (maxLeft < maxRight) {
      l++;
      maxLeft = Math.max(maxLeft, height[l]);
      res += maxLeft - height[l];
    } else {
      r--;
      maxRight = Math.max(maxRight, height[r]);
      res += maxRight - height[r]
    }
  }
  return res;
};
