/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 快慢指针法
var middleNode = function (head) {
  let slow = (fast = head);
  // let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

var middleNode1 = function (head) {
  let size = 0;
  let newhead = head;
  while (head) {
    head = head.next;
    size++;
  }

  var mid = Math.floor(size / 2);
  // console.log(size, mid)
  let i = 0;
  while (newhead) {
    if (i === mid) {
      return newhead;
    }
    i++;
    newhead = newhead.next;
  }
};
// @lc code=end
