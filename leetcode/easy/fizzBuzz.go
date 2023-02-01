func fizzBuzz(n int) []string {
    out := make([]string,0)
    for i := 1; i <= n; i++ {
        if i % 3 == 0 && i % 5 == 0 {
            out = append(out,"FizzBuzz")
        }else if i % 3 == 0 {
            out = append(out,"Fizz")
        }else if i % 5 == 0 {
            out = append(out,"Buzz")
        }else{
            out = append(out, strconv.Itoa(i))
        }
    }
    return out
}
