let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// 空间复杂度O(n), 时间复杂度O(n^2)
// T(n) = T(n/2) + T(n/2) + O(n)
// O(n) = nlogn
function maxSubArray(nums: number[], begin: number, end: number): number {
  if (nums.length == 0) return 0;

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
    maxSubArray(nums, begin, mid),
    maxSubArray(nums, mid, end)
  );
}
console.log(maxSubArray(nums, 0, nums.length));
export {};
