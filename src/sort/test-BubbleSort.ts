import {bubbleSort1} from "./methods/BubbleSort";
import {Test} from "./utils/times";
import {copy, random} from "./utils/util";

function test1() {
  let arr = random(20000, 5000, 100000000);
  let arr1 = copy(arr);
  let arr2 = copy(arr);
  let arr3 = copy(arr);

  Test("冒泡排序1", () => {
    bubbleSort1(arr1);
  });

  Test("冒泡排序2", () => {
    bubbleSort1(arr2);
  });

  Test("冒泡排序3", () => {
    bubbleSort1(arr3);
  });
}

test1();
