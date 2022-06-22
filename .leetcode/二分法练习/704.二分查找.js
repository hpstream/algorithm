/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

  let begin = 0;
  let end = nums.length;

  while (begin < end) {
    let mid = (begin + end) >> 1;

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid;
    } else {
      begin = mid + 1;
    }
  }
  return -1;

};
// @lc code=end