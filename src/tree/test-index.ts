import {BST} from "./BST";

// let data = [7, 4, 2, 1, 3, 5, 9, 8, 11, 10, 12];
// let levelData = [7, 4, 9, 2, 5];

// 前序遍历
function test1() {
  let data = [7, 4, 2, 1, 3, 5, 9, 8, 11, 10, 12];
  var bst = new BST<number>();
  for (let i = 0; i < data.length; i++) {
    bst.add(data[i]);
  }
  bst.preOrderTraversal((node) => {
    console.log(node.element);
  });
}
// 中序遍历
function test2() {
  let data = [7, 4, 2, 1, 3, 5, 9, 8, 11, 10, 12];
  var bst = new BST<number>();
  for (let i = 0; i < data.length; i++) {
    bst.add(data[i]);
  }

  bst.inOrderTraversal((node) => {
    console.log(node.element);
  });

  console.log(bst.toString());
}
// 后序遍历
function test3() {
  let data = [7, 4, 2, 1, 3, 5, 9, 8, 11, 10, 12];
  var bst = new BST<number>();
  for (let i = 0; i < data.length; i++) {
    // bst.add(Math.floor(Math.random() * 1000));
    bst.add(data[i]);
  }

  bst.postOrderTraversal((node) => {
    console.log(node.element);
  });
}
// 层序遍历
function test4() {
  let data = [7, 4, 2, 1, 3, 5, 9, 8, 11, 10, 12];
  var bst = new BST<number>();
  for (let i = 0; i < data.length; i++) {
    // bst.add(Math.floor(Math.random() * 1000));
    bst.add(data[i]);
  }

  bst.levelOrderTraversal((node) => {
    console.log(node.element);
  });
}
//求树的高度
function test5() {
  // let data = [7, 4, 2, 1, 3, 5, 9, 8, 11, 10, 12];
  var bst = new BST<number>();
  for (let i = 0; i < 30; i++) {
    bst.add(Math.floor(Math.random() * 1000));
  }
  console.log(bst.height());
}

//是否是完全树
function test6() {
  let data = [7, 4, 9, 2, 5];
  var bst = new BST<number>();
  for (let i = 0; i < data.length; i++) {
    bst.add(data[i]);
  }
  console.log(bst.isComplete());
  // bst.isComplete();
}

// 删除节点
function test7() {
  let levelData = [7, 4, 9, 2, 5, 8, 11, 3, 12, 1];
  var bst = new BST<number>();

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

//打印
function test8() {
  let data = [7, 4, 2, 1, 3, 5, 9, 8, 11, 10, 12];
  var bst = new BST<number>();
  for (let i = 0; i < data.length; i++) {
    bst.add(data[i]);
  }

  console.log(bst.toString());
}
// test1(); //前序
// test2();//中序
// test3();//后序
// test4(); //层序
//test5(); //高度
// test6(); // 完全tree
// test7(); // 删除节点
// test8(); //打印
