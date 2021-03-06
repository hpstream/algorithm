/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  var newhead = head;
  let pre1 = head;
  let pre2 = head.next;

  while (pre2) {
    if (pre1.val != pre2.val) {
      pre1.next = pre2;
      pre1 = pre2;
    }
    pre2 = pre2.next;
  }
  pre1.next = null;
  return newhead;
}
// @lc code=end
