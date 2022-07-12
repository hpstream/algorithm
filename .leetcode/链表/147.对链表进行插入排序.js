/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
 * @return {ListNode}
 */

// 4,2,1,3
var insertionSortList = function (head) {
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
};
// @lc code=end
