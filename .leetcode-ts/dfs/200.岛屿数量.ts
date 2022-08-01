/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */
// numIslands([["1", "1", "1"], ["0", "1", "0"], ["1", "1", "1"]])
// @lc code=start
function numIslands(grid: string[][]): number {
  let counts = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        counts++;
        dfs(grid, i, j)
      }
    }
  }
  return counts;

  function dfs(grid: string[][], i: number, j: number) {

    grid[i][j] = '0'

    if (grid[i + 1] !== undefined && grid[i + 1][j] === '1') {
      dfs(grid, i + 1, j)
    }
    if (grid[i - 1] !== undefined && grid[i - 1][j] === '1') {
      dfs(grid, i - 1, j)
    }
    if (grid[i][j + 1] !== undefined && grid[i][j + 1] === '1') {
      dfs(grid, i, j + 1)
    }
    if (grid[i][j - 1] !== undefined && grid[i][j - 1] === '1') {
      dfs(grid, i, j - 1)
    }
  }
};
// @lc code=end

