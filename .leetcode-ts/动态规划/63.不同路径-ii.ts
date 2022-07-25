/*
 * @lc app=leetcode.cn id=63 lang=typescript
 *
 * [63] 不同路径 II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  // if (m <= 1) return m;
  // if (n <= 1) return n;
  // let dep = new Array(m).fill(0).map(() => new Array(n).fill(1));
  let dep = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] == 1) {
      dep[i] = 0;
    } else {
      dep[i] = dep[i - 1] == undefined ? 1 : dep[i - 1];
    }
  }
  for (let i = 1; i < m; i++) {
    if (obstacleGrid[i][0] == 1) {
      dep[0] = 0;
    }
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] == 1) {
        dep[j] = 0;
        continue;
      } else {
        dep[j] = dep[j] + dep[j - 1];
      }
    }
  }

  return dep[n - 1];
}
// @lc code=end
