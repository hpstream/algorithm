/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  let result: number[][] = [];
  dfs(nums, 0, []);
  function dfs(nums: number[], index: number, res: number[]) {
    result.push(res);
    if (index >= nums.length) return;
    for (let i = index; i < nums.length; i++) {
      dfs(nums, i + 1, [...res, nums[i]]);
    }
  }

  return result;
}
// @lc code=end
