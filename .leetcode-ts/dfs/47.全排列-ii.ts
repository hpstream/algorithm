/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  let list: number[][] = [];

  dfs(0, list);
  return list;

  function dfs(idx: number, list: number[][]) {
    if (idx === nums.length) {
      list.push([...nums]);
      return;
    }
    // let useMap = {};
    for (let i = idx; i < nums.length; i++) {
      // if (useMap[nums[i]]) continue;
      // useMap[nums[i]] = true;
      if (isRepeat(nums, idx, i)) continue;
      swap(idx, i);
      dfs(idx + 1, list);
      swap(i, idx);
    }
  }

  function isRepeat(nums: number[], idx: number, i: number) {
    for (let j = idx; j < i; j++) {
      if (nums[j] == nums[i]) return true;
    }
    return false;
  }

  function swap(i: number, j: number) {
    let tem = nums[i];
    nums[i] = nums[j];
    nums[j] = tem;
  }
}
// @lc code=end
