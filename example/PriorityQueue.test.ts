import {PriorityQueue} from "./../libs/heap/PriorityQueue";
class Person {
  constructor(public name: string, public bone: number) {}
}

function test1() {
  class Person {
    constructor(public name: string, public bone: number) {}
  }
  let pQueue = new PriorityQueue<Person>([], (a, b) => a.bone - b.bone);
  pQueue.enQueue(new Person("p1", 1));
  pQueue.enQueue(new Person("p2", 10));
  pQueue.enQueue(new Person("p3", 5));
  pQueue.enQueue(new Person("p4", 6));
  pQueue.enQueue(new Person("p5", 11));

  console.log(pQueue.front());
}

test1();
