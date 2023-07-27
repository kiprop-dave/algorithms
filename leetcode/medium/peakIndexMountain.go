/*
* Find the peak index in a mountain array
* Solution: Binary Search while checking if the mid is greater than its neighbors
 */

func peakIndexInMountainArray(arr []int) int {
	var peak int
	l, r := 0, len(arr)-1
	for l <= r {
		m := (l + r) / 2
		if m != 0 && arr[m] > arr[m-1] && arr[m] > arr[m+1] {
			peak = m
			break
		} else if arr[m] < arr[m+1] {
			l = m + 1
		} else {
			r = m - 1
		}
	}
	return peak
}
