// Remove the Nth node from the end of a linked list

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

const data1 = [1,2,3,4,5];
const n1 = 2; // should remove 4


const data2 = [1];
const n2 = 1; // should remove 1

const data3 = [1,2];
const n3 = 1 // should remove 2

data3.forEach(el => list.append(el));

const removeNthFromEnd = function(head, n) {
    let numEl = 0;
    if(!head){
    	return head;
    }
    let current = head;
    while(current){
    	numEl++;
    	current = current.next;
    }

    const index = numEl - n;
    numEl = 0;
    current = head;
    if(index > 0){
		while (current) {
	    	numEl++;
	    	if(numEl === index){
	    		current.next = current.next.next;
	    	}
	    	current = current.next;
	    }
    }
    if(index === 0){
    	head = current.next;
    }
    return head;
};

removeNthFromEnd(list.head,n3);
console.log(list.print());