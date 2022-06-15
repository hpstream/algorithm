/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head = new ListNode();
  vhead = head;

  let l1 = list1;
  let l2 = list2;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      let tem = l2.next;
      head.next = l2;
      head = head.next;
      l2 = tem;
    } else {
      let tem = l1.next;
      head.next = l1;
      head = head.next;
      l1 = tem;
    }
  }
  if (l1) {
    head.next = l1;
  }
  if (l2) {
    head.next = l2;
  }

  return vhead.next;

};
// @lc code=end