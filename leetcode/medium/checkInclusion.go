/* Problem Description:
* Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1.
* Solution: Sliding Window
* */

func CheckInclusion(s1 string, s2 string) bool {
	if len(s1) > len(s2) {
		return false
	}
	w1 := createCharWindow(s1)
	l, r := 0, len(s1)
	w2 := createCharWindow(s2[l:r])
	for r <= len(s2) {
		if compareWindow(w1, w2) {
			return true
		}
		if r == len(s2) {
			break
		}
		w2[s2[l]-'a']--
		w2[s2[r]-'a']++
		l++
		r++
	}
	return false
}

func createCharWindow(s string) []int {
	charWindow := make([]int, 27)
	for _, char := range s {
		charWindow[char-'a']++
	}
	return charWindow
}

func compareWindow(window1, window2 []int) bool {
	for i := 0; i < 26; i++ {
		if window1[i] != window2[i] {
			return false
		}
	}
	return true
}
