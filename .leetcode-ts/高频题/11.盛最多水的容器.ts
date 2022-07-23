/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  let water = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    let rVal = height[r];
    let lVal = height[l];

    if (height[l] <= height[r]) {
      water = Math.max(water, (r - l) * height[l]);
      while (lVal >= height[l] && l < r) l++;
    } else {
      water = Math.max(water, (r - l) * height[r]);
      while (rVal >= height[r] && l < r) r--;
    }
  }
  return water;
}
// @lc code=end
