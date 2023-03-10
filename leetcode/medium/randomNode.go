type Solution struct {
    ListHead *ListNode
    Length int
    Map map[int]int
}


func Constructor(head *ListNode) Solution {
    i := 0
    listMap := make(map[int]int)
    p := head
    for p != nil {
        listMap[i] = p.Val
        i++
        p = p.Next
    }
    return Solution{ListHead:head,Length:i,Map:listMap}
}


func (this *Solution) GetRandom() int {
    randIndex := rand.Intn(this.Length)
    v,ok := this.Map[randIndex]
    if !ok {
        fmt.Println("Error")
    }
    return v
}
