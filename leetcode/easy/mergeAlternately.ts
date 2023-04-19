function mergeAlternately(word1: string, word2: string): string {
  let output:string = "";
  let toggle:boolean = true;
  let i = 0,j = 0;
  while(i < word1.length && j < word2.length){
    if(toggle){
      output += word1[i];
      i++;
      toggle = false;
    }else{
      output += word2[j];
      j++;
      toggle = true;
    }
  }
  if(i < word1.length){
    output += word1.slice(i);
  }
  if(j < word2.length){
    output += word2.slice(j);
  }
  return output;
};

console.log(mergeAlternately("abc","def"))
