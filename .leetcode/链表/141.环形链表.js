/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null || head.next === null) return false;
  let slow = head;
  let fast = head.next;

  while (fast) {
    if (slow === fast) return true;

    slow = slow.next;
    if (fast.next) {
      fast = fast.next.next
    } else {
      return false;
    }
  }
  return false;

};
// @lc code=end