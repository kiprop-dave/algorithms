package main

import "fmt"

func main(){
    n := 121
    fmt.Println(countDigits(n))
}

func countDigits(num int) int {
    out := 0
    n := num
    
    for n != 0 {
        d := n % 10
        if d != 0 {
            div := num % d
            if div == 0 {
                out += 1
            }
        }
        n = n/10
    }
    return out
}
