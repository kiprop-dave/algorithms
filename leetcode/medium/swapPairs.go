/*
* Given a linked list, swap every two adjacent nodes and return its head.
* You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
*/


/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func swapPairs(head *ListNode) *ListNode {
  if head == nil {
    return head
  }

  var prev *ListNode
  i := 0
  currentNode := head
  for currentNode != nil {
    if currentNode.Next != nil {
      nextNode := currentNode.Next.Next
      currentNode.Next.Next = currentNode
      if i == 0 {
        head = currentNode.Next
        i++
      }else{
        prev.Next = currentNode.Next
      }
      prev = currentNode
      currentNode.Next = nextNode
    }
    currentNode = currentNode.Next
  }
  return head
}
