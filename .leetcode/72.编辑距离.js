/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let rows = word1.length + 1;
  let cols = word2.length + 1;
  let dp = new Array(rows).fill(0).map((row) => new Array(cols).fill(0));

  for (let row = 1; row < rows; row++) {
    dp[row][0] = row;
  }

  for (let col = 1; col < cols; col++) {
    dp[0][col] = col;
  }

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      // dp[row][col];
      let min = Math.min(1 + dp[row - 1][col], 1 + dp[row][col - 1]);

      if (word1[row - 1] != word2[col - 1]) {
        dp[row][col] = Math.min(dp[row - 1][col - 1] + 1, min);
      } else {
        dp[row][col] = Math.min(dp[row - 1][col - 1], min);
      }
    }
  }
  return dp[rows - 1][cols - 1];
};
// @lc code=end
