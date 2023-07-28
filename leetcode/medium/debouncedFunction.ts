/* Create a function that accepts a function and timeout, `t`, as arguments.
 * The returned function should only invoke the given function after `t` milliseconds
 * have passed since the last time it was invoked.
 * Once it's invoked again, wait for `t` milliseconds before invoking it.
  */


type F = (...p: any[]) => any

function debounce(fn: F, t: number): F {
  let exec: ReturnType<typeof setTimeout>;
  return function(...args) {
    clearTimeout(exec)
    exec = setTimeout(() => {
      fn(...args)
    }, t);
  }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
