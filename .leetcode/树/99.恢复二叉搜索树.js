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
// 找逆序对
var recoverTree = function (root) {
  if (!root) return;
  let node = [];
  let first = null,
    prev = null,
    second = null;

  findWrongNodes(root);
  let tme = first.val;
  first.val = second.val;
  second.val = tme;

  function findWrongNodes(root) {
    if (root == null) return;
    findWrongNodes(root.left);
    // 出现了逆序对
    if (prev != null && prev.val > root.val) {
      // 第2个错误节点：最有一个逆序对中较小的节点
      second = root;
      // 第一个错误节点：第一个逆序对中较大的节点
      if (first != null) return;
      first = prev;
    }
    prev = root;
    findWrongNodes(root.right);
  }
};
var recoverTree1 = function (root) {
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
  });
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
