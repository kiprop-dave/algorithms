// Design a hashset data structure

class MyHashSet {
  set:Record<number,string>;
  constructor() {
    this.set = {};
  }

  add(key: number): void {
    this.set[key] = "";
  }

  remove(key: number): void {
    delete this.set[key];
  }

  contains(key: number): boolean {
    if(key in this.set) return true;
    return false;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
