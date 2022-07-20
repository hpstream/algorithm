/*
 * @lc app=leetcode.cn id=52 lang=typescript
 *
 * [52] N皇后 II
 */

// @lc code=start
function totalNQueens(n: number): number {
  let posions: Record<number, any> = {};
  let count = 0;
  dfs(0);
  return count;

  function dfs(row: number) {
    if (row >= n) {
      count++;
      return;
    }
    for (let col = 0; col < n; col++) {
      // 处理列
      if (posions[col] !== undefined) continue;
      // 查看是否在斜线上
      let flag = false;
      for (const x in posions) {
        if (Math.abs(row - posions[x]) == Math.abs(col - Number(x))) {
          flag = true;
          break;
        }
      }
      if (flag) continue;
      posions[col] = row;
      dfs(row + 1);
      posions[col] = undefined;
    }
  }
}
// @lc code=end
