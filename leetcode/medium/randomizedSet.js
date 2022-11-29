class RandomizedSet {
    constructor() {
        this.values = new Set();
    }

    insert(val){
        if(this.values.has(val)){
            return false
        }
        this.values.add(val);
        return true;
    }

    remove(val){
        return this.values.delete(val);
    }

    getRandom() {
        let ran = Math.ceil(Math.random()*this.values.size);
        let count = 1;
        for(const el of this.values){
            if(ran === count){
                return el;
            }
            count++;
        }
    }
}

const test = new RandomizedSet();
console.log(test.insert(1));
console.log(test.remove(2));
console.log(test.insert(2));
console.log(test.getRandom());
console.log(test.remove(1));
console.log(test.insert(2));
console.log(test.getRandom());
