class Member<T> {
  value: T;
  next: Member<T> | null;
  constructor(v: T, next?: Member<T>) {
    this.value = v;
    this.next = next ?? null;
  }
}

class Stack<T> {
  top: Member<T> | null;
  size: number;
  name: string;
  constructor(name: string) {
    this.top = null;
    this.size = 0;
    this.name = name;
  }

  addMember(val: T) {
    const newMember = new Member<T>(val);
    if (this.top) {
      newMember.next = this.top;
    }
    this.top = newMember;
    this.size += 1;
  }

  removeTop(): T {
    if (!this.top) {
      throw new Error("The stack is empty");
    }
    let out: T = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return out;
  }

  peakTop(): T {
    if (!this.top) {
      throw new Error("The stack is empty");
    }
    return this.top.value;
  }

  printStack(): T[] {
    let out: T[] = [];
    let p = this.top;
    while (p !== null) {
      out.push(p.value);
      p = p.next;
    }
    return out;
  }
}

const sourceStack = new Stack<number>("source");
sourceStack.addMember(30);
sourceStack.addMember(20);
sourceStack.addMember(10);
sourceStack.addMember(5);
const auxStack = new Stack<number>("aux");
const targetStack = new Stack<number>("target");

console.log("source", sourceStack.printStack());
console.log("aux", auxStack.printStack());
console.log("target", targetStack.printStack());

function towerOfHanoi<T>(disks: number, source: Stack<T>, target: Stack<T>, aux: Stack<T>): void {
  if (disks === 1) {
    target.addMember(source.removeTop());
    console.log(`Moved disk from ${source.name} to ${target.name}`);
    return;
  }
  towerOfHanoi(disks - 1, source, aux, target);
  target.addMember(source.removeTop());
  console.log(`Moved disk from ${source.name} to ${target.name}`);
  towerOfHanoi(disks - 1, aux, target, source);
}

towerOfHanoi(sourceStack.size, sourceStack, targetStack, auxStack);

console.log("source", sourceStack.printStack());
console.log("aux", auxStack.printStack());
console.log("target", targetStack.printStack());
