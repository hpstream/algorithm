/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  let counts = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < t.length; i++) {
    if (counts[t.charCodeAt(i) - 97] == 0) return false;
    counts[t.charCodeAt(i) - 97]--;
  }
  return true;
};
// @lc code=end
