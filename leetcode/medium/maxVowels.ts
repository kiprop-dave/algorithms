/*
Given a string s and an integer k, return the maximum number
of vowel letters in any substring of s with length k.
*/


function maxVowels(s: string, k: number): number {
  const vowels = new Set<string>(["a","e","i","o","u"]);
  let maxVowels = 0,windowCount = 0;
  for(let i = 0;i < k; i++){
    if(vowels.has(s[i])) windowCount++;
  }
  if(windowCount === k) return windowCount;
  maxVowels = windowCount;
  for(let i = 1;i <= s.length-k;i++){
    if(vowels.has(s[i-1])) windowCount--;
    if(vowels.has(s[i + k - 1])) windowCount++;

    if(windowCount === k) return windowCount;

    if(windowCount > maxVowels) maxVowels = windowCount;
  }
  return maxVowels;
};
