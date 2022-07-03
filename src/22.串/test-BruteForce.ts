import Asserts from "../12.sort/utils/Asserts";
import {BruteForce01} from "./BruteForce01";
import {BruteForce02} from "./BruteForce02";
import {KMP} from "./KMP";

function test1() {
  Asserts.test(BruteForce01.indexOf2("Hello World", "H") === 0);
  Asserts.test(BruteForce01.indexOf2("Hello World", "d") === 10);
  Asserts.test(BruteForce01.indexOf2("Hello World", "or") === 7);
  Asserts.test(BruteForce01.indexOf2("Hello World", "abc") === -1);
}
function test2() {
  Asserts.test(BruteForce01.indexOf("Hello World", "H") === 0);
  Asserts.test(BruteForce01.indexOf("Hello World", "d") === 10);
  Asserts.test(BruteForce01.indexOf("Hello World", "or") === 7);
  Asserts.test(BruteForce01.indexOf("Hello World", "abc") === -1);
}
function test3() {
  // console.log(BruteForce02.indexOf("Hello World", "d"));
  Asserts.test(BruteForce02.indexOf("Hello World", "H") === 0);
  Asserts.test(BruteForce02.indexOf("Hello World", "d") === 10);
  Asserts.test(BruteForce02.indexOf("Hello World", "or") === 7);
  Asserts.test(BruteForce02.indexOf("Hello World", "abc") === -1);
}

function test4() {
  // console.log(BruteForce02.indexOf("Hello World", "d"));
  Asserts.test(KMP.indexOf("Hello World", "H") === 0);
  Asserts.test(KMP.indexOf("Hello World", "d") === 10);
  Asserts.test(KMP.indexOf("Hello World", "or") === 7);
  Asserts.test(KMP.indexOf("Hello World", "abc") === -1);
}
// test2();
// test3();
test4();
