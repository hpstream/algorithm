/*
 * @lc app=leetcode.cn id=876 lang=typescript
 *
 * [876] 链表的中间结点
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
function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  // let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
function middleNode1(head: ListNode | null): ListNode | null {
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
}
// @lc code=end
