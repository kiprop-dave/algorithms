// Given the head of a singly linked list, reverse the list, and return the reversed list.


class LinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
	}

	append(value){
		const newNode = {
			value: value,
			next: null
		}

		if(this.tail){
			this.tail.next = newNode;
		}

		this.tail = newNode;
		if(!this.head){
			this.head = newNode;
		}
	}

	print(){
		const elements = [];
		if(!this.head){
			return "empty";
		}
		let current = this.head;
		while(current){
			elements.push(current);
			current = current.next;
		}

		return elements;
	}
}

const list = new LinkedList();
const test1 = [1,2,3,4,5];
test1.forEach(el => list.append(el));

const reverseList = function(head) { // Solution
    if(!head){
        return head;
    }
    let next = null;
    let current = head;
    let prev = null;
    
    while(current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    
    return prev;
};

reverseList(list.head);

console.log(list)