/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  if (n <= 2) return n;
  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    let tem = second;
    second = first + second;
    first = tem;
  }

  return second;
}
// @lc code=end
