/*
* Find Minimum in Rotated Sorted Array
* Solution: Binary Search. Check it is already sorted or not.
* If not, check if the mid value is smaller than the ans.
* If it is, update the ans. Then check if the left part is sorted or not.
* If it is, the minimum value is in the right part. If the right part is sorted,
* the minimum value is in the left part.
* Time Complexity: O(logn)
 */

func findMin(nums []int) int {
	l, r := 0, len(nums)-1
	ans := 50001
	for l <= r {
		if nums[l] <= nums[r] && nums[l] < ans {
			return nums[l]
		}
		m := (l + r) / 2
		if nums[m] < ans {
			ans = nums[m]
		}
		if nums[l] <= nums[m] {
			l = m + 1
		} else {
			r = m - 1
		}
	}
	return ans
}
