//You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

//Merge all the linked-lists into one sorted linked-list and return it.


 // Definition for singly-linked list.
 type ListNode struct {
      Val int
      Next *ListNode
}

func mergeKLists(lists []*ListNode) *ListNode {
    l := len(lists)
	if l < 1 {
		return nil
	}
	if l == 1 {
		return lists[0]
	}
	if l == 2 {
		return mergeTwoList(lists[0], lists[1])
	}
	mid := l / 2
	var lower []*ListNode
	var upper []*ListNode
	for i := 0; i < mid; i++ {
		lower = append(lower, lists[i])
	}
	for i := mid; i < l; i++ {
		upper = append(upper, lists[i])
	}
	x := mergeKLists(lower)
	y := mergeKLists(upper)
	return mergeTwoList(x, y)
}

func mergeTwoList(l1, l2 *ListNode) *ListNode {
	if l1 == nil {
		return l2
	}
	if l2 == nil {
		return l1
	}
	if l1.Val < l2.Val {
		l1.Next = mergeTwoList(l1.Next, l2)
		return l1
	}
	l2.Next = mergeTwoList(l1, l2.Next)
	return l2
}

