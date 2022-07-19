/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let list = [];
  let tem = [];
  dfs(0, nums, tem, list);
  return list;
  function dfs(idx, numsArr, tem, list) {
    if (idx == nums.length) {
      list.unshift([...tem]);
      return;
    }
    for (let i = 0; i < numsArr.length; i++) {
      let a = [...numsArr];
      a.splice(i, 1);
      dfs(idx + 1, a, [numsArr[i], ...tem], list);
    }
  }
};
// @lc code=end
