// Given a string s, find the length of the longest substring without repeating characters.
// Input: s = "abcabcbb"
// Output: 3

// const lengthOfLongestSubstring = function (s) {
//   const hash = new Map();
//   let longest = "",
//     i;
//   for (i = 0; i < s.length; i++) {
//     if (hash.has(s[i])) {
//       let sub = "";
//       for (const value of hash.values()) {
//         sub += value;
//       }
//       if (sub.length > longest.length) {
//         longest = sub;
//       }
//       hash.clear();
//       hash.set(s[i], s[i]);
//     } else {
//       hash.set(s[i], s[i]);
//       let sub = "";
//       for (const value of hash.values()) {
//         sub += value;
//       }
//       if (sub.length > longest.length) {
//         longest = sub;
//       }
//     }
//     console.log(longest);
//   }
//   //   return longest.length;
// };

function lengthOfLongestSubstring(s) {
  const l = s.length;
  let sub = "",
    i,
    j;
  for (i = 0; i < l; i++) {
    if (j === l) {
      break;
    }
    const hash = new Map();
    for (j = i; j < l; j++) {
      if (hash.has(s[j])) {
        break;
      } else {
        hash.set(s[j], s[j]);
      }
    }
    let str = "";
    for (const value of hash.values()) {
      str += value;
      if (str.length > sub.length) {
        sub = str;
      }
    }
  }
  return sub.length;
}

const input1 = "abcabcbb";
const input2 = "bbbbb";
const input3 = "pwwkew";
const input4 = " ";
const input5 = "dvdf";
console.log(lengthOfLongestSubstring(input3));
// lengthOfLongestSubstring(input5);
