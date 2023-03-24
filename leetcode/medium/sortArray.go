package main

import(
    "fmt"
)

func main(){
	testData := []int{5,2,3,1}
	fmt.Println(sortArray(testData))
}

func sortArray(nums []int) []int {
	l := len(nums)
	if l < 2 {
		return nums
	}
	mid := l / 2
	var lower, upper []int
	lower = nums[:mid]
	upper = nums[mid:]
	sortedLow := sortArray(lower)
	sortedUp := sortArray(upper)
	return merge(sortedLow, sortedUp)
}

func merge(low, up []int) []int {
	li, lj, i, j, k := len(low), len(up), 0, 0, 0
	merged := make([]int, li+lj)
	for i < li && j < lj {
		if low[i] < up[j] {
			merged[k] = low[i]
			i++
			k++
		} else {
			merged[k] = up[j]
			j++
			k++
		}
	}
	for i < li {
		merged[k] = low[i]
		i++
		k++
	}
	for j < lj {
		merged[k] = up[j]
		j++
		k++
	}
	return merged
}
