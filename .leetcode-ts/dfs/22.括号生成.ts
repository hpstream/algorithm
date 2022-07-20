/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  let list: string[] = [];
  let str: string[] = new Array(n << 1).fill("");
  dfs(0, n, n, str, list);
  return list;

  function dfs(
    idx: number,
    leftRemain: number,
    rightRemain: number,
    str: string[],
    list: string[]
  ) {
    if (idx == str.length) {
      list.push(str.join(""));
      return;
    }
    if (leftRemain > 0) {
      str[idx] = "(";
      dfs(idx + 1, leftRemain - 1, rightRemain, str, list);
    }
    if (rightRemain > 0 && leftRemain != rightRemain) {
      str[idx] = ")";
      dfs(idx + 1, leftRemain, rightRemain - 1, str, list);
    }
  }
}
// @lc code=end
