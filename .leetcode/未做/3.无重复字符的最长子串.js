/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 68ms  96.68%  84.89%
var lengthOfLongestSubstring = function (s) {
  if (s.length == 0) return 0;
  let prevIdexs = [];

  prevIdexs[s.charCodeAt(0) - 97] = 0;
  let li = 0;
  let max = 1;
  for (let i = 1; i < s.length; i++) {
    let pi = prevIdexs[s.charCodeAt(i) - 97];

    if (pi != undefined && li <= pi) {
      li = pi + 1;
    }
    prevIdexs[s.charCodeAt(i) - 97] = i;
    max = Math.max(max, i - li + 1);
  }
  return max;
};
// 96ms  31.69%  27.32%
var lengthOfLongestSubstring1 = function (s) {
  if (s.length == 0) return 0;
  let prevIdexs = {};

  prevIdexs[s[0]] = 0;
  let li = 0;
  let max = 1;
  for (let i = 1; i < s.length; i++) {
    let pi = prevIdexs[s[i]];

    if (pi != undefined && li <= pi) {
      li = pi + 1;
    }
    prevIdexs[s[i]] = i;
    max = Math.max(max, i - li + 1);
  }
  return max;
};
// lengthOfLongestSubstring("abcabcbb");
// @lc code=end
