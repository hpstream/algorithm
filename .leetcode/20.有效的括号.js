/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let map = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) return false;
      let key = stack.pop();
      if (map[key] !== s[i]) {
        return false;
      }
    }
  }

  return stack.length === 0 ? true : false;

};
// @lc code=end