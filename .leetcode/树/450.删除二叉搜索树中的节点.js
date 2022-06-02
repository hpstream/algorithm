/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return root;
  inOrder(root, null);
  let cNode = findNode(root, key);
  if (!cNode) return root;

  if (cNode.left && cNode.right) {
    // 需要找到前驱节点
    let node = cNode.right;
    let preNode;
    while (node) {
      preNode = node;
      node = node.left;
    }
    cNode.val = preNode.val;
    cNode = preNode;

  }

  if (!cNode.left && !cNode.right) {
    let parent = cNode.parent;
    if (!parent) return null;
    if (parent.left === cNode) {
      parent.left = null;
    } else {
      parent.right = null;
    }
  } else {
    let parent = cNode.parent;
    if (!parent) return cNode.left ? cNode.left : cNode.right;
    if (parent.left === cNode) {
      parent.left = cNode.left ? cNode.left : cNode.right;
    } else {
      parent.right = cNode.left ? cNode.left : cNode.right;
    }
  }

  return root;

  function inOrder(root, p) {
    root.parent = p;
    root.left && inOrder(root.left, root)
    root.right && inOrder(root.right, root)
  }

  function findNode(root, key) {
    while (root) {
      if (root.val == key) return root;
      if (root.val > key) {
        root = root.left;
      } else {
        root = root.right;
      }

    }

  }


};
// [5,3,6,2,4,null,7]\n0
// [0]\n0
// @lc code=end