type Node struct{
  value int
  min int
}

type MinStack struct {
  stack []Node
}

func Constructor() MinStack {
  return MinStack{stack:[]Node{}}
}


func (this *MinStack) Push(val int)  {
  newNode := Node{value:val,min:val}
  length := len(this.stack)
  if length > 0 {
    top := this.stack[len(this.stack) - 1].min
    if top < val {
      newNode.min = top
    }
  }
  this.stack = append(this.stack,newNode)
}


func (this *MinStack) Pop() {
  this.stack = this.stack[0:len(this.stack) - 1]
}


func (this *MinStack) Top() int { 
  top := this.stack[len(this.stack) - 1].value
  return top
}


func (this *MinStack) GetMin() int {
  top := this.stack[len(this.stack) - 1].min
  return top   
}


/**
 * Your MinStack object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(val);
 * obj.Pop();
 * param_3 := obj.Top();
 * param_4 := obj.GetMin();
 */
