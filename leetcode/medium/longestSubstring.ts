/* Get the longest substring without repeating characters
 * Solution: Sliding window using Set
 * Time Complexity: O(n)
 *
 */

function lengthOfLongestSubstring(s: string): number {
  if (s.length === 1) {
    return 1;
  }
  let l = 0, r = 0, longest = 0;
  let numSet = new Set<string>();
  while (r < s.length) {
    if (numSet.has(s[r])) {
      longest = Math.max(longest, numSet.size);
      while (numSet.has(s[r])) {
        numSet.delete(s[l]);
        l++;
      }
      numSet.add(s[r]);
    } else {
      numSet.add(s[r])
    }
    r++;
  }
  longest = Math.max(longest, numSet.size);
  return longest;
};
