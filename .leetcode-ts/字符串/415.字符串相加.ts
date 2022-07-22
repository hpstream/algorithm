/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  let n1 = num1.length - 1;
  let n2 = num2.length - 1;
  let flag = 0;
  let res = "";

  while (n1 >= 0 && n2 >= 0) {
    let val1 = Number(num1[n1]);
    let val2 = Number(num2[n2]);
    let result = val1 + val2 + flag;
    if (result >= 10) {
      result -= 10;
      flag = 1;
    } else {
      flag = 0;
    }
    res = result + res;
    n1--;
    n2--;
  }
  while (n1 >= 0) {
    let val1 = Number(num1[n1]);
    let result = val1 + flag;
    if (result >= 10) {
      result -= 10;
      flag = 1;
    } else {
      flag = 0;
    }
    n1--;
    res = result + res;
  }
  while (n2 >= 0) {
    let val2 = Number(num2[n2]);
    let result = val2 + flag;
    if (result >= 10) {
      result -= 10;
      flag = 1;
    } else {
      flag = 0;
    }
    n2--;
    res = result + res;
  }

  if (flag) {
    res = "1" + res;
  }
  return res;
}
// @lc code=end
