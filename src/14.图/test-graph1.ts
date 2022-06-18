import {BFS_01, BFS_02} from "./data";
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

// test1();

test2();
