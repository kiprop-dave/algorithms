/*
Write a function that accepts another function as input and returns a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will returned a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

    sum accepts two integers a and b and returns a + b.
    fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
    factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise
*/


type Sum = (a: number, b: number) => number;
type Fib = (n: number) => number;
type Factorial = (a: number) => number;

type Fn = Sum & Fib & Factorial;

function memoize(fn: Fn): Fn {
  let memo: Map<string, ReturnType<Fn>> = new Map();
  return function (...args: Parameters<Fn>): ReturnType<Fn> {
    let key: string = args.join(",");
    const result: ReturnType<Fn> = memo.get(key) ?? fn(...args);
    if (!memo.has(key)) {
      memo.set(key, result);
    }
    return result;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

const sum = (a:number,b:number) => a + b;
let fn = memoize(sum)
console.log(fn(1,2))
fn(1,4)
