func tribonacci(n int) int {
    if n == 0 {
        return 0
    }
    if n <= 2 {
        return 1
    }
    third := 0
    second := 1
    first := 1
    res := 0
    for n > 2 {
        res = first + second + third
        third = second
        second = first
        first = res
        n--
    }
    return res
}
