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
var middleNode = function (head) {
  let size = 0;
  let newhead = head;
  while (head) {
    head = head.next;
    size++;
  }

  var mid = Math.floor(size / 2)
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