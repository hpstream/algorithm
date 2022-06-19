import {BFS_01, BFS_02, DFS_01, DFS_02, MST_01, MST_02, TOPO} from "./data";
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
  let str: any = [];
  graph.dfs("a", (vertex) => {
    str.push(vertex.value);
  });
  console.log("dfs", str.join(","));
  str = [];
  graph.dfs1("a", (vertex) => {
    str.push(vertex.value);
  });
  console.log("dfs1", str.join(","));
  str = [];
  graph.dfs2("a", (vertex) => {
    str.push(vertex.value);
  });
  console.log("dfs2", str.join(","));
}

function test5() {
  let graph = directedGraph<string>(TOPO);

  let list = graph.topologicalSort();

  console.log(list);
}

function test6() {
  let graph = undirectedGraph<string, number>(MST_01);
  graph.edgeComparator = (e1, e2) => {
    if (e1.weight && e2.weight) {
      return e2.weight - e1.weight;
    }
    return 0;
  };
  let infos = graph.mst();
  for (const info of infos) {
    console.log(
      `edgeinfo [form=${info.from},to=${info.to},weight=${info.weight}]`
    );
  }

  // console.log(infos);
}
function test7() {
  let graph = undirectedGraph<string, number>(MST_01);
  graph.edgeComparator = (e1, e2) => {
    if (e1.weight && e2.weight) {
      return e2.weight - e1.weight;
    }
    return 0;
  };
  let infos = graph.mst();
  for (const info of infos) {
    console.log(
      `edgeinfo [form=${info.from},to=${info.to},weight=${info.weight}]`
    );
  }

  // console.log(infos);
}

// test1();
// test2();
// test3();
// test4();
// test5();
// test6();
test7();
