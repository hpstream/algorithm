/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  if (nums.length == 0) return 0;
  return maxSubArray1(nums, 0, nums.length);
}
function maxSubArray1(nums, begin, end) {
  if (end - begin < 2) return nums[begin];

  let mid = (begin + end) >> 1;

  let leftMax = Number.MIN_SAFE_INTEGER;
  let leftSum = 0;
  for (let i = mid - 1; i >= begin; i--) {
    leftSum += nums[i];
    leftMax = Math.max(leftSum, leftMax);
  }
  let rightMax = Number.MIN_SAFE_INTEGER;
  let rightSum = 0;
  for (let i = mid; i < end; i++) {
    rightSum += nums[i];
    rightMax = Math.max(rightSum, rightMax);
  }

  let max = leftMax + rightMax;

  return Math.max(
    max,
    maxSubArray1(nums, begin, mid),
    maxSubArray1(nums, mid, end)
  );
}
// @lc code=end
