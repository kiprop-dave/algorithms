/* Create a function that takes two promises as arguments and returns a new promise that resolves when all promises are resolved.
 * The return value should be the sum of the resolved values.
 */

async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
  return new Promise((resolve, reject) => {
    let sum = 0;
    Promise.all([promise1, promise2]).then((res) => {
      res.forEach((s) => sum += s)
      resolve(sum);
    })
  })
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
