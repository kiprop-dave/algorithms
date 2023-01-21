package main

import "fmt"

func main(){
	numbers := []int{-2,-1,-1,1,2,3}
	fmt.Println(maximumCount(numbers))
}

func maximumCount(nums []int) int {
    pos := 0
    neg := 0

    for _, el := range nums {
        if el > 0 {
            pos += 1
        }else if el < 0 {
            neg += 1
        }
    }
    if pos > neg {
        return pos
    }
    return neg
}
