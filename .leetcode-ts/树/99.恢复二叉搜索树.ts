/*
 * @lc app=leetcode.cn id=99 lang=typescript
 *
 * [99] 恢复二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 Do not return anything, modify root in-place instead.
 */
// 二叉树的Morris遍历
function recoverTree(root: TreeNode | null): void {
  let first!: TreeNode, prev!: TreeNode, second!: TreeNode;

  inOrder(root, (cNode) => {
    // 出现了逆序对
    if (prev != null && prev.val > cNode.val) {
      // 第2个错误节点：最有一个逆序对中较小的节点
      second = cNode;
      // 第一个错误节点：第一个逆序对中较大的节点
      if (first != null) return;
      first = prev;
    }
    prev = cNode;
  });

  let tme = first.val;
  first.val = second.val;
  second.val = tme;

  function inOrder(node: any, cb: any) {
    while (node) {
      if (node.left) {
        let pred = node.left;
        while (pred.right && pred.right != node) {
          pred = pred.right;
        }

        if (pred.right == null) {
          pred.right = node;
          node = node.left;
        } else {
          cb(node);
          pred.right = null;
          node = node.right;
        }
      } else {
        cb(node);
        node = node.right;
      }
    }
  }
}
// 找逆序对
function recoverTree2(root: TreeNode | null): void {
  if (!root) return;
  let node = [];
  let first!: TreeNode, prev!: TreeNode, second!: TreeNode;

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
}
function recoverTree1(root: TreeNode | null): void {
  if (!root) return;
  let node: any[] = [];
  let preNode: any = null;
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

  function inOrder(root: any, cb: any) {
    root.left && inOrder(root.left, cb);
    cb && cb(root);
    root.right && inOrder(root.right, cb);
  }
}
// @lc code=end
