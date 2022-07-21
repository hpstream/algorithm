/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
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

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let i = 1;
  let preHead = head;
  let head1: any = null;
  let head2: any = null;
  let head3: any = null;
  if (left === right) {
    return head;
  }
  while (head) {
    let tem = head.next;
    if (i === left - 1) {
      head1 = head;
      head1.next = null;
    }
    if (i >= left && i <= right) {
      head.next = head2;
      head2 = head;
    }

    if (i > right) {
      head3 = head;
      break;
    }
    head = tem;
    i++;
  }
  // console.log(head1)
  // console.log(head2)
  // console.log(head3)

  if (head1) {
    head1.next = head2;
  } else {
    preHead = head2;
  }

  let pre: any = null;
  while (head2) {
    pre = head2;
    head2 = head2.next;
  }
  pre.next = head3;

  return preHead;
}

function reverseBetween1(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let head1 = head;
  let head2: any = null;
  let i = 1;
  let preHead: any = null;
  let endHead = null;
  if (left === right) {
    return head;
  }
  while (head) {
    let tem = head.next;
    if (i < left) {
      preHead = head;
      endHead = head.next;
    } else if (i >= left && i <= right) {
      if (preHead) {
        preHead.next = null;
      }
      head.next = head2;
      head2 = head;
    } else if (i > right) {
      break;
    }
    i++;
    head = tem;
  }

  if (preHead) {
    preHead.next = head2;
    preHead = head1;
  } else {
    preHead = head2;
  }
  let pre: any = null;
  while (head2) {
    pre = head2;
    head2 = head2.next;
  }
  pre.next = head;

  return preHead;
}

// @lc code=end
