// Return all the possible ways you can climb stairs if you can go one or two steps at a time

function climbStairs(n: number,memo:Record<string,number> = {}): number {
  if(n <= 3) return n;
  if(n in memo) return memo[n];
  memo[n] = climbStairs(n - 1,memo) + climbStairs(n - 2,memo);
  return memo[n];
};
