/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
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
// 时间复杂度O(n),空间复杂度O(1)
function partition(head: ListNode | null, x: number): ListNode | null {
  if (head == null) return null;
  let lHead = new ListNode();
  let lTail = lHead;
  let rHead = new ListNode();
  let rTail = rHead;

  while (head) {
    if (head.val < x) {
      lTail.next = head;
      lTail = lTail.next;
    } else {
      rTail.next = head;
      rTail = rTail.next;
    }
    head = head.next;
  }
  rTail.next = null;

  lTail.next = rHead.next;

  return lHead.next;
}
// @lc code=end
