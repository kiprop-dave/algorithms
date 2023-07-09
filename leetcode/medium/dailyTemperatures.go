/*
* Given an array of integers temperatures represents the daily temperatures,
* return an array answer such that answer[i] is the number of days you have to
* wait after the ith day to get a warmer temperature. If there is no future day
* for which this is possible, keep answer[i] == 0 instead.

* Solution: Use a stack to hold the index and value of that position in the list. Whenever you find
* a warmer temperature than the top member of the stack, pop id, get the difference and add it to the result at the
* indes stored with the top member of the stack
 */

type StackMember struct {
	value int
	index int
}

func dailyTemperatures(temperatures []int) []int {
	res := make([]int, len(temperatures))
	stack := []StackMember{}

	for i, v := range temperatures {
		for len(stack) > 0 && v > stack[len(stack)-1].value {
			last := stack[len(stack)-1]
			res[last.index] = i - last.index
			stack = stack[:len(stack)-1]
		}
		stack = append(stack, StackMember{value: v, index: i})
	}
	return res
}
