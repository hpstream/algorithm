/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
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
}
// @lc code=end
