import {ArrayList} from "../libs/Array/ArrayList";
import {LinkedList} from "../libs/Array/LinkedList";
import {Test} from "./utils/times";

function test1() {
  let linkList = new LinkedList<number>();
  for (let i = 0; i < 5; i++) {
    linkList.add(i);
  }
  console.log(linkList.toString());
  console.log(linkList.remove(4));
  console.log(linkList.toString());
}
function test2() {
  let list = new ArrayList<number>();
  for (let i = 0; i < 5; i++) {
    list.add(i);
  }
  console.log(list.toString());
  console.log(list.remove(4));
  console.log(list.toString());
}

function test3() {
  let count = 500 * 100;
  let addcount = 1000;
  let arraylist = new ArrayList<number>();
  let linkList = new LinkedList<number>();
  for (let i = 0; i < count; i++) {
    arraylist.add(i);
    linkList.add(i);
  }
  Test("arraylist", () => {
    for (let i = 0; i < addcount; i++) {
      arraylist.add(0, i);
    }
  });
  Test("linkList", () => {
    for (let i = 0; i < addcount; i++) {
      linkList.add(0, i);
    }
  });
}

// test1();
// test2();
test3();
