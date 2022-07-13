/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// ()()()))

var longestValidParentheses = function (s) {
  let stack = [-1];
  let maxValidCount = 0;
  if (s.length == 0) return maxValidCount;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(i);
    } else if (stack.length == 1) {
      // 代表无效
      stack[0] = i;
    } else {
      stack.pop();
      // 有效结束记录下
      maxValidCount = Math.max(maxValidCount, i - stack[stack.length - 1]);
    }
  }
  return maxValidCount;
};
// @lc code=end
