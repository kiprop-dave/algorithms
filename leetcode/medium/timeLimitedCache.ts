/* Implement a time limited cache that expires entries after a specified duration.
 * The cache should support the following operations:
 * - set(key, value, duration): sets key to value for duration (in milliseconds)
 *   - returns true if the key exists and it hasn't expired, false otherwise.
 *   - if the key already exists, its value should be updated.
 * - get(key): returns the value for key if it exists and hasn't expired, -1 otherwise.
 * - count(): returns the number of currently active entries.
 */

class TimeLimitedCache {
  items: Record<number, { value: number, expires: number }>
  constructor() {
    this.items = {};
  }

  set(key: number, value: number, duration: number): boolean {
    const now = new Date().getTime();
    if (key in this.items) {
      if (this.items[key].expires > now) {
        this.items[key] = { value: value, expires: now + duration }
        return true;
      }
    }
    this.items[key] = { value: value, expires: now + duration };
    return false;
  }

  get(key: number): number {
    const now = new Date().getTime()
    if (key in this.items && this.items[key].expires > now) {
      return this.items[key].value;
    }
    return -1;
  }

  count(): number {
    let count = 0;
    for (let key in this.items) {
      const now = new Date().getTime()
      if (this.items[key].expires > now) {
        count++;
      }
    }
    return count;
  }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
