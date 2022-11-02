// Given two binary strings a and b, return their sum as a binary string.

// Input: a = "11", b = "1"
// Output: "100"

const addBinary = (a, b) => {
  const arrayA = a.split("");
  const arrayB = b.split("");
  const longer = a.length >= b.length ? a.length - 1 : b.length - 1;
  let carry = 0,
    i;
  let output = "";
  for (i = longer; i >= 0; i--) {
    while (!arrayA[i]) {
      arrayA.unshift("0");
    }
    while (!arrayB[i]) {
      arrayB.unshift("0");
    }
    const sum = parseInt(arrayA[i]) + parseInt(arrayB[i]) + carry;
    if (sum > 1) {
      const rem = sum % 2;
      const newStr = `${rem}${output}`;
      output = newStr;
      carry = Math.floor(sum / 2);
      continue;
    }
    const newStr = `${sum}${output}`;
    output = newStr;
    carry = 0;
  }
  if (carry > 0) {
    return `${carry}${output}`;
  }
  return output;
};

console.log(addBinary("1010", "1011"));
