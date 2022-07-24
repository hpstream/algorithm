/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */
export {};
// @lc code=start
// trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

function trap(height: number[]): number {
  if (height.length == 0) return 0;
  let lasIdx = height.length - 2;

  // let leftMaxes: number[] = new Array(height.length).fill(0);
  let rightMaxes: number[] = new Array(height.length).fill(0);
  rightMaxes[lasIdx + 1] = height[lasIdx + 1];
  // for (let i = 1; i <= lasIdx; i++) {
  //   leftMaxes[i] = Math.max(leftMaxes[i - 1], height[i - 1]);
  // }
  for (let i = lasIdx; i >= 1; i--) {
    rightMaxes[i] = Math.max(rightMaxes[i + 1], height[i + 1]);
  }

  let water = 0,
    leftMaxes = 0;
  for (let i = 1; i <= lasIdx; i++) {
    leftMaxes = Math.max(leftMaxes, height[i - 1]);
    let min = Math.min(leftMaxes, rightMaxes[i]);
    if (min <= height[i]) continue;
    water += min - height[i];
  }
  return water;
}
// @lc code=end
