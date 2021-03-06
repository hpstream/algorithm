/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1) return l2;
  if (!l2) return l1;
  let head = new ListNode(0);
  let last = head;
  let carry = 0;

  while (l1 || l2) {
    let v1 = 0;
    let v2 = 0;
    if (l1) {
      v1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      v2 = l2.val;
      l2 = l2.next;
    }
    let sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);
    last.next = new ListNode(sum % 10);
    last = last.next;
  }
  if (carry > 0) {
    last.next = new ListNode(carry);
  }

  return head.next;
}
// @lc code=end
