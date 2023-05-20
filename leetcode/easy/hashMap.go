type MyHashMap struct {
  hMap map[int]int
}


func Constructor() MyHashMap {
  m := make(map[int]int)
  return MyHashMap{hMap:m}
}


func (this *MyHashMap) Put(key int, value int)  {
 this.hMap[key] = value
}


func (this *MyHashMap) Get(key int) int {
  if v,ok := this.hMap[key]; ok {
    return v
  }
  return -1
}


func (this *MyHashMap) Remove(key int)  {
  if _,ok := this.hMap[key]; ok {
    delete(this.hMap,key)
  }
}


/**
 * Your MyHashMap object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Put(key,value);
 * param_2 := obj.Get(key);
 * obj.Remove(key);
 */
