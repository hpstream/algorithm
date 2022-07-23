/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
  let res = 0;
  let n = x < 0 ? 0 - x : x;
  while (n != 0) {
    res = res * 10 + (n % 10);
    if (res > Math.pow(2, 31) - 1) return 0;
    n = Math.floor(n / 10);
  }
  return x < 0 ? 0 - res : res;
}
// @lc code=end
