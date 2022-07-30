/*
 * @lc app=leetcode.cn id=123 lang=typescript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // 未进行过任何操作；// 收益为0
  // 只进行过一次买操作；
  // 进行了一次买操作和一次卖操作，即完成了一笔交易；
  // 在完成了一笔交易的前提下，进行了第二次买操作；
  // 完成了全部两笔交易。

  let d1 = -prices[0];
  let d2 = 0;
  let d3 = -prices[0];
  let d4 = 0;

  for (let i = 1; i < prices.length; i++) {
    d1 = Math.max(d1, -prices[i])
    d2 = Math.max(d2, d1 + prices[i])
    d3 = Math.max(d3, d2 - prices[i])
    d4 = Math.max(d4, d3 + prices[i])
  }
  return d4

};
// @lc code=end

