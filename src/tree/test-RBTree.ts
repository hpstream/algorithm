import {RBTree} from "./RBTree";

function test1() {
  let rbtree = new RBTree();
  let arr = [55, 87, 56, 74, 96, 22, 62, 20, 70, 68, 90, 50];
  for (let i = 0; i < arr.length; i++) {
    rbtree.add(arr[i]);
  }
  // console.log(avl.root?.height);
  console.log(rbtree.toString());
}
function test2() {
  let rbtree = new RBTree();
  let arr = [55, 87, 56, 74, 96, 22, 62, 20, 70, 68, 90, 50];
  for (let i = 0; i < arr.length; i++) {
    rbtree.add(arr[i]);
  }
  console.log(rbtree.toString());
  console.log(`-------------------------`);
  for (let i = 0; i < arr.length; i++) {
    console.log(`【${arr[i]}】`);
    rbtree.remove(arr[i]);
    console.log(rbtree.toString());
    console.log(`================`);
  }
}
// test1();
test2();
