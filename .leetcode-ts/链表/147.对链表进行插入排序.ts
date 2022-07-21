/*
 * @lc app=leetcode.cn id=147 lang=typescript
 *
 * [147] 对链表进行插入排序
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

function insertionSortList(head: ListNode | null): ListNode | null {
  let newHead = new ListNode(0, null);
  // let loopHead = newHead.next;
  while (head) {
    // let hval = head.val;
    let looptem = head.next;
    let p = newHead.next;
    let prev = newHead;
    while (p) {
      if (head.val < p.val) {
        break;
      }
      prev = p;
      p = p.next;
    }
    let tem = prev.next;
    prev.next = head;
    head.next = tem;

    head = looptem;
  }

  return newHead.next;
}
// @lc code=end
