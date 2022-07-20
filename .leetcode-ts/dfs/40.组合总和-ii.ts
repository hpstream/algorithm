/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */
// [1,1,2,5,6,7,10]
// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
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
    let map: any = {};
    for (let i = last; i < candidates.length; i++) {
      if (candidates[i] > target) break;
      if (map[candidates[i]]) continue;
      map[candidates[i]] = true;
      dfs([...path, candidates[i]], candidates[i] + cVal, i + 1);
    }
  }
}
// @lc code=end
