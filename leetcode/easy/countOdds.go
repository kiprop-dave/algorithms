//Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

func countOdds(low int, high int) int {
 diff := high - low
 if low % 2 == 1 || high % 2 == 1 {
     return diff/2 + 1
 }
 return diff/2
}
