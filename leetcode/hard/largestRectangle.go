/*
* Given an array of integers heights representing the histogram's
* bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
* Solution: Use a stack holding objects with the height and startIndex of the bar. Calculate the area occupied by
* the bar and pop it from the stack if the height of the current bar is shorter than the top bar in the stack. Set the
* startIndex of the new bar on top to be the index of the previous top bar on the stack.
 */

type Rectangle struct {
	startIndex, height int
}

func largestRectangleArea(heights []int) int {
	maxArea := 0
	rectangles := []Rectangle{{startIndex: 0, height: heights[0]}}
	for i := 1; i < len(heights); i++ {
		top := rectangles[len(rectangles)-1]
		nextTop := Rectangle{startIndex: i, height: heights[i]}
		for len(rectangles) > 0 && top.height > heights[i] {
			topArea := top.height * (i - top.startIndex)
			maxArea = max(maxArea, topArea)
			nextTop.startIndex = top.startIndex
			rectangles = rectangles[:len(rectangles)-1]
			if len(rectangles) < 1 {
				break
			}
			top = rectangles[len(rectangles)-1]
		}
		rectangles = append(rectangles, nextTop)
	}
	for _, r := range rectangles {
		area := r.height * (len(heights) - r.startIndex)
		maxArea = max(maxArea, area)
	}
	return maxArea
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
