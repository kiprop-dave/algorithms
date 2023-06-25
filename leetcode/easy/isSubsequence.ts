// Given two strings, check if s is a subsequence of t
//
//Solution:Use two pointers, one on the first string and the other on the second string. For every character in 
//the first string, loop through the second string until you find the same character or until you reach the end of
//the string.


function isSubsequence(s: string, t: string): boolean {
  const sLen = s.length, tLen = t.length;
  if (sLen < 1) return true;
  if (tLen < sLen) return false;
  let i = 0, j = 0;

  while (i < sLen && j <= tLen) {
    if (j === tLen) return false;
    const currChar = s[i];
    while (j <= tLen) {
      if (j === tLen) return false;
      if (t[j] === currChar) break;
      j++;
    }
    i++;
    j++;
  }
  return true;
};
