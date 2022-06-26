let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// 空间复杂度O(n), 时间复杂度O(n^3)
function maxSubArray(nums: number[]) {
  if (nums.length == 0) return 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let begin = 0; begin < nums.length; begin++) {
    for (let end = begin; end < nums.length; end++) {
      let sum = 0;
      for (let i = begin; i <= end; i++) {
        sum += nums[i];
      }

      max = Math.max(sum, max);
    }
  }

  return max;
}
console.log(maxSubArray([-1]));
export {};
