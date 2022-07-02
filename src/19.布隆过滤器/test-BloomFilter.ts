import {BloomFilter} from "./BloomFilter";

function test1() {
  let bf = new BloomFilter<number>(100000000, 0.01);
}

test1();
