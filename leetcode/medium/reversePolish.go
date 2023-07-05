func evalRPN(tokens []string) int {
  tokenMap := map[string]string{
    "/":"/",
    "*":"*",
    "+":"+",
    "-":"-",
  }
  stack := []int{}
  for _,v := range tokens {
    if operator,ok := tokenMap[v]; ok {
      l := len(stack)
      last,secondLast := stack[l - 1],stack[l - 2]
      res := calculate(operator,secondLast,last)
      stack = stack[0:l - 2]
      stack = append(stack,res)
    }else{
      n,_ := strconv.Atoi(v)
      stack = append(stack,n)
    }
  }
  return stack[len(stack) - 1]
}

func calculate(operator string,a,b int)int{
  var res int
  switch operator {
    case "+":
      res = a + b
    case "-":
      res = a - b
    case "*":
      res = a * b
    case "/":
      res = a/b
  }
  return res
}
