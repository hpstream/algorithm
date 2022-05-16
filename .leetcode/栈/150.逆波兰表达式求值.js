/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  let map = {
    '+': (x, y) => {
      return x + y;
    },
    '-': (x, y) => {
      return x - y;
    },
    '*': (x, y) => {
      return x * y;
    },
    '/': (x, y) => {
      return parseInt(x / y);
    },
  }
  for (let i = 0; i < tokens.length; i++) {
    if (map[tokens[i]]) {
      let y = stack.pop();
      let x = stack.pop();
      let result = map[tokens[i]](Number(x), Number(y));
      stack.push(result);
      // console.log(result)

    } else {
      // 存储数字;
      stack.push(tokens[i]);
    }
  }

  return stack[0];
};
// @lc code=end