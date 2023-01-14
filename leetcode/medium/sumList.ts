class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// create a linked list from a string
function createList(str: string): ListNode | null {
  let head = new ListNode(parseInt(str[0]));
  let t = head;
  for (let i = 1; i < str.length; i++) {
    let curr = parseInt(str[i]);
    t.next = new ListNode(curr);
    t = t.next;
  }
  return head;
}

// Add two reversed linked lists
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let head = new ListNode();
  let t = head;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    t.next = new ListNode(sum % 10);
    t = t.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return head.next;
}

let l1 = createList("1000000000000000000000000000001");
let l2 = createList("564");
