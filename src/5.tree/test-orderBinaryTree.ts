import {OrderBinaryTree} from "./OrderBinaryTree";

// 前序遍历
function test1() {
  let data = [7, 4, 2, 1, 3, 5, 9, 8, 11, 10, 12];
  var bst = new OrderBinaryTree<number>();
  for (let i = 0; i < data.length; i++) {
    bst.add(data[i]);
  }
  // 方案一
  bst.preOrder((node) => {
    console.log(node.element);
    return false;
  });
  // 方案二
  bst.preOrder1((node) => {
    console.log(node.element);
    return false;
  });
  // console.log(bst.toString());
  // bst.preOrderTraversalCurrentNode();
}

// 中序遍历
function test2() {
  let data = [7, 4, 2, 1, 3, 5, 9, 8, 11, 10, 12];
  var bst = new OrderBinaryTree<number>();
  for (let i = 0; i < data.length; i++) {
    bst.add(data[i]);
  }
  bst.inOrder((node) => {
    console.log(node.element);
    return false;
  });
  console.log(bst.toString());
  // bst.preOrderTraversalCurrentNode();
}

// 后序遍历
function test3() {
  let data = [7, 4, 2, 1, 3, 5, 9, 8, 11, 10, 12];
  var bst = new OrderBinaryTree<number>();
  for (let i = 0; i < data.length; i++) {
    bst.add(data[i]);
  }
  bst.postOrder((node) => {
    console.log(node.element);
    return false;
  });
  console.log(bst.toString());
  // bst.preOrderTraversalCurrentNode();
}
// test1();
// test2();
test3();
