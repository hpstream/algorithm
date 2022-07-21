/*
 * @lc app=leetcode.cn id=224 lang=typescript
 *
 * [224] 基本计算器
 */

// @lc code=start
function calculate(s: string): number {
  class ExpStack {
    parent: any;
    exp: any[] = [];
    child: any[] = [];
    constructor(parent) {
      this.parent = parent;
      this.exp = [];
      // this.child = [];
    }
    add(x) {
      if (typeof x == "string" && this.exp.length == 0) {
        this.exp.push(0);
      }
      this.exp.push(x);
    }
    addChild(child) {
      this.child.push(child);
    }
  }
  let root = new ExpStack(null);
  let current = root;
  let i = 0;

  while (i < s.length) {
    if (s[i] == " ") {
      i++;
    } else if (s[i] == "(") {
      let tem = new ExpStack(current);
      current.add(tem);
      current = tem;
      i++;
    } else if (s[i] == ")") {
      current = current.parent;
      i++;
    } else if (s[i] == "-") {
      current.add(s[i]);
      i++;
    } else if (s[i] == "+") {
      current.add(s[i]);
      i++;
    } else {
      let numStr = "";
      while (i < s.length && !isNaN(s[i] as any as number)) {
        numStr += s[i];
        i++;
      }

      current.add(Number(numStr));
    }
  }
  // console.log(root)

  let reult = calc(root);
  console.log(reult);
  return reult;

  function calc(root) {
    if (typeof root == "string") {
      // console.log(root);
      return Error(`${root} 不对`);
    }
    if (typeof root == "number") {
      return root;
    }

    let map = {
      "+": (a, b) => {
        return a + b;
      },
      "-": (a, b) => {
        return a - b;
      },
    };
    let res = calc(root.exp[0]);
    for (let i = 1; i < root.exp.length; i++) {
      if (root.exp[i] instanceof ExpStack) {
        res = calc(root.exp[i]);
      }
      if (map[root.exp[i]]) {
        // console.log(calc(res), calc(root.exp[i + 1]))
        res = map[root.exp[i]](res, calc(root.exp[i + 1]));
        i++;
      }
    }
    // console.log(res)
    return res;
  }
}
// @lc code=end
