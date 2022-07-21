/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  //使用虚拟头节点
  let newHead = new ListNode(0);
  let newTail = newHead;
  while (head) {
    if (head.val != val) {
      newTail.next = head;
      newTail = head;
    }
    head = head.next;
  }
  newTail.next = null;
  return newHead.next;
}

function removeElements1(head: ListNode | null, val: number): ListNode | null {
  let newhead = head;
  let pre: any = null;
  while (head) {
    // let tem = head.next;
    if (head.val === val) {
      if (pre) {
        pre.next = head.next;
      } else {
        newhead = head.next;
      }
    } else {
      pre = head;
    }

    head = head.next;
  }
  return newhead;
}
// @lc code=end
