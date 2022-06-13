import Asserts from "../12.sort/utils/Asserts";
import {UnionFind_QF} from "./UnionFind_QF";

function test1() {
  let uf = new UnionFind_QF(12);
  uf.union(0, 1);
  uf.union(0, 3);
  uf.union(0, 4);
  uf.union(2, 3);
  uf.union(2, 5);

  uf.union(6, 7);

  uf.union(8, 10);
  uf.union(9, 10);
  uf.union(9, 11);

  // console.log(uf.isSame(0, 6));
  // console.log(uf.isSame(0, 5));
  uf.union(4, 6);

  console.log(uf.isSame(2, 7));
}
function test2() {
  let uf = new UnionFind_QF(12);
  uf.union(0, 1);
  uf.union(0, 3);
  uf.union(0, 4);
  uf.union(2, 3);
  uf.union(2, 5);

  uf.union(6, 7);

  uf.union(8, 10);
  uf.union(9, 10);
  uf.union(9, 11);

  // console.log(uf.isSame(0, 6));
  // console.log(uf.isSame(0, 5));
  Asserts.test(!uf.isSame(2, 7));
  uf.union(4, 6);

  Asserts.test(uf.isSame(2, 7));
}
// test1();
test2();
