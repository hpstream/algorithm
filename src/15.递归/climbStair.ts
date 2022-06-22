/**
 * [ClimbStairs 爬楼梯问题]
 *
 * @param   {number}  n  [n description]
 *
 * @return  {[type]}     [return description]
 */
function climbStairs(n: number): number {
  if (n <= 2) {
    return n;
  }

  return climbStairs(n - 1) + climbStairs(n - 2);
}
console.log(climbStairs(5));
