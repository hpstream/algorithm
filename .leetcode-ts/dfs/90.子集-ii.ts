/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
  let result: number[][] = [];
  nums.sort((a, b) => a - b);
  dfs(nums, 0, []);
  function dfs(nums: number[], index: number, res: number[]) {
    result.push(res);
    if (index >= nums.length) return;

    for (let i = index; i < nums.length; i++) {
      if (i != index && nums[i] == nums[i - 1]) continue;
      dfs(nums, i + 1, [...res, nums[i]]);
    }
  }

  return result;
}
// @lc code=end
