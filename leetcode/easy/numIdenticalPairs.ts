/* Find the number of good pairs.
 * A pair (i,j) is called good if nums[i] == nums[j] and i < j.
 * Solution: Count the number of occurrences of each number.
 * For each number, n, the number of pairs is n*(n-1)/2.
 * Time Complexity: O(n)
 */

function numIdenticalPairs(nums: number[]): number {
  const count: Record<number, number> = {};
  nums.forEach((el) => {
    count[el] = (count[el] ?? 0) + 1;
  })
  let res: number = 0;
  for (const key in count) {
    const els = count[key];
    if (els < 2) continue;
    res += ((els) * (els - 1)) / 2;
  }
  return res;
};
