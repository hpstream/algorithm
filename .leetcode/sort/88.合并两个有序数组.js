/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let cur = nums1.length - 1;
  let i1 = m - 1;
  let i2 = n - 1;
  while (i2 >= 0) {
    if (i1 >= 0 && nums2[i2] < nums1[i1]) {
      nums1[cur--] = nums1[i1--]
    } else {
      nums1[cur--] = nums2[i2--]
    }
  }


};
// @lc code=end