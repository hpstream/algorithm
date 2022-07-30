/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  //  dp[i][0] 表示第i天交易完成后。手里没有股票的最大利润
  //  dp[i][1] 表示第i天交易完成后。手里有股票的最大利润；

  let dp1 = 0, dp2 = -prices[0];
  for (let i = 0; i < prices.length; i++) {
    dp1 = Math.max(dp1, dp2 + prices[i]);
    dp2 = Math.max(dp2, dp1 - prices[i]);
  }
  return dp1;
};
// @lc code=end

