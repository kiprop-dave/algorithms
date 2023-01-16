function isPalindrome(s: string): boolean {
  let nonAlph = /[^0-9a-z]/gi;
  let newStr = s.replace(nonAlph, "").trim().split("");
  let _newStr = newStr.slice().reverse();
  return newStr.join("").toLowerCase() === _newStr.join("").toLowerCase();
}

// test the function
let testStr = " ";
console.log(isPalindrome(testStr));
