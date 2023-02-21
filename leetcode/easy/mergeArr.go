func merge(nums1 []int, m int, nums2 []int, n int) {
	if n == 0 {
		return
	}
	var temp1 []int
	for i := 0; i < m; i++ {
		temp1 = append(temp1, nums1[i])
	}
	i, j, k := 0, 0, 0
	for i < m && j < n {
		if temp1[i] < nums2[j] {
			nums1[k] = temp1[i]
			i++
			k++
		} else {
			nums1[k] = nums2[j]
			j++
			k++
		}
	}
	for i < m {
		nums1[k] = temp1[i]
		i++
		k++
	}
	for j < n {
		nums1[k] = nums2[j]
		j++
		k++
	}
	fmt.Println(nums1)
}
