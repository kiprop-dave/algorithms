/*
 * Definition for singly-linked list.
 */
class ListNode {
   val: number
   next: ListNode | null
   constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
   }
}
 */
const splitList = (listHead:ListNode):[ListNode,ListNode] => {
  let slowPointer:ListNode = listHead;
  let fastPointer:ListNode = listHead;
  let preMid:ListNode = null;
  while(fastPointer !== null && fastPointer.next !== null){
    fastPointer = fastPointer.next.next;
    preMid = slowPointer;
    slowPointer = slowPointer.next;
  }
  if(preMid !== null) preMid.next = null;
  return [listHead,slowPointer];
}

function sortList(head: ListNode | null): ListNode | null {
  if(head === null || head.next === null ) return head;
  let [list1,list2] = splitList(head);
  return merge(sortList(list1),sortList(list2));
};

function merge(head1:ListNode | null,head2:ListNode | null):ListNode | null{
  if(head1 === null) return head2;
  if(head2 === null) return head1;
  if(head1.val <= head2.val){
    head1.next = merge(head1.next,head2);
    return head1;
  }
  head2.next = merge(head1,head2.next);
  return head2;
};
