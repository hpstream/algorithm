/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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

function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) return true;
  if (!head.next.next) return head.val == head.next.val;

  //找到中间节点
  let mid = middleNode(head);
  //将中间节点的右边部分进行翻转
  let rHead = reverseList(mid.next);
  let lHead = head;
  let rOldHead = rHead;
  let reuslt = true;
  while (rHead) {
    if (lHead.val != rHead.val) {
      reuslt = false;
      break;
    }
    rHead = rHead.next;
    lHead = lHead.next;
  }
  // 恢复右半部分再次反转
  reverseList(rOldHead);
  return reuslt;
}

function middleNode(head: ListNode | null): ListNode | null {
  // 使用快慢指针找结点
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
function reverseList(head: ListNode | null): ListNode | null {
  let newHead: any = null;
  while (head) {
    let tem = head.next;
    head.next = newHead;
    newHead = head;
    head = tem;
  }
  return newHead;
}
// @lc code=end
