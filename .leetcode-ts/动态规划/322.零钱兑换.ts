/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
  // 得用动态规划找最优解
  let dp = [0];

  for (let i = 1; i <= amount; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < coins.length; j++) {
      let coin = coins[j];
      // dp[i] = dp[n - coin] + 1
      if (i >= coin && dp[i - coin] != -1) {
        min = Math.min(min, dp[i - coin]);
      }
    }
    if (min == Number.MAX_SAFE_INTEGER) {
      dp[i] = -1;
    } else {
      dp[i] = min + 1;
    }
  }
  // console.log(dp)
  return dp[amount];
}
// @lc code=end
