/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
// 时间复杂度O(n),空间复杂度O(1)
var partition = function (head, x) {
  if (head == null) return null;
  let lHead = new ListNode();
  let lTail = lHead;
  let rHead = new ListNode();
  let rTail = rHead;

  while (head) {

    if (head.val < x) {
      lTail.next = head;
      lTail = lTail.next
    } else {
      rTail.next = head;
      rTail = rTail.next
    }
    head = head.next;
  }
  rTail.next = null;

  lTail.next = rHead.next;

  return lHead.next;
};
// @lc code=end

