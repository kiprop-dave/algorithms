// chech if an array of numbers can be converted to an arithmetic progression

function canMakeArithmeticProgression(arr: number[]): boolean {
  arr.sort((a,b) => a - b);
  const firstDiff = arr[1] - arr[0];
  for(let i = 1; i < arr.length - 1; i++){
    if(arr[i + 1] - arr[i] !== firstDiff) return false;
  }
  return true;
};
