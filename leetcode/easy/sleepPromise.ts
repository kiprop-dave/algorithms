/*
Write an asyncronous function that accepts a positive integer millis and sleeps for that many milliseconds. It can resolve any value.
* */

async function sleep(millis: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    },millis)
  })
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
