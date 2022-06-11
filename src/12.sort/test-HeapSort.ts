import {BubbleSort3} from "./class/BubbleSort3";
import {BubbleSort2} from "./class/BubbleSort2";
import {BubbleSort1} from "./class/BubbleSort1";
import {HeapSort} from "./class/HeapSort";
import {SelectionSort} from "./class/selectionSort";
import Asserts from "./utils/Asserts";
import {Test} from "./utils/times";
import {copy, isAscOrder, random} from "./utils/util";
import {Sort} from "./class/Sort";

function testSotr(array: number[], sorts: any[]) {
  let classArr = [];
  for (let i = 0; i < sorts.length; i++) {
    let arr = copy(array);
    let sort = new (sorts[i] as any)(arr);
    sort.sort();
    Asserts.test(isAscOrder(arr));
    classArr.push(sort);
  }

  classArr.sort((a, b) => {
    return a.time - b.time;
  });
  classArr.forEach((sort) => {
    console.log(sort.toString());
    // sort.toString();
  });
}
function test1() {
  let arr = random(10000, 1, 20000);
  testSotr(arr, [
    HeapSort,
    SelectionSort,
    BubbleSort3,
    BubbleSort2,
    BubbleSort1,
  ]);
}

test1();
