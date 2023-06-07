// Create a circular buffer data structure

type MyCircularQueue struct {
  buffer []int
  size int
  head int
  tail int
  els int
}


func Constructor(k int) MyCircularQueue {
  buf := make([]int,k)
  return MyCircularQueue{buffer:buf,size:k,head:0,tail:0,els:0}
}


func (this *MyCircularQueue) EnQueue(value int) bool {
  if this.IsFull() {
    return false
  }
  this.buffer[this.tail] = value
  this.els += 1
  this.tail = (this.tail + 1) % this.size
  return true
}


func (this *MyCircularQueue) DeQueue() bool {
  if this.IsEmpty(){
    return false
  }
  this.head = (this.head + 1) % this.size
  this.els -= 1
  return true
}


func (this *MyCircularQueue) Front() int {
  if this.IsEmpty(){
    return -1
  }
  return this.buffer[this.head]
}


func (this *MyCircularQueue) Rear() int {
  if this.IsEmpty(){
    return -1
  }
  i := this.tail
  if i == 0 {
    i = this.size
  }
  return this.buffer[i - 1]
}


func (this *MyCircularQueue) IsEmpty() bool {
  return this.els == 0
}


func (this *MyCircularQueue) IsFull() bool {
  return this.els == this.size
}


/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * obj := Constructor(k);
 * param_1 := obj.EnQueue(value);
 * param_2 := obj.DeQueue();
 * param_3 := obj.Front();
 * param_4 := obj.Rear();
 * param_5 := obj.IsEmpty();
 * param_6 := obj.IsFull();
 */
