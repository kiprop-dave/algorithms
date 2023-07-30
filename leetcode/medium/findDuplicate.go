/* Find the Duplicate Number in an array with n+1 elements and each element is between 1 and n inclusive.
* Assume that there is only one duplicate number, find the duplicate one. Solve this problem without modifying the array
* or using extra space.
* Solution: Floyd's Tortoise and Hare (Cycle Detection)
 */

func findDuplicate(nums []int) int {
	first, second := nums[0], nums[0]
	for {
		first = nums[first]
		second = nums[nums[second]]
		if first == second {
			break
		}
	}
	second = nums[0]
	for first != second {
		first = nums[first]
		second = nums[second]
	}
	return first
}
