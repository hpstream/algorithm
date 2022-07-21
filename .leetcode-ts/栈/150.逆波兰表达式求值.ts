/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
  let stack: any[] = [];
  let map = {
    "+": (x, y) => {
      return x + y;
    },
    "-": (x, y) => {
      return x - y;
    },
    "*": (x, y) => {
      return x * y;
    },
    "/": (x, y) => {
      return parseInt((x / y) as any);
    },
  };
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
}
// @lc code=end
