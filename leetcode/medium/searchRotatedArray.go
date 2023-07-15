/*
* Search for the target in a sorted rotated array with O(log n) runtime
* Solution: Use a binary search and check if the mid pointer is in the left or right sorted
* array and move the left and right pointers accordingly
 */

func search(nums []int, target int) int {
	l, r := 0, len(nums)-1

	for l <= r {
		m := (l + r) / 2
		if nums[m] == target {
			return m
		}
		if nums[l] <= nums[m] {
			// m is in the left sorted array
			if target > nums[m] || target < nums[l] {
				l = m + 1
			} else {
				r = m - 1
			}
		} else {
			if target < nums[m] || target > nums[r] {
				r = m - 1
			} else {
				l = m + 1
			}
		}
	}
	return -1
}
