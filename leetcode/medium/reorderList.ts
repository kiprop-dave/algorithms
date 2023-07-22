/* Given a singly linked list L: L0→L1→…→Ln-1→Ln,
 * reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
 * You may not modify the values in the list's nodes,
 * only nodes itself may be changed.
 * Solution: 1. find the middle node using fast and slow pointers
 * 2. reverse the right half of the list
 * 3. merge the two lists switching between the two
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */



/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


/**
 Do not return anything, modify head in-place instead.
 */

function reorderList(head: ListNode | null): void {
  let [slow, fast] = [head, head!.next];
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }
  const right = slow!.next;
  slow!.next = null;

  const reverse = (l: ListNode | null): ListNode | null => {
    if (l === null) return null;
    let prev: ListNode | null = null;
    let curr: ListNode | null = l;
    let next: ListNode | null = null;
    while (curr != null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }

  fast = reverse(right);
  slow = head;
  let front = true;
  while (slow !== fast) {
    if (front) {
      const n = slow!.next;
      slow!.next = fast;
      slow = n;
      front = false;
    } else {
      const n = fast!.next;
      fast!.next = slow;
      fast = n;
      front = true;
    }
  }
};
