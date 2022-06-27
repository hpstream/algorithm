/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let nums1 = text1,
    nums2 = text2;
  let dp = [];
  for (let i = 0; i <= nums1.length; i++) {
    for (let j = 0; j <= nums2.length; j++) {
      if (!dp[i]) dp[i] = [];
      if (i == 0 || j == 0) {
        dp[i][j] = 0;
        continue;
      }

      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[nums1.length][nums2.length];
};
// @lc code=end