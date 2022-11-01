// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has
// Node.val == val, and return the new

import LinkedList from "../Data Structures/LinkedList.js";

const list = new LinkedList();
const data = [1, 2, 6, 3, 4, 5, 6];
data.forEach((el) => list.append(el));

const removeElements = function (head, val) {
  if (!head) {
    return head;
  }

  while (head && head.val === val) {
    head = head.next;
  }
  let current = head;
  while (current && current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};

removeElements(list.head, 6);

console.log(list.print());
