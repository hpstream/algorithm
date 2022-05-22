import {BinarySearchTree} from "./BinarySearchTree";

let data = [7, 4, 2, 1, 3, 5, 9, 8, 11, 10, 12];
let levelData = [7, 4, 9, 2, 5];
var bst = new BinarySearchTree<number>();

for (let i = 0; i < data.length; i++) {
  // bst.add(Math.floor(Math.random() * 1000));
  bst.add(data[i]);
}

// console.log(bst.root?.left)

// bst.inOrderTraversalCurrentNode()
// console.log(bst.toString());
// console.log(bst.height(bst.root));
// console.log(bst.height1(bst.root));
// console.log(bst.isComplete(bst.root as Node<number>));

// s.add(p)

// 删除节点
function test7() {
  let levelData = [7, 4, 9, 2, 5, 8, 11, 3, 12, 1];
  var bst = new BinarySearchTree<number>();

  for (let i = 0; i < levelData.length; i++) {
    // bst.add(Math.floor(Math.random() * 1000));
    bst.add(levelData[i]);
  }
  console.log(bst.toString());
  console.log("\n\n\n");
  // bst.remove(2); //删除度为0结点
  // bst.remove(9); // 删除度为2的节点
  // bst.remove(11); // 删除度为1的节点
  bst.remove(7); // 删除root节点

  console.log(bst.toString());
}
console.log(test7());
