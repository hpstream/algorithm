/**
 * 最长公共子串
 *
 * @param   {string}  str1  [str1 description]
 * @param   {string}  str2  [str2 description]
 *
 * @return  {[type]}        [return description]
 */
// 空间,时间复杂度都是O(m*n)
export function lcs(str1: string, str2: string) {
  if (str1.length < str2.length) {
    let tem = str1;
    str1 = str2;
    str2 = tem;
  }
  let dp = new Array(str2.length + 1).fill(0);
  let max = 0;

  for (let row = 1; row < str1.length; row++) {
    let cur = 0;
    for (let col = 1; col < str2.length; col++) {
      let leftTop = cur;
      cur = dp[col];
      if (str1[row - 1] != str2[col - 1]) {
        dp[col] = 0;
      } else {
        dp[col] = leftTop + 1;
        max = Math.max(dp[col], max);
      }
    }
  }
  return max;
}

console.log(lcs("ABCBA", "BABCA"));
