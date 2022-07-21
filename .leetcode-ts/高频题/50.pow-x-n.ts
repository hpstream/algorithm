/*
 * @lc app=leetcode.cn id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */
myPow(2, -2);
// @lc code=start
// 快速幂(分治)
function myPow(x: number, n: number): number {
  if (n < 0) {
    x = 1 / x;
    n = Math.abs(n);
  }
  if (n == 0) return 1;
  // if (n == -1) return 1 / x;
  let odd = (n & 1) == 1;
  let half: number;
  half = myPow1(x, n >> 1);
  half *= half;
  if (half === Infinity) return 0;
  return odd ? half * x : half;
}

function myPow1(x: number, n: number): number {
  if (n == 0) return 1;
  if (n == -1) return 1 / x;
  let odd = (n & 1) == 1;
  let half = myPow1(x, n >> 1);
  half *= half;
  // x = n < 0 ? 1 / x : x;
  return odd ? half * x : half;
}
// @lc code=end
