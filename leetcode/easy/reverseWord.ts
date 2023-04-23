// Given a string s, reverse the order of characters in each word within a
// sentence while still preserving whitespace and initial word order.

function reverseWords(s: string): string {
  return s.split(" ").map((word) => word.split("").reverse().join("")).join(" ");
};
