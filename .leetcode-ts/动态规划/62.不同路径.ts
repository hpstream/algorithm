/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 */
// 此题用动态规划做

// @lc code=start
function uniquePaths(m: number, n: number): number {
  if (m <= 1) return m;
  if (n <= 1) return n;
  // let dep = new Array(m).fill(0).map(() => new Array(n).fill(1));
  let dep = new Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    // console.log(dep);
    for (let j = 1; j < n; j++) {
      dep[j] = dep[j] + dep[j - 1];
    }
  }

  return dep[n - 1];
}
// @lc code=end
