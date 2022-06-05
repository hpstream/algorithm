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
test1();
