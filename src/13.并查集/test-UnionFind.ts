import Asserts from "../12.sort/utils/Asserts";
import {Test} from "../12.sort/utils/times";
import {UnionFind} from "./UF";
import {UnionFind_QF} from "./UnionFind_QF";
import {UnionFind_QU} from "./UnionFind_QU";
import {UnionFind_QU_R} from "./UnionFind_QU_R";
import {UnionFind_QU_R_PC} from "./UnionFind_QU_R_PC";
import {UnionFind_QU_R_PH} from "./UnionFind_QU_R_PH";
import {UnionFind_QU_R_PS} from "./UnionFind_QU_R_PS";
import {UnionFind_QU_S} from "./UnionFind_QU_S";
let count = 500000;
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

function test(uf: UnionFind) {
  uf.union(0, 1);
  uf.union(0, 3);
  uf.union(0, 4);
  uf.union(2, 3);
  uf.union(2, 5);

  uf.union(6, 7);

  uf.union(8, 10);
  uf.union(9, 10);
  uf.union(9, 11);

  Asserts.test(!uf.isSame(2, 7));
  uf.union(4, 6);
  Asserts.test(uf.isSame(2, 7));
}

function testTime(uf: UnionFind) {
  Test(uf.getClassNamge(), () => {
    for (let i = 0; i < count; i++) {
      uf.union(
        Math.floor(Math.random() * count),
        Math.floor(Math.random() * count)
      );
    }
    for (let i = 0; i < count; i++) {
      uf.isSame(
        Math.floor(Math.random() * count),
        Math.floor(Math.random() * count)
      );
    }
  });
}
function test3() {
  // test(new UnionFind_QF(12));
  // test(new UnionFind_QU(12));
  // test(new UnionFind_QU_S(12));
  // test(new UnionFind_QU_R(12));
  test(new UnionFind_QU_R_PC(12));
  test(new UnionFind_QU_R_PS(12));
  test(new UnionFind_QU_R_PH(12));

  // testTime(new UnionFind_QF(count));
  // testTime(new UnionFind_QU(count));
  testTime(new UnionFind_QU_S(count));
  testTime(new UnionFind_QU_R(count));
  testTime(new UnionFind_QU_R_PC(count));
  testTime(new UnionFind_QU_R_PS(count));
  testTime(new UnionFind_QU_R_PH(count));
}
// test1();
// test2();
test3();
