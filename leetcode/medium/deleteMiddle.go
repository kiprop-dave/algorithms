/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteMiddle(head *ListNode) *ListNode {
    if head == nil || head.Next == nil {
        return nil
    }
    fastPointer := head
    slowPointer := head
    var beforeMid *ListNode
    for fastPointer != nil && fastPointer.Next != nil {
        beforeMid = slowPointer
        slowPointer = slowPointer.Next
        fastPointer = fastPointer.Next.Next
    }
    beforeMid.Next = slowPointer.Next
    return head
}
