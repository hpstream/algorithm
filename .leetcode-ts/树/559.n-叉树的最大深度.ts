/*
 * @lc app=leetcode.cn id=559 lang=typescript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

function maxDepth(root: Node | null): number {
  let deep = 0;
  if (root) {
    let nodeList = [root];
    let levelRow = nodeList.length;
    while (nodeList.length > 0) {
      let node = nodeList.shift() as any;

      node.children.forEach((n) => {
        nodeList.push(n);
      });
      levelRow--;
      if (levelRow === 0) {
        levelRow = nodeList.length;
        deep++;
      }
    }
  }

  return deep;
}
// @lc code=end
