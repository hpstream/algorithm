/*
 * @lc app=leetcode.cn id=654 lang=typescript
 *
 * [654] 最大二叉树
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
function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (nums.length === 0) {
    return null;
  }
  if (nums.length === 1) {
    return new TreeNode(nums[0]);
  }
  let max = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[max]) {
      max = i;
    }
  }

  return new TreeNode(
    nums[max],
    constructMaximumBinaryTree(nums.slice(0, max)),
    constructMaximumBinaryTree(nums.slice(max + 1, nums.length))
  );
}

function constructMaximumBinaryTree1(nums: number[]): TreeNode | null {
  let stack: any[] = [];
  let lis: any[] = new Array(nums.length).fill(-1);
  let ris: any[] = new Array(nums.length).fill(-1);

  for (let i = 0; i < nums.length; i++) {
    while (stack.length != 0 && nums[i] > nums[stack[stack.length - 1]]) {
      let index = stack.pop();
      ris[index] = i;
    }

    lis[i] = stack.length == 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }
  // console.log(lis);
  // console.log(ris);
  let pis: any = [];
  for (let i = 0; i < nums.length; i++) {
    if (lis[i] == -1 && ris[i] == -1) {
      pis[i] = -1;
      continue;
    }
    if (lis[i] == -1) {
      pis[i] = ris[i];
      continue;
    } else if (ris[i] == -1) {
      pis[i] = lis[i];
      continue;
    } else if (nums[lis[i]] < nums[ris[i]]) {
      pis[i] = lis[i];
    } else {
      pis[i] = ris[i];
    }
  }
  return pis as any as TreeNode;
}

// @lc code=end
