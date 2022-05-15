/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {

  let i = 1;
  let preHead = head;
  let head1 = null;
  let head2 = null;
  let head3 = null;
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
  };
  // console.log(head1)
  // console.log(head2)
  // console.log(head3)

  if (head1) {
    head1.next = head2;
  } else {
    preHead = head2;
  }

  let pre = null;
  while (head2) {
    pre = head2;
    head2 = head2.next;
  }
  pre.next = head3;

  return preHead;

}
/* 
var reverseBetween = function (head, left, right) {

  let head1 = head;
  let head2 = null,
    head3;
  let i = 1;
  let preHead = null;
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
      // head3 = head;
      break;
    }
    i++;
    head = tem
  }

  if (preHead) {
    preHead.next = head2;
    preHead = head1;
  } else {
    preHead = head2;
  }
  let pre = null;
  while (head2) {
    pre = head2;
    head2 = head2.next;
  }
  pre.next = head;

  return preHead

}; 
*/
// [1,2,3,4,5]\n3\n4
// [3,5]\n1\n2
// @lc code=end