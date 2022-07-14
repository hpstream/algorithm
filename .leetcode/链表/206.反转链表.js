/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
// 方式二：递归
// var reverseList = function (head) {
//   if (head === null) return null;
//   if (head === null || head.next === null) return head;
//   let newHead = reverseList(head.next);
//   head.next.next = head;
//   head.next = null;
//   return newHead;
// };
// 方式一： while循环

var reverseList = function (head) {
  let pre = null;
  while (head) {
    let node = head;
    head = head.next;
    node.next = pre;
    pre = node;
  }
  return pre;
};

// @lc code=end
