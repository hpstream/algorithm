/*
 * @lc app=leetcode.cn id=164 lang=typescript
 *
 * [164] 最大间距
 */

// @lc code=start
function maximumGap(nums: number[]): number {
  if (nums.length < 2) return 0;
  // 使用桶排序解决问题
  // 1.找到最大值，与最小值
  let max = Number.MIN_SAFE_INTEGER,
    min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[i]);
  }

  // 2. 创建桶的数量
  let bsize = ~~((max - min) / (nums.length - 1)) || 1;
  // let bsize = 20

  // 3. 创建桶
  let buckets = new Array();

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    let index = ~~((n - min) / bsize);

    if (!buckets[index]) buckets[index] = [];
    buckets[index].push(n);
  }

  let ans = 0,
    preValue;
  for (let i = 0; i < buckets.length; i++) {
    if (!buckets[i]) continue;
    let arr = buckets[i].sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
      ans = Math.max(ans, preValue === undefined ? 0 : arr[i] - preValue);
      preValue = arr[i];
    }
  }
  return ans;
}
// @lc code=end
