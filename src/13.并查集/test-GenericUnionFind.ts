import Asserts, {test} from "../12.sort/utils/Asserts";
import {Test} from "../12.sort/utils/times";
import {GenericUnionFind} from "./GenericUnionFind";
import {UnionFind} from "./UF";
import {UnionFind_QF} from "./UnionFind_QF";
import {UnionFind_QU} from "./UnionFind_QU";
import {UnionFind_QU_R} from "./UnionFind_QU_R";
import {UnionFind_QU_R_PC} from "./UnionFind_QU_R_PC";
import {UnionFind_QU_R_PH} from "./UnionFind_QU_R_PH";
import {UnionFind_QU_R_PS} from "./UnionFind_QU_R_PS";
import {UnionFind_QU_S} from "./UnionFind_QU_S";
let count = 1000000;
class Student {
  constructor(public age: number, public name: string) {}
}

function test1() {
  let uf = new GenericUnionFind<Student>();
  let stu1 = new Student(1, "jack");
  let stu2 = new Student(2, "rose");
  let stu3 = new Student(3, "jack");
  let stu4 = new Student(4, "rose");
  uf.makeSet(stu1);
  uf.makeSet(stu2);
  uf.makeSet(stu3);
  uf.makeSet(stu4);

  uf.union(stu1, stu2);
  uf.union(stu3, stu4);
  uf.union(stu1, stu4);
  Asserts.test(uf.isSame(stu2, stu3));
  Asserts.test(uf.isSame(stu3, stu4));
  Asserts.test(uf.isSame(stu1, stu3));
  // uf.isSame(stu1, stu2);
}
function testTime1(uf: GenericUnionFind<number>) {
  Test(uf.getClassNamge(), () => {
    for (let i = 0; i < count; i++) {
      uf.makeSet(i);
    }
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
  testTime1(new GenericUnionFind());
  testTime(new UnionFind_QU_R_PC(count));
  testTime(new UnionFind_QU_R_PS(count));
  testTime(new UnionFind_QU_R_PH(count));
}
// test1();
test3();
