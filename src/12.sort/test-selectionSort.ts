import {selectionSort} from "./methods/selectionSort";
import Asserts from "./utils/Asserts";

import {Test} from "./utils/times";
import {copy, isAscOrder, random} from "./utils/util";

function test1() {
  let arr = random(10, 1, 100);
  let arr1 = copy(arr);

  Test("选择排序1", () => {
    selectionSort(arr1);
  });
  Asserts.test(isAscOrder(arr1));
  // console.log(arr1, isAscOrder(arr1));
}

test1();
