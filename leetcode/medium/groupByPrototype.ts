/* Create a prototype on Array that groups items by a function that returns a string.
 * The function is called with each item in the array and the return value is used as the key for the group.
 *
 */


//@ts-ignore
declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
  }
}

//@ts-ignore
Array.prototype.groupBy = function <T>(fn: (item: T) => string) {
  let groups: Record<string, T[]> = {};
  for (let i = 0; i < this.length; i++) {
    let key = fn(this[i]);
    (groups[key] ?? (groups[key] = [])).push(this[i]);
  }
  return groups;
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
