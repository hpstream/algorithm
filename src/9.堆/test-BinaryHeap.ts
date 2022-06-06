import {BinaryHeap} from "./BinaryHeap";

function test1() {
  let heap = new BinaryHeap();

  heap.add(68);
  heap.add(72);
  heap.add(43);
  heap.add(50);
  heap.add(38);
  console.log(heap.toString());
}

function test2() {
  let heap = new BinaryHeap();

  heap.add(68);
  heap.add(72);
  heap.add(43);
  heap.add(50);
  heap.add(38);
  heap.add(10);
  heap.add(90);
  heap.add(65);
  console.log(heap.toString());
  console.log(`=============`);
  heap.remove();
  console.log(heap.toString());
}
function test3() {
  let heap = new BinaryHeap();

  heap.add(68);
  heap.add(72);
  heap.add(43);
  heap.add(50);
  heap.add(38);
  heap.add(10);
  heap.add(90);
  heap.add(65);
  console.log(heap.toString());
  console.log(`=============`);
  console.log(heap.replace(70));
  console.log(heap.toString());
}
function test4() {
  let data = [88, 44, 53, 41, 16, 6, 70, 18, 85, 98, 81, 23, 36, 43, 37];
  let heap = new BinaryHeap(data);
  console.log(heap.toString());
  data[0] = 0;
  data[1] = 1;
  console.log(`=============`);
  console.log(heap.toString());
}
function test5() {
  let data = [88, 44, 53, 41, 16, 6, 70, 18, 85, 98, 81, 23, 36, 43, 37];
  let heap = new BinaryHeap(data, (o1, o2) => {
    return o2 - o1;
  });
  console.log(heap.toString());
  console.log(`=============`);
}
// test1();
// test2();
// test3();
// test4();
test5();
