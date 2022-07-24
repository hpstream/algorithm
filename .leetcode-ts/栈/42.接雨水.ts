/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */
export {};
// @lc code=start
// trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

function trap(height: number[]): number {
  let stack: number[] = [];
  let trapCount = 0;
  const n = height.length;
  for (let i = 0; i < n; i++) {
    // let end = stack.length - 1;
    while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop() as number;
      if (!stack.length) {
        break;
      }
      const left = stack[stack.length - 1];
      const currWidth = i - left - 1;
      const currHeight = Math.min(height[left], height[i]) - height[top];

      trapCount += currWidth * currHeight;
    }
    stack.push(i);
  }
  return trapCount;
}
// @lc code=end
