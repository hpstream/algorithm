/*
 * @lc app=leetcode.cn id=51 lang=typescript
 *
 * [51] N 皇后
 */

// [
//   ["Q", "", ".", "."],
//   [".", ".", ".", "."], // 2,2, 0,0, 1,1,1,3
//   [".", ".", "Q", "."],
//   [".", ".", ".", "."],
// ];
// @lc code=start
// solveNQueens(4);
function solveNQueens(n: number): string[][] {
  let result: string[][] = [];
  let tem: string[][] = new Array(n).fill("").map(() => new Array(n).fill("."));
  let posions: Record<number, any> = {};
  dfs(0);
  return result;

  function dfs(row: number) {
    if (row >= n) {
      let r: string[] = [];
      for (let i = 0; i < tem.length; i++) {
        r.push(tem[i].join(""));
      }
      result.push(r);
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
      tem[row][col] = "Q";
      dfs(row + 1);
      posions[col] = undefined;
      tem[row][col] = ".";
    }
  }
}
// 88ms 45.09% 37.58%
function solveNQueens1(n: number): string[][] {
  let result: string[][] = [];
  let posions: Record<number, any> = {};
  dfs(0);
  return result;

  function dfs(row: number) {
    if (row >= n) {
      let r: string[] = [];
      let tem: string[] = new Array(n).fill(".");
      for (const key in posions) {
        let row = posions[key];
        let col = key;
        tem[col] = "Q";
        r[row] = tem.join("");
        tem[col] = ".";
      }
      result.push(r);
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

      // tem[row][col] = "Q";
      dfs(row + 1);
      posions[col] = undefined;
      // tem[row][col] = ".";
    }
  }
}
// @lc code=end
