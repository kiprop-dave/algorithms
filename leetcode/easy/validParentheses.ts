function isValid(s: string): boolean {
  let l = s.length;
  if(l < 2) return false;
  const keyStore = {
    "(":")",
    "{":"}",
    "[":"]"
  }
  let stack:string[] = [];
  for(let i = 0; i < l; i++){
    let symb = s[i];
    if(stack[stack.length - 1] === symb){
      stack.pop();
    }else{
      let closingBracket = keyStore[symb];
      stack.push(closingBracket);
    }
  }
  return !stack.length;
};

const test = "()[]{}";

console.log(isValid(test));
