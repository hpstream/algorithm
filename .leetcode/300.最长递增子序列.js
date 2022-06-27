/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {

  let dp = [1];

  let max = dp[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] <= nums[j]) continue;
      dp[i] = Math.max(dp[i], dp[j] + 1)
    }
    max = Math.max(dp[i], max)
  }

  return max;
};
// @lc code=end