class MyQueue {
    queue:number[]
    constructor() {
        this.queue = [];
    }

    push(x: number): void {
        this.queue.push(x);
    }

    pop(): number {
        let out = this.queue.shift();
        return out;
    }

    peek(): number {
        return this.queue[0];
    }

    empty(): boolean {
        return this.queue.length ? false : true;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
