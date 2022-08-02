/*
 * @lc app=leetcode.cn id=455 lang=typescript
 *
 * [455] 分发饼干
 */

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {

  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let count = 0;

  let i = 0;
  for (let j = 0; j < s.length; j++) {
    if (s[j] >= g[i]) {
      count++;
      i++;
    }
  }
  return count;
};
// @lc code=end

