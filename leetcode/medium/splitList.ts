/* Split linked list into k parts which are as equal as possible.
 * Solution: Count the number of nodes in the list. Get the number of nodes per list and iterate through the list, splitting it into parts
 * while updating the number of nodes per list.
 * Finally, if the number of lists is less than k, add nulls to the end of the list.
  *
  */

// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
  const l = k;
  const res: (ListNode | null)[] = [];
  let nodes = 0;
  let p = head;
  while (p !== null) {
    nodes++;
    p = p.next;
  }
  let elemsPerList = Math.ceil(nodes / k);
  p = head;
  while (elemsPerList > 0) {
    res.push(p);
    for (let i = 1; i < elemsPerList; i++) {
      p = p!.next;
    }
    let next = p!.next;
    p!.next = null;
    p = next;
    nodes -= elemsPerList;
    k--;
    elemsPerList = Math.ceil(nodes / k);
  }
  while (res.length < l) {
    res.push(null);
  }
  return res;
};
