import {BubbleSort3} from "./class/BubbleSort3";
import {BubbleSort2} from "./class/BubbleSort2";
import {BubbleSort1} from "./class/BubbleSort1";
import {HeapSort} from "./class/HeapSort";
import {SelectionSort} from "./class/selectionSort";
import Asserts from "./utils/Asserts";
import {Test} from "./utils/times";
import {copy, isAscOrder, random} from "./utils/util";
import {InsertionSort} from "./class/InsertionSort";
import {InsertionSort_1} from "./class/InsertionSort1";
import {InsertionSort_2} from "./class/InsertionSort2";
import {MergeSort} from "./class/MergeSort";
import {QuickSort} from "./class/QuickSort";
import {ShellSort} from "./class/ShellSort";
import {CountingSort_1} from "./class/count/CountingSort1";
import {RadixSort} from "./class/count/RadixSort";

function testSort(array: number[], sorts: any[]) {
  let classArr = [];
  for (let i = 0; i < sorts.length; i++) {
    let arr = copy(array);
    let sort = new (sorts[i] as any)(arr);
    sort.sort();
    Asserts.test(isAscOrder(sort.array));
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
  let arr = random(30000, 1, 30000);
  // let arr = random(10, 1, 200);
  testSort(arr, [
    RadixSort,
    // CountingSort_1,
    // ShellSort,
    // QuickSort,
    // MergeSort,
    // InsertionSort_2,
    // InsertionSort_1,
    // InsertionSort,
    // HeapSort,
    // SelectionSort,
    // BubbleSort3,
    // BubbleSort2,
    // BubbleSort1,
  ]);
}

test1();
