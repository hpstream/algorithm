/*
 * @lc app=leetcode.cn id=225 lang=typescript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
class MyStack {
  inQueue: number[];
  outQueue: number[];
  constructor() {
    this.inQueue = [];
    this.outQueue = [];
  }

  push(x: number): void {
    this.inQueue.push(x);
  }

  pop(): number {
    if (this.inQueue.length == 1) {
      return this.inQueue.shift() as number;
    } else {
      while (this.inQueue.length > 1) {
        this.outQueue.push(this.inQueue.shift() as number);
      }

      let result = this.inQueue.shift() as number;
      this.inQueue = this.outQueue;
      this.outQueue = [];
      return result;
    }
  }

  top(): number {
    return this.inQueue[this.inQueue.length - 1];
  }

  empty(): boolean {
    return !this.inQueue.length;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
