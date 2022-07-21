/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// 方式一： while循环
function reverseList(head: ListNode | null): ListNode | null {
  let pre = null;
  while (head) {
    let node = head;
    head = head.next;
    node.next = pre;
    pre = node;
  }
  return pre;
}
// 方式二：递归
function reverseList1(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  if (head === null || head.next === null) return head;
  let newHead = reverseList1(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}
// @lc code=end
