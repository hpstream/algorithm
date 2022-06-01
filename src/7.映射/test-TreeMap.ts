import {TreeMap} from "./TreeMap";
import {TreeSet} from "./TreeSet";

function test1() {
  // let data = [7, 4, 2, 1, 3, 5, 9, 8, 11, 10, 12];
  var map = new TreeMap<string, number>((oldkey, newkey) => {
    // console.log(oldkey, newkey);
    return oldkey > newkey ? 1 : 0;
  });
  map.put("class", 2);
  map.put("public", 5);
  map.put("text", 7);
  map.put("public", 8);

  console.log(map.remove("public"));

  // map.traverasal({
  //   stop: false,
  //   visitor(k, v) {
  //     console.log(k, v);
  //     return false;
  //   },
  // });
}

function test2() {
  // let data = [7, 4, 2, 1, 3, 5, 9, 8, 11, 10, 12];
  var map = new TreeSet<string>();
  map.add("class");
  map.add("public");
  map.add("text");
  map.add("public");

  map.traversal({
    stop: false,
    visit(e) {
      console.log(e);
      return false;
    },
  });
}
test1();
// test2();
