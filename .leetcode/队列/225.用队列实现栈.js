/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function () {
  this.inQueue = [];
  this.outQueue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.inQueue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.inQueue.length === 1) {
    return this.inQueue.shift();
  } else {

    while (this.inQueue.length > 1) {
      this.outQueue.push(this.inQueue.shift())
    }
    // console.log(this.inQueue, this.outQueue)
    let result = this.inQueue.shift();
    this.inQueue = this.outQueue;
    this.outQueue = [];
    return result;

  }

};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.inQueue[this.inQueue.length - 1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.inQueue.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end