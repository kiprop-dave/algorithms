package main

type TreeNode struct {
	Val  int
	Left *TreeNode
	Right *TreeNode
}

type BSTIterator struct {
	Stack []*TreeNode
}

func Constructor(root *TreeNode) BSTIterator {
	it := BSTIterator{}
	for p := root; p != nil; p = p.Left {
		it.Stack = append(it.Stack, p)
	}
	return it
}

func (this *BSTIterator) Next() int {
	li := len(this.Stack) - 1
	le := this.Stack[li]
	this.Stack = this.Stack[:li]
	for p := le.Right; p != nil; p = p.Left {
		this.Stack = append(this.Stack, p)
	}
	return le.Val
}

func (this *BSTIterator) HasNext() bool {
	return len(this.Stack) != 0
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * obj := Constructor(root);
 * param_1 := obj.Next();
 * param_2 := obj.HasNext();
 */
