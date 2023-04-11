/*
* Remove the stars together with the character nearest to its left
*/

function removeStars(s: string): string {
  let stack:string[] = [];
  for(let i = 0; i <s.length; i++){
    let current = s[i];
    if(current === "*"){
      stack.pop();
    }else{
      stack.push(current);
    }
  }
  return stack.join("");
};

console.log(removeStars("leet**cod*e"))
