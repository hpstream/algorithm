import {Trie} from "./Trie";

function test1() {
  let trie = new Trie();
  trie.add("cat", 1);
  trie.add("dog", 2);
  trie.add("catalog", 3);
  trie.add("cast", 4);
  trie.add("小码哥", 5);
  // console.log(trie.size == 5);
  // console.log(trie.startsWith("do"));
  // console.log(trie.startsWith("c"));
  // console.log(trie.startsWith("ca"));
  // console.log(trie.startsWith("cata"));
  // console.log(trie.startsWith("hehe"));
  // console.log(trie.contains("小码哥1"));
  // console.log(trie.get("小码哥") == 5);
  console.log(trie.remove("cat"), 1);
  console.log(trie.remove("catalog"), 3);
  console.log(trie.remove("cast"), 4);
  console.log(trie.size, 2);
  console.log(trie.startsWith("小"));
  console.log(trie.startsWith("do"));
  console.log(!trie.startsWith("c"));
}

test1();
