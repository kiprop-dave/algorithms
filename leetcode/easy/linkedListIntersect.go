type ListNode struct {
    Val int
    Next *ListNode
}

func getIntersectionNode(headA, headB *ListNode) *ListNode {
    nodeMap := make(map[*ListNode]bool)
    for n := headA; n != nil; n = n.Next {
        nodeMap[n] = true
    }
    for n := headB;n != nil; n = n.Next {
        if nodeMap[n]{
            return n
        }
    }
    return nil
}
