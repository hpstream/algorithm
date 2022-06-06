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
// test1();
// test2();
test3();
