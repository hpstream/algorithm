/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
// 68ms  96.68%  84.89%
function lengthOfLongestSubstring(s: string): number {
  if (s.length == 0) return 0;
  let prevIdexs: any[] = [];

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
}

// 96ms  31.69%  27.32%
function lengthOfLongestSubstring1(s: string): number {
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
}
// @lc code=end
