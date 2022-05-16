/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  let nextNode = node.nextNode;

  node.val = nextNode.val;
  node.next = nextNode.next;
};
// @lc code=end