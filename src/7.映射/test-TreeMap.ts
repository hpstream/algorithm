import {TreeMap} from "./TreeMap";

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

  map.traverasal({
    stop: false,
    visitor(k, v) {
      console.log(k, v);
      return false;
    },
  });
}
test1();
