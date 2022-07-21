/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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

function hasCycle(head: ListNode | null): boolean {
  if (head === null || head.next === null) return false;
  let slow = head;
  let fast = head.next;

  while (fast) {
    if (slow === fast) return true;

    slow = slow.next;
    if (fast.next) {
      fast = fast.next.next;
    } else {
      return false;
    }
  }
  return false;
}
// @lc code=end
