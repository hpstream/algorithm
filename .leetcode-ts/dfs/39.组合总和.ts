/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  //假设数组是升序
  let result: number[][] = [];
  candidates.sort((a, b) => a - b);
  dfs([], 0, 0);
  return result;

  function dfs(path: number[], cVal: number, last: number) {
    if (cVal > target) return;
    if (cVal === target) {
      result.push(path);
      return;
    }

    for (let i = last; i < candidates.length; i++) {
      if (candidates[i] > target) break;
      dfs([...path, candidates[i]], candidates[i] + cVal, i);
    }
  }
}
// @lc code=end
