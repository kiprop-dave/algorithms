/*Given an array of positive integers nums, return an array answer that consists of 
the digits of each integer in nums after separating them in the same order they appear in nums.
To separate the digits of an integer is to get all the digits it has in the same order.
    For example, for the integer 10921, the separation of its digits is [1,0,9,2,1].
*/


function separateDigits(nums: number[]): number[] {
  let output:number[] = [];
  nums.forEach((el) => {
    if(el < 10){
      output.push(el);
      return;
    }
    let elem = el.toString();
    let split = elem.split("").map((s) => parseInt(s));
    output.push(...split)
  })
  return output;
};
