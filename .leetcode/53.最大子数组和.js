/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length == 0) return 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let begin = 0; begin < nums.length; begin++) {
    for (let end = begin; end < nums.length; end++) {
      let sum = 0;
      for (let i = begin; i <= end; i++) {
        sum += nums[i];
      }

      max = Math.max(sum, max);
    }
  }

  return max;
};
// @lc code=end