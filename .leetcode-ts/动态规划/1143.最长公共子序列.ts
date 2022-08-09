/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 *
 * [1143] 最长公共子序列
 */

//   a b c d e
// a 1 1 1 1 1
// c 1 1 2 2 2
// e 1 1 2 2 3

// @lc code=start
function longestCommonSubsequence(text1: string, text2: string): number {
  let dp = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0))


  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {

      if (text1[i - 1] == text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }

  }

  return dp[text1.length][text2.length]

};
// @lc code=end

