class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };

    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  print() {
    const elements = [];
    if (!this.head) {
      return "empty";
    }
    let current = this.head;
    while (current) {
      elements.push(current);
      current = current.next;
    }

    return elements;
  }
}

export default LinkedList