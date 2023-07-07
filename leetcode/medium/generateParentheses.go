func generateParenthesis(n int) []string {
	res := []string{}
	backtrack("", 0, 0, n, &res)
	return res
}

func backtrack(combination string, open, close, n int, res *[]string) {
	if open == n && close == n {
		*res = append(*res, combination)
		return
	}

	if open < n {
		backtrack(combination+"(", open+1, close, n, res)
	}

	if close < open && close < n {
		backtrack(combination+")", open, close+1, n, res)
	}
}

