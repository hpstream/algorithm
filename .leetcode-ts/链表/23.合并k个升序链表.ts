/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let minNode!: ListNode;
  let minIndex;
  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) {
      if (!minNode) {
        minNode = lists[i];
        minIndex = i;
      } else {
        if (minNode.val > lists[i].val) {
          minNode = lists[i];
          minIndex = i;
        }
      }
    }
  }
  if (!minNode) return null;
  lists[minIndex] = lists[minIndex].next;
  let head = minNode;
  let pre = minNode;

  while (true) {
    let minNode!: ListNode;
    let minIndex!: number;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i]) {
        if (!minNode) {
          minNode = lists[i];
          minIndex = i;
        } else {
          if (minNode.val > lists[i].val) {
            minNode = lists[i];
            minIndex = i;
          }
        }
      }
    }
    if (!minNode) break;
    lists[minIndex] = lists[minIndex].next;

    pre.next = minNode;
    pre = minNode;
  }
  return head;
}
// @lc code=end
