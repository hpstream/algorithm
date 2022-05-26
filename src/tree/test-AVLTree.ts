import {AVLTree} from "./AVLTree";

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
// test1();
test2();
