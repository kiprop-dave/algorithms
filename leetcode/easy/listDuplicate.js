// Remove duplicates from a linked list

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
const data = [1,1,2];
data.forEach(el => list.append(el));

const deleteDuplicates = (head) => {
    if(!head){
    	return head;
    }
    let current = head;
    while(current){
    	while(current.next && current.value === current.next.value){
    		current.next = current.next.next;
    	}
    	current = current.next
    }
    return head;
};
deleteDuplicates(list.head);

console.log(list.print());