/*
Write a function that accepts an array of functions [f1, f2, f3, ..., fn] and
returns a new function fn that is the function composition of the array of functions.
*/

type F = (x: number) => number;

function compose(functions: F[]): F {
  return (x:number):number =>{
    if(!functions.length) return x;
    let result:number = x;
    let i = functions.length - 1;
    while(i >= 0){
      result = functions[i](result);
      i--;
    }
    return result;
  }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
