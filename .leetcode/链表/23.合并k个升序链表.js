/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let minNode = null;
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
  let head = pre = minNode;

  while (true) {

    let minNode = null;
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
    if (!minNode) break;
    lists[minIndex] = lists[minIndex].next;

    pre.next = minNode;
    pre = minNode;

  }



  return head;


};
// @lc code=end