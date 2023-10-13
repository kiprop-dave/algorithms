/* You are given an integer array cost where cost[i] is the cost of ith step on a staircase. 
 * Once you pay the cost, you can either climb one or two steps.
 * You can either start from the step with index 0, or the step with index 1.
 * Return the minimum cost to reach the top of the floor.
 * Solution:Dynamic Programming
 * Time complexity O(n)
 * Space complexity (n)
  */


function minCostClimbingStairs(cost: number[]): number {
  const l = cost.length;
  const dp = Array(l + 1).fill(0);
  for (let i = 2; i <= l; i++) {
    dp[i] = Math.min((dp[i - 1] + cost[i - 1]), (dp[i - 2] + cost[i - 2]));
  }
  return dp[l];
};
