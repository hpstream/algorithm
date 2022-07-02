import {TreeMap} from "./../7.映射/TreeMap";

import Asserts from "../12.sort/utils/Asserts";
import {SkipList} from "./SkipList";
import {Test} from "../12.sort/utils/times";
function test1() {
  let list = new SkipList<number, number>();
  let map = new TreeMap<number, number>((a, b) => {
    // console.log(a, b);
    return (a as number) - (b as number);
  });
  let count = 1000000;
  let delta = 10;
  // test(list, 100, 10);
  Test("SkipList", () => {
    test(list, count, delta);
  });
  Test("TreeMap", () => {
    test(map, count, delta);
  });
}
test1();

function test(
  list: SkipList<number, number> | TreeMap<number, number>,
  count: number,
  delta: number
) {
  for (let i = 0; i < count; i++) {
    list.put(i, i + delta);
  }

  for (let i = 0; i < count; i++) {
    // console.log(list.get(i));
    Asserts.test(list.get(i) === i + delta);
  }
  // console.log(list.size);
  Asserts.test(list.size === count);
  for (let i = 0; i < count; i++) {
    // console.log(list.remove(i), "?");
    Asserts.test(list.remove(i) == i + delta);
  }
  Asserts.test(list.size === 0);
}
