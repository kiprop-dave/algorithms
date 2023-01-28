// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.


 //Definition for singly-linked list.
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

function middleNode(head: ListNode | null): ListNode | null {
    if(!head) return null

    let hash = new Map<number,number>();
    let i = 0;
    let curr = head;
    while(curr){
        hash.set(i,curr.val);
        i++;
        curr = curr.next
    }
    let mid = Math.floor((hash.size)/2);
    let elem = hash.get(mid);
    curr = head;
    i = 0;
    while(curr){
        if(curr.val === elem && i === mid){
            break;
        }
        curr = curr.next;
        i++;
    }
    return curr;
};
