/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {


  if (!root) return;
  let node = [];
  let preNode = null;
  inOrder(root, (cNode) => {
    if (preNode !== null) {
      if (preNode.val >= cNode.val) {
        node.push(cNode);
      }
      preNode.next = cNode;
    }
    cNode.prenext = preNode;
    preNode = cNode;
  })
  if (node.length === 0) return;

  if (node.length === 1) {
    let [node1] = node;
    let val = node1.prenext.val;
    node1.prenext.val = node1.val;
    node1.val = val;
    // console.log(node1.val, node1.next, node1.prenext);

    return;
  }

  if (node.length === 2) {
    let [node1, node2] = node;
    node1 = node1.prenext;
    let value = node2.val;
    node2.val = node1.val;
    node1.val = value;
  }

  function inOrder(root, cb) {
    root.left && inOrder(root.left, cb);
    cb && cb(root);
    root.right && inOrder(root.right, cb);
  }
};
// [3,1,4,null,null,2]
// [1,3,2,4] , [1,6,3,4,5,2,7]
// [0,1]

// @lc code=end