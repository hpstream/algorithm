// 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

//

// 示例 1:

// 输入:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// 输出: 12
// 解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  let dp = new Array(rows).fill(0).map((v) => new Array(cols).fill(0));
  // new Array(n).fill(0).map((v) => new Array(m).fill(0));
  dp[0][0] = grid[0][0];

  for (let col = 1; col < cols; col++) {
    dp[0][col] = dp[0][col - 1] + grid[0][col];
  }
  for (let row = 1; row < rows; row++) {
    dp[row][0] = dp[row - 1][0] + grid[row][0];
  }

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      dp[row][col] =
        Math.max(dp[row - 1][col], dp[row][col - 1]) + grid[row][col];
    }
  }
  console.log(dp);
  return dp[rows - 1][cols - 1];
};
console.log(
  maxValue([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
