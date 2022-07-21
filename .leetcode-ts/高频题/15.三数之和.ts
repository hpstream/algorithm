/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */
// threeSum([0, 0, 0]);
// @lc code=start
function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];
  let list: number[][] = [];
  nums.sort((a, b) => a - b);

  let lastIndex = nums.length - 3;
  let lastR = nums.length - 1;
  for (let i = 0; i <= lastIndex; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let l = i + 1;
    let r = lastR;
    let remain = -nums[i];
    while (l < r) {
      let sumLr = nums[l] + nums[r];
      if (remain == sumLr) {
        list.push([nums[i], nums[l], nums[r]]);

        while (l < r && nums[l] == nums[l + 1]) l++;
        while (l < r && nums[r] == nums[r - 1]) r--;
        l++;
        r--;
      } else if (remain > sumLr) {
        l++;
      } else {
        r--;
      }
    }
  }
  return list;
}
// @lc code=end
