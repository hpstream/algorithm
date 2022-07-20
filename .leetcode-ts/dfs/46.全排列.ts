/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  let list: number[][] = [];

  dfs(0, list);
  return list;

  function dfs(idx: number, list: number[][]) {
    if (idx === nums.length) {
      list.push([...nums]);
      return;
    }

    for (let i = idx; i < nums.length; i++) {
      swap(idx, i);
      dfs(idx + 1,list);
      swap(i, idx);
    }
  }

  function swap(i: number, j: number) {
    let tem = nums[i];
    nums[i] = nums[j];
    nums[j] = tem;
  }
}
function permute2(nums: number[]): number[][] {
  let list: number[][] = [];
  let result: number[] = [];

  dfs(0);
  return list;

  function dfs(idx: number) {
    if (idx === nums.length) {
      list.push([...result]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (result.indexOf(nums[i]) > -1) continue;
      result.push(nums[i]);
      dfs(idx + 1);
      result.pop();
    }
  }
}
function permute1(nums: number[]): number[][] {
  let list: number[][] = [];
  let result: number[] = [];
  let used: boolean[] = [];

  dfs(0);
  return list;

  function dfs(idx: number) {
    if (idx === nums.length) {
      list.push([...result]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      result[idx] = nums[i];
      used[i] = true;
      dfs(idx + 1);
      used[i] = false;
    }
  }
}
// @lc code=end
