import {BFS_01, BFS_02, DFS_01, DFS_02} from "./data";
import {ListGraph} from "./ListGraph";
import {directedGraph, undirectedGraph} from "./utils";

function test1() {
  let graph = undirectedGraph<string>(BFS_01);

  graph.bfs("A", (vertex) => {
    console.log(vertex.value);
  });
}

function test2() {
  let graph = directedGraph<number>(BFS_02);

  // graph.bfs(0, (vertex) => {
  //   console.log(vertex.value);
  // });
  graph.bfs(7, (vertex) => {
    console.log(vertex.value);
  });
}

function test3() {
  let graph = undirectedGraph<number>(DFS_01);

  graph.dfs(1, (vertex) => {
    console.log(vertex.value);
  });
}

function test4() {
  let graph = directedGraph<string>(DFS_02);

  // graph.dfs("a", (vertex) => {
  //   console.log(vertex.value);
  // });
  graph.dfs("c", (vertex) => {
    console.log(vertex.value);
  });
}

// test1();
// test2();
test3();
// test4();
