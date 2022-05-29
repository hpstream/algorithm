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
test1();
