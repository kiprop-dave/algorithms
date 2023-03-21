function zeroFilledSubarray(nums: number[]): number {
  let count = 0;
  let successive = 0;
  for(let i = 0; i < nums.length; i ++){
    if(nums[i] !== 0){
      successive = 0;
      continue;
    }
    successive++;
    count += successive;
  }
  return count;
};
