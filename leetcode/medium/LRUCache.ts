type LstNode<T> = {
  value: T
  previous: LstNode<T> | null
  next: LstNode<T> | null
}

class List<T> {
  private Front: LstNode<T> | null;
  private Back: LstNode<T> | null;
  private Len: number
  constructor() {
    this.Front = null;
    this.Back = null;
    this.Len = 0;
  }

  removeBack(): LstNode<T> | null {
    let el = this.Back;
    if (this.Len === 0) return null;
    if (this.Len === 1) {
      this.Front = null;
      this.Back = null;

    } else {
      this.Back = (this.Back as LstNode<T>).previous;
      (this.Back as LstNode<T>).next = null;
    }
    this.Len--;
    return el;
  }

  length(): number {
    return this.Len;
  }

  back(): LstNode<T> | null {
    return this.Back
  }

  front(): LstNode<T> | null {
    return this.Front
  }

  removeElement(el: LstNode<T>): LstNode<T> | null {
    if (this.Len === 0) return null;
    if (el === this.Back) {
      this.removeBack();
      return el;
    }
    if (el === this.Front) {
      this.Front = (this.Front as LstNode<T>).next;
      (this.Front as LstNode<T>).previous = null;
      this.Len--;
      return el;
    }
    (el.previous as LstNode<T>).next = el.next;
    (el.next as LstNode<T>).previous = el.previous;
    this.Len--;
    return el;
  }

  moveToFront(el: LstNode<T>) {
    if (this.Len === 1 || this.Front === el) return;
    this.removeElement(el);
    this.insert(el);
  }

  insert(el: LstNode<T>) {
    if (this.Len === 0) {
      this.Front = el;
      this.Back = el;
    } else {
      el.next = this.Front;
      (this.Front as LstNode<T>).previous = el;
      this.Front = el;
    }
    this.Len++;
  }
}

type keyValuePair = {
  key: number,
  value: number
}

class LRUCache {
  private Capacity: number;
  private Map: Map<number, LstNode<keyValuePair>>;
  private List: List<keyValuePair>;
  constructor(capacity: number) {
    this.Capacity = capacity;
    this.Map = new Map();
    this.List = new List();
  }

  get(key: number): number {
    const el = this.Map.get(key);
    if (!el) return -1;
    this.List.moveToFront(el);
    return el.value.value;
  }

  put(key: number, value: number): void {
    const el = this.Map.get(key);
    if (el) {
      el.value = { key, value };
      this.List.moveToFront(el);
      return;
    }
    if (this.List.length() === this.Capacity) {
      const removed = this.List.removeBack();
      if (removed) {
        this.Map.delete(removed.value.key);
      }
    }
    const newEl: LstNode<keyValuePair> = {
      value: { key, value },
      previous: null,
      next: null
    }
    this.List.insert(newEl);
    this.Map.set(key, newEl);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
