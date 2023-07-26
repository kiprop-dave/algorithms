/* Create a function similar to Promise.all
 *
 */


async function promiseAll<T>(functions: (() => Promise<T>)[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const results = new Array<T>(functions.length);
    let count = functions.length;
    for (let i = 0; i < functions.length; i++) {
      const func = functions[i];
      func().then((value) => {
        results[i] = value;
        count--;
        if (count === 0) return resolve(results);
      }).catch(reject)
    }
  })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
