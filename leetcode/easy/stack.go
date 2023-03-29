package leetcode

type Node struct {
	Value int
	Next  *Node
}

type MyStack struct {
	top   *Node
	empty bool
}

func Constructor() MyStack {
	topNode := &Node{}
	return MyStack{topNode, true}
}

func (this *MyStack) Push(x int) {
	newNode := &Node{Value: x, Next: nil}
	if this.empty {
		this.top = newNode
		this.empty = false
		return
	}
	newNode.Next = this.top
	this.top = newNode
}

func (this *MyStack) Pop() int {
	out := this.top.Value
	if this.top.Next == nil {
		this.empty = true
	}
	this.top = this.top.Next
	return out
}

func (this *MyStack) Top() int {
	return this.top.Value
}

func (this *MyStack) Empty() bool {
	return this.empty
}
