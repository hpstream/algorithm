import {BinaryHeap} from "./../libs/heap/BinaryHeap";
function test1() {
  // 大顶堆
  let heap = new BinaryHeap<number>([], (a, b) => a - b);

  heap.add(68);
  heap.add(72);
  heap.add(43);
  heap.add(50);
  heap.add(38);
  console.log(heap.toString());
}

function test2() {
  // 小顶堆
  let heap = new BinaryHeap<number>([], (a, b) => b - a);

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

// test1();
test2();
