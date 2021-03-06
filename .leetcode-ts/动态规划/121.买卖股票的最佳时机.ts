/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start

// 可用动态规划，转换成 53.最大子数组和
function maxProfit(prices: number[]): number {
  if (prices.length == 0) return 0;
  let profits = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
      continue;
    } else {
      profits = Math.max(prices[i] - minPrice, profits);
    }
  }

  return profits;
}
// @lc code=end
