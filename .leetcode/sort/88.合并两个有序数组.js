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
  let length = nums1.length;
  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[length - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[length - 1] = nums2[n - 1]
      n--;
    }
    length--;
  }

  while (n > 0) {
    nums1[length - 1] = nums2[n - 1];
    n--;
    length--;

  }

};
// @lc code=end