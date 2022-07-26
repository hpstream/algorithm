/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
  let m = grid.length;
  let n = grid[0].length;
  for (let i = 1; i < n; i++) {
    grid[0][i] = grid[0][i] + grid[0][i - 1];
  }

  for (let i = 1; i < m; i++) {
    grid[i][0] = grid[i][0] + grid[i - 1][0];
    for (let j = 1; j < n; j++) {
      grid[i][j] = grid[i][j] + Math.min(grid[i][j - 1], grid[i - 1][j]);
    }
  }
  // console.log(grid);
  return grid[m - 1][n - 1];
}
// @lc code=end
