function addStrings(num1: string, num2: string): string {
  let carry = 0,
    output = "";
  let i = num1.length - 1,
    j = num2.length - 1;
  while (i < j) {
    num1 = "0" + num1;
    i++;
  }
  while (j < i) {
    num2 = "0" + num2;
    j++;
  }
  while (i >= 0 && j >= 0) {
    let sum = carry + parseInt(num1[i]) + parseInt(num2[j]);
    if (sum <= 9) {
      output = `${sum}${output}`;
      carry = 0;
    } else {
      let rem = sum % 10;
      output = `${rem}${output}`;
      carry = (sum - rem) / 10;
    }
    i--;
    j--;
  }
  if (carry > 0) {
    output = `${carry}${output}`;
  }
  return output;
}

console.log(addStrings("4", "69"));
