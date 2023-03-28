function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let hashMap:Record<string,number> = {};
  const l = nums.length;
  for(let i = 0; i < l; i++){
    let el = nums[i];
    if(el in hashMap){
      let diff = i - hashMap[el];
      if(diff <= k){
        return true;
      }
    }
    hashMap[el] = i;
}
  return false;
};
