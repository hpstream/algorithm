/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let cur = nums1.length - 1;
  let i1 = m - 1;
  let i2 = n - 1;
  while (i2 >= 0) {
    if (i1 >= 0 && nums2[i2] < nums1[i1]) {
      nums1[cur--] = nums1[i1--];
    } else {
      nums1[cur--] = nums2[i2--];
    }
  }
}
// @lc code=end
