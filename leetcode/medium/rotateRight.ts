// Given the head of a linked list, rotate the list to the right by k places.


 //Definition for singly-linked list.
 class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(k <= 0 || head === null) return head;
    let p = head;
    let next = p.next;
    if (!next) return head;
    let numEls = 2;
    while(p.next.next){
        p = p.next;
        next = p.next;
        numEls += 1;
    }
    let mod = k % numEls
    if(mod === 0) return head
    let rots = k > numEls ? mod : k
    p.next = null;
    next.next = head;
    return rotateRight(next,rots-1);
};
