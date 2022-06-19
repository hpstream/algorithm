import {BFS_01, BFS_02, DFS_01, DFS_02, MST_01, MST_02, SP, TOPO} from "./data";
import {ListGraph, WeightManager} from "./ListGraph1";
function directedGraph<T, E = undefined>(
  data: any[][],
  weightManager: WeightManager<E>
) {
  let graph = new ListGraph<T, E>(weightManager);
  for (let i = 0; i < data.length; i++) {
    let edge = data[i];
    if (edge.length == 1) {
      graph.addVertex(edge[0]);
    } else if (edge.length == 2) {
      graph.addEdge(edge[0], edge[1]);
    } else if (edge.length == 3) {
      graph.addEdge(edge[0], edge[1], edge[2]);
    }
  }
  return graph;
}
function undirectedGraph<T, E>(data: any[][], weightManager: WeightManager<E>) {
  let graph = new ListGraph<T, E>(weightManager);
  for (let i = 0; i < data.length; i++) {
    let edge = data[i];
    if (edge.length == 1) {
      graph.addVertex(edge[0]);
    } else if (edge.length == 2) {
      graph.addEdge(edge[0], edge[1]);
      graph.addEdge(edge[1], edge[0]);
    } else if (edge.length == 3) {
      graph.addEdge(edge[0], edge[1], edge[2]);
      graph.addEdge(edge[1], edge[0], edge[2]);
    }
  }
  return graph;
}
function test1() {
  let graph = directedGraph<string, number>(SP, {
    compare(e1, e2) {
      return e1 - e2;
    },
    add(w1, w2) {
      return w1 + w2;
    },
  });
  let sp = graph.shortestPath("A");
  console.log(sp);
}

function test2() {
  let graph = undirectedGraph<string, number>(SP, {
    compare(e1, e2) {
      return e1 - e2;
    },
    add(w1, w2) {
      return w1 + w2;
    },
  });
  let sp = graph.shortestPath("A");
  console.log(sp);
}
// test1();
test2();
