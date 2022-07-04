/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */

var removeElements = function (head, val) {
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
};
var removeElements1 = function (head, val) {

  let newhead = head;
  let pre = null;
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
};
//[7,7,7,7]\n7
//[]\n1
// @lc code=end