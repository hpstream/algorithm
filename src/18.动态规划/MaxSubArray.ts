let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// 空间复杂度 O(1)，时间复杂度 O(n),思路参考滚动数组
function MaxSubArray(nums: number[]) {
  if (nums.length === 0) return -1;
  let dp = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (dp < 0) {
      dp = nums[i];
    } else {
      dp = dp + nums[i];
    }
    max = Math.max(dp, max);
    console.log(`dp[${i}]= ${dp}`);
  }

  return max;
}
// 空间复杂度，时间复杂度 O(n)
function MaxSubArray1(nums: number[]) {
  if (nums.length === 0) return -1;
  let dp = [nums[0]];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] < 0) {
      dp[i] = nums[i];
    } else {
      dp[i] = dp[i - 1] + nums[i];
    }
    max = Math.max(dp[i], max);
    console.log(`dp[${i}]= ${dp[i]}`);
  }

  return max;
}
console.log(MaxSubArray(nums));
// console.log(MaxSubArray1(nums));

export {};
