// The power of the string is the maximum length of a non-empty substring that contains only one unique character.


function maxPower(s: string): number {
  let max = 0;
  for(let i = 0;i < s.length; i++){
    const c = s[i];
    let count = 1;
    for(let j = i + 1; j < s.length; j++){
      if(s[j] !== c) break;
      count++;
      i = j;
    }
    if(count > max) max = count;
  }
  return max;
};
