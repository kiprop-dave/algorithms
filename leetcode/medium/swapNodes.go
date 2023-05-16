/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func swapNodes(head *ListNode, k int) *ListNode {
  if head == nil || k < 1 {
    return head
  }   
  firstNode := head;
  for i := 1; i < k; i++ {
    firstNode = firstNode.Next
  }

  end := firstNode.Next
  secondNode := head

  for end != nil {
    end = end.Next
    secondNode = secondNode.Next
  }

  firstNode.Val,secondNode.Val = secondNode.Val,firstNode.Val

  return head
}
