/*
 * @lc app=leetcode.cn id=43 lang=typescript
 *
 * [43] 字符串相乘
 */
console.log(multiply("123", "456"));

// @lc code=start
function multiply(num1: string, num2: string): string {
  if (num1 === "0" || num2 === "0") return "0";

  let result = "";
  let p = "";
  for (let i = num2.length - 1; i >= 0; i--) {
    let res = "";
    let num = num2[i];
    let carry = 0;
    for (let j = num1.length - 1; j >= 0; j--) {
      let tem = Number(num) * Number(num1[j]) + carry;
      carry = Math.floor(tem / 10);
      res = tem - carry * 10 + res;
    }
    if (carry > 0) {
      res = carry + res;
    }
    res += p;
    p += "0";
    // console.log(res);
    result = addStrings(res, result);
  }
  return result;
}
// ""123"\n"456""
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
