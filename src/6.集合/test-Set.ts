import {ListSet} from "./ListSet";
import {TreeSet} from "./TreeSet";

function test1() {
  let listSet = new ListSet<number>();
  listSet.add(10);
  listSet.add(11);
  listSet.add(11);
  listSet.add(12);
  listSet.add(10);
  listSet.traversal({
    stop: false,
    visit(e) {
      console.log(e);
      return false;
    },
  });
}
function test2() {
  let treeSet = new TreeSet<number>();
  treeSet.add(10);
  treeSet.add(11);
  treeSet.add(11);
  treeSet.add(12);
  treeSet.add(10);
  treeSet.add(9);
  treeSet.add(1);
  treeSet.traversal({
    stop: false,
    visit(e) {
      console.log(e);
      return false;
    },
  });
}

function test3() {
  let listSet = new ListSet<number>();
  let max = 50000;
  for (let index = 0; index < max; index++) {
    listSet.add(Math.floor(Math.random() * max));
  }

  let star = new Date().getTime();
  listSet.traversal({
    stop: false,
    visit(e) {
      // console.log(e);
      return false;
    },
  });
  console.log((new Date().getTime() - star) / 1000);
}
function test4() {
  let max = 50000;
  let treeSet = new TreeSet<number>();
  for (let index = 0; index < max; index++) {
    treeSet.add(Math.floor(Math.random() * max));
  }
  let star = new Date().getTime();
  treeSet.traversal({
    stop: false,
    visit(e) {
      // console.log(e);
      return false;
    },
  });
  console.log((new Date().getTime() - star) / 1000);
}
// test1();
// test2();
test3();
test4();
