/*
 * @lc app=leetcode.cn id=674 lang=typescript
 *
 * [674] 最长连续递增序列
 */
// findLengthOfLCIS([1, 3, 5, 4, 7])
// @lc code=start
function findLengthOfLCIS(nums: number[]): number {
  if (nums.length <= 1) return nums.length;
  let max: number = 1;
  let dp: number = 1;

  for (let i = 1; i < nums.length; i++) {

    if (nums[i] > nums[i - 1]) {
      dp = dp + 1;
    } else {
      dp = 1
    }
    if (dp > max) {
      max = dp
    }
  }
  return max;
};
// @lc code=end

