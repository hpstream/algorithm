import {LinkedHashMap} from "./LinkedHashMap";
import {isEqual} from "lodash";
import {HashMap} from "./HashMap";

function test1() {
  var hashMap = new HashMap();
  // hashMap.table = new Array(1);
  for (let index = 0; index < 16; index++) {
    hashMap.put(index, index);
  }
  // console.log(hashMap.size);
  hashMap.traverasal({
    stop: false,
    visitor: (k, v) => {
      console.log(k, v);
      return false;
    },
  });
}
function test2() {
  var hashMap = new LinkedHashMap();
  // hashMap.table = new Array(1);
  for (let index = 0; index < 16; index++) {
    hashMap.put(index, index);
  }
  // console.log(hashMap.size);
  hashMap.traverasal({
    stop: false,
    visitor: (k, v) => {
      console.log(k, v);
      return false;
    },
  });
}

function test3() {
  var hashMap = new LinkedHashMap();
  // hashMap.table = new Array(1);
  hashMap.put("jack", 1);
  hashMap.put("jim", 1);
  for (let index = 0; index < 16; index++) {
    hashMap.put(index, index);
  }
  hashMap.put("ab", 1);
  hashMap.remove(1);
  hashMap.remove(10);
  hashMap.remove(15);
  hashMap.remove("jim");
  // console.log(hashMap.size);
  hashMap.traverasal({
    stop: false,
    visitor: (k, v) => {
      console.log(k, v);
      return false;
    },
  });
}
// test1();
// test2();
test3();
