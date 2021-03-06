import {ListGraph} from "./ListGraph";
type GraphData<T, E> = [T, T] | [T, T, E] | [T];
export function directedGraph<T, E = undefined>(data: any[][]) {
  let graph = new ListGraph<T, E>();
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

/**
 * 无向图
 * @param data
 * @return
 */

export function undirectedGraph<T, E = undefined>(data: any[][]) {
  let graph = new ListGraph<T, E>();
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
