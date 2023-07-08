/*
*Given an array of positive integers nums and a positive integer target, return the minimal length of a
subarray
whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
*Solution: Use two pointers and a sliding window; adding more elements to the right and removing them from the
left when the target is reached and updating the minimum length
* */

func minSubArrayLen(target int, nums []int) int {
	// left and right pointer and the sum of the current subarray
	left, right, groupSum := 0, 0, 0
	// minimum number of elements needed so far
	minSum := 100001
	for right < len(nums) {
		// Add the current right element to the groupSum
		groupSum += nums[right]

		for groupSum >= target {
			// Update the minSum
			minSum = min(minSum, right-left+1)
			// Remove the left element from the subarray sum
			groupSum -= nums[left]
			left++
		}

		right++
	}
	if minSum == 100001 {
		return 0
	}
	return minSum
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
