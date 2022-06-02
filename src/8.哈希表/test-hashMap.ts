import {isEqual} from "lodash";
import {HashMap} from "./HashMap";

function test1() {
  var object = {a: 1};
  var other = {a: 1};

  class A {
    constructor(public a: string) {}
  }
  console.log(isEqual(new A("1"), new A("1")));
}
function test2() {
  var hashMap = new HashMap();
  var object = 1;
  var other = 8;
  hashMap.table = new Array(1);
  for (let index = 0; index < 16; index++) {
    hashMap.put(index, index);
  }
  // hashMap.get(object);
  // hashMap.put(other, 2);

  console.log(hashMap.get(7)); //, hashMap.table
  // console.log(hashMap.size, hashMap.table);
}
// test1();

function test3() {
  var hashMap = new HashMap();
  var object = 1;
  var other = 8;
  hashMap.table = new Array(1);
  for (let index = 0; index < 16; index++) {
    hashMap.put(index + "", index);
  }
  // hashMap.get(object);
  // hashMap.put(other, 2);
  console.log(hashMap.size);
  console.log(hashMap.remove("1")); //, hashMap.table
  console.log(hashMap.get("1"));
  // console.log(hashMap.table);
  // console.log(hashMap.size, hashMap.table);
}

function test4() {
  var hashMap = new HashMap();
  var object = 1;
  var other = 8;
  hashMap.table = new Array(1);
  for (let index = 0; index < 6; index++) {
    hashMap.put(index + "", index);
  }

  hashMap.traverasal({
    stop: false,
    visitor: (k, v) => {
      console.log(k, v);
      return false;
    },
  });
}

// test2();
// test3();
test4();
