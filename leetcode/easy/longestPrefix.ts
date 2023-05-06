/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

function longestCommonPrefix(strs: string[]): string {
  if(strs.length < 2) return strs[0];
  if(strs[0][0] !== strs[1][0]) return "";
  let prefix = "";
  for(let i = 0;i < strs[0].length;i++){
    let l = strs[0][i];
    for(let j = 1;j < strs.length;j++){
      if(strs[j][i] !== l) return prefix;
    }
    prefix += l;
  }
  return prefix;
};
