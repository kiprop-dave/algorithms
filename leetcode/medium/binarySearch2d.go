/*
* Search a sorted 2d matrix for the target element
* Solution: Use a binarySearch to find the row where the target could be and perform another binarySearch
* on that row to determine if it is there
 */

func searchMatrix(matrix [][]int, target int) bool {
	l, r := 0, len(matrix)-1
	for l <= r {
		mid := (l + r) / 2
		if matrix[mid][0] <= target && matrix[mid][len(matrix[mid])-1] >= target {
			if binarySearch(matrix[mid], target) {
				return true
			}
			break
		} else if matrix[mid][0] > target {
			r = mid - 1
		} else {
			l = mid + 1
		}
	}
	return false
}

func binarySearch(arr []int, target int) bool {
	l, r := 0, len(arr)-1
	for l <= r {
		mid := (l + r) / 2
		if arr[mid] == target {
			return true
		} else if arr[mid] > target {
			r = mid - 1
		} else {
			l = mid + 1
		}
	}
	return false
}
