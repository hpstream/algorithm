import {AVLTree} from "./AVLTree";
import {BST} from "./BST";

function test1() {
  let avl = new AVLTree();
  let arr = [
    85, 19, 69, 3, 7, 99, 95, 2, 1, 70, 44, 58, 11, 21, 14, 93, 57, 4, 56,
  ];
  for (let i = 0; i < arr.length; i++) {
    avl.add(arr[i]);
  }
  // console.log(avl.root?.height);
  console.log(avl.toString());
}
// test1();

function test2() {
  let avl = new AVLTree();
  let arr = [85, 19, 69, 3, 7, 99, 95];
  for (let i = 0; i < arr.length; i++) {
    avl.add(arr[i]);
  }
  // console.log(avl.root?.height);
  // console.log(avl.toString());
  avl.remove(99);
  avl.remove(85);
  avl.remove(95);
  console.log(avl.toString());
}
function test3() {
  let arr = [];
  let avl = new AVLTree();
  let bst = new BST();
  let max = 40000;

  for (let i = 0; i < max; i++) {
    arr.push(i + 1);
    // arr.push(Math.floor(Math.random() * max));
  }
  // console.log(arr);

  var start = new Date().getTime();
  for (let i = 0; i < arr.length; i++) {
    bst.add(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    bst.contains(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    bst.remove(arr[i]);
  }
  // console.log(bst.height());
  var end = new Date().getTime();
  console.log((end - start) / 1000);
  start = new Date().getTime();
  for (let i = 0; i < arr.length; i++) {
    avl.add(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    avl.contains(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    avl.remove(arr[i]);
  }
  // console.log(avl.height());
  var end = new Date().getTime();
  console.log((end - start) / 1000);

  // console.log(avl.root?.height);

  // console.log(avl.toString());
}
// test1();
// test2();
test3();
