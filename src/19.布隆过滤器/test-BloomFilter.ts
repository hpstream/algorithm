import {BloomFilter} from "./BloomFilter";

function test1() {
  let bf = new BloomFilter<number>(1000000, 0.01);

  for (let i = 1; i <= 2; i++) {
    bf.put(i);
  }
  bf.put(5);
  console.log(bf.contains(5));
  // console.log(bf.bits);
  // let count = 0;
  // for (let i = 1000001; i <= 2000000; i++) {
  //   if (bf.contains(i)) {
  //     count++;
  //   }
  // }
  // console.log(count);
}

function test2() {
  let bf = new BloomFilter<number>(1000000, 0.01);

  bf.put(100);

  console.log(bf.contains(100));
}

test1();
// test2();
