/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
你可以不使用代码库中的排序函数来解决这道题吗？
你能想出一个仅使用常数空间的一趟扫描算法吗？
输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2] 
空间复杂度O(1),时间复杂度O(n)
 */
var sortColors = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let i = 0;
  while (i <= r) {
    let v = nums[i]
    if (v == 0) {
      swap(nums, i++, l++)
    } else if (v == 1) {
      i++
    } else {
      swap(nums, i, r--)
    }
  }
};

function swap(nums, i, j) {
  let tem = nums[i];
  nums[i] = nums[j];
  nums[j] = tem;

}
// @lc code=end

