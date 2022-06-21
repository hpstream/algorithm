import {isEqual, isEqualWith} from "lodash";
import {PriorityQueue} from "../10.优先级队列/PriorityQueue";
import {GenericUnionFind} from "../13.并查集/GenericUnionFind";
import {UnionFind} from "../13.并查集/UF";
import {Graph} from "./Graph";
function isSameEdge<V, E>(edge1: Edge<V, E>, edge2: Edge<V, E>) {
  return isEqual(edge1.from, edge2.from) && isEqual(edge1.to, edge2.to);
}
// 顶点
class Vertex<V, E> {
  // value!: V;
  inEdges: Set<Edge<V, E>> = new Set();
  outEdges: Set<Edge<V, E>> = new Set();

  constructor(public value: V) {}

  equals(edge: Vertex<V, E>) {
    // 看顶点是否相等，看value是否相等
    return isEqual(this.value, edge.value);
  }
}
// 边
class Edge<V, E> {
  // from!: Vertex<V, E>;
  // to!: Vertex<V, E>;
  // weight!: E;
  constructor(
    public from: Vertex<V, E>,
    public to: Vertex<V, E>,
    public weight?: E
  ) {}

  Info() {
    return new EdgeInfo(this.from.value, this.to.value, this.weight);
  }

  equals(edge: Edge<V, E>) {
    // 边是否相等，看起点和终点是否相等
    return isEqual(this.from, edge.from) && isEqual(this.to, edge.to);
  }
}

export interface WeightManager<E> {
  compare(el: E, e2: E): number;
  add(w1: E, w2: E): E;
  zero(): E;
}

class EdgeInfo<V, E> {
  // from!: Vertex<V, E>;
  // to!: Vertex<V, E>;
  // weight!: E;
  constructor(public from: V, public to: V, public weight?: E) {}
}

class PathInfo<V, E> {
  weight!: E;
  edgeInfos: EdgeInfo<V, E>[] = [];
  // constructor(public weight: E, public edgeInfos: EdgeInfo<V, E>[]) {}
}
// 邻接表;
export class ListGraph<V, E> implements Graph<V, E> {
  vertices = new Map<V, Vertex<V, E>>();
  edges = new Set<Edge<V, E>>();

  constructor(public weightManager: WeightManager<E>) {}
  addEdge(from: V, to: V): void;
  addEdge(from: V, to: V, weight: E): void;
  addEdge(from: V, to: V, weight?: E): void {
    let fromVertex = this.vertices.get(from);
    if (!fromVertex) {
      fromVertex = new Vertex(from);
      this.vertices.set(from, fromVertex);
    }

    let toVertex = this.vertices.get(to);
    if (!toVertex) {
      toVertex = new Vertex(to);
      this.vertices.set(to, toVertex);
    }
    let edge = new Edge(fromVertex, toVertex, weight);

    let keys = fromVertex.outEdges.keys();
    for (let item of keys) {
      if (isSameEdge(item, edge)) {
        fromVertex.outEdges.delete(item);
        toVertex.inEdges.delete(item);
        this.edges.delete(item);
        break;
      }
    }

    fromVertex.outEdges.add(edge);
    toVertex.inEdges.add(edge);
    this.edges.add(edge);
  }
  edgesSize(): number {
    return this.edges.size;
  }
  verticesSize(): number {
    return this.vertices.size;
  }
  addVertex(v: V): void {
    if (this.vertices.has(v)) return;
    this.vertices.set(v, new Vertex(v));
  }

  removeVertex(v: V): void {
    let vertex = this.vertices.get(v);
    if (!vertex) return;

    for (const edge of [...vertex.outEdges]) {
      edge.to.inEdges.delete(edge);
      vertex.outEdges.delete(edge);
      this.edges.delete(edge);
    }
    for (const edge of [...vertex.inEdges]) {
      edge.from.outEdges.delete(edge);
      vertex.inEdges.delete(edge);
      this.edges.delete(edge);
    }

    this.vertices.delete(v);
  }
  removeEdge(from: V, to: V): void {
    let fromVertex = this.vertices.get(from);
    if (!fromVertex) return;
    let toVertex = this.vertices.get(to);
    if (!toVertex) return;
    let edge = new Edge(fromVertex, toVertex);

    let keys = fromVertex.outEdges.keys();
    for (let item of keys) {
      if (isSameEdge(item, edge)) {
        fromVertex.outEdges.delete(item);
        toVertex.inEdges.delete(item);
        this.edges.delete(item);
        break;
      }
    }
  }

  // 寻找最短路径
  shortestPath(begin: V) {
    return this.bellmanFord(begin);
    return this.dijklstra(begin);
  }
  // 多源最短路径算法
  floyd() {
    let paths = new Map<V, Map<V, PathInfo<V, E>>>();

    for (const edges of [...this.edges]) {
      let map = paths.get(edges.from.value);
      if (!map) {
        map = new Map<V, PathInfo<V, E>>();
        paths.set(edges.from.value, map);
      }
      let pathInfo = new PathInfo<V, E>();
      pathInfo.weight = edges.weight as E;
      pathInfo.edgeInfos.push(edges.Info());
      map.set(edges.to.value, pathInfo);
    }

    this.vertices.forEach((vertex2, v2) => {
      this.vertices.forEach((vertex1, v1) => {
        this.vertices.forEach((vertex3, v3) => {
          if (v1 == v2 || v2 == v3 || v3 == v1) return;
          let path12 = this.getPathInfo(v1, v2, paths);
          if (!path12) return;
          let path23 = this.getPathInfo(v2, v3, paths);
          if (!path23) return;
          let path13 = this.getPathInfo(v1, v3, paths);
          let newWeight = this.weightManager.add(path12.weight, path23.weight);
          if (
            path13 &&
            this.weightManager.compare(newWeight, path13.weight) >= 0
          )
            return;

          if (!path13) {
            path13 = new PathInfo<V, E>();
            let tem = paths.get(v1);
            if (tem) {
              tem.set(v3, path13);
            }
          }
          path13.weight = newWeight;
          path13.edgeInfos = [...path12.edgeInfos, ...path23.edgeInfos];
        });
      });
    });
    return paths;
  }
  getPathInfo(from: V, to: V, paths: Map<V, Map<V, PathInfo<V, E>>>) {
    let tem = paths.get(from);
    if (tem) return tem.get(to);
    return;
  }
  // Bellman-ford;
  bellmanFord(begin: V) {
    let benginVertex = this.vertices.get(begin);

    let selectedPath = new Map<V, PathInfo<V, E>>(); // 最终结果
    if (!benginVertex) return selectedPath;
    let count = this.vertices.size - 1;
    let edges = this.edges;
    let beginPath = new PathInfo<V, E>();
    beginPath.weight = this.weightManager.zero();
    selectedPath.set(begin, beginPath);
    for (let i = 0; i < count; i++) {
      edges.forEach((edge) => {
        let fromPath = selectedPath.get(edge.from.value);
        if (fromPath) {
          this.relaxBellmanFord(edge, fromPath, selectedPath);
        }
      });
    }
    for (const edge of edges) {
      let fromPath = selectedPath.get(edge.from.value);
      if (fromPath) {
        if (this.relaxBellmanFord(edge, fromPath, selectedPath)) {
          console.log("有负权环");
          return;
        }
      }
    }
    selectedPath.delete(begin);
    return selectedPath;
  }

  relaxBellmanFord(
    edge: Edge<V, E>,
    fromPath: PathInfo<V, E>,
    paths: Map<V, PathInfo<V, E>>
  ): boolean {
    //松弛操作，就是求两个顶点的最短路径
    // 新的可选路径 beginVertex 到edge.from的最短路径+edge.weight
    let newWeight = this.weightManager.add(fromPath.weight, edge.weight as E);
    // 以前的最短路径 beginVertex到edge.to的最短路径
    let oldPath = paths.get(edge.to.value);
    if (oldPath && this.weightManager.compare(newWeight, oldPath.weight) >= 0)
      return false;
    if (!oldPath) {
      oldPath = new PathInfo<V, E>();
    } else {
      oldPath.edgeInfos = [];
    }
    // let path = new PathInfo<V, E>();
    oldPath.weight = newWeight;
    oldPath.edgeInfos.push(...fromPath.edgeInfos);
    oldPath.edgeInfos.push(edge.Info());
    paths.set(edge.to.value, oldPath);
    return true;
  }

  // dijkstra 算法；
  dijklstra(begin: V) {
    let benginVertex = this.vertices.get(begin);
    let paths = new Map<Vertex<V, E>, PathInfo<V, E>>(); // 等选择的
    let selectedPath = new Map<V, PathInfo<V, E>>(); // 最终结果
    if (!benginVertex) return selectedPath;
    // 初始化paths;
    let path = new PathInfo<V, E>();
    path.weight = this.weightManager.zero();
    paths.set(benginVertex, path);
    // for (const edge of [...benginVertex.outEdges]) {
    //   // edge.weight;
    //   let path = new PathInfo<V, E>();
    //   path.weight = edge.weight as E;
    //   path.edgeInfos.push(edge.Info());
    //   paths.set(edge.to, path);
    // }

    while (paths.size > 0) {
      // 选择最小的
      let minEntry = this.getMinPath(paths);
      let [minVertex, minPath] = minEntry;
      // minVertex离开桌面

      selectedPath.set(minVertex.value, minPath);
      paths.delete(minVertex);
      // 对vertex松弛操作
      for (const edge of [...minVertex.outEdges]) {
        //如果edge.to已经离开桌面就不用松弛
        if (selectedPath.has(edge.to.value)) continue;
        if (edge.to === benginVertex) continue;

        this.relaxDijkstra(edge, minPath, paths);
      }
    }
    return selectedPath;
  }

  /**
   * 松弛操作
   * @param edge 需要松弛的边
   * @param fromPath edge的from的最短路径
   * @param paths 存放着其他点(还没有离开桌面的点)的最短路径信息
   * @returns
   */
  relaxDijkstra(
    edge: Edge<V, E>,
    fromPath: PathInfo<V, E>,
    paths: Map<Vertex<V, E>, PathInfo<V, E>>
  ) {
    //松弛操作，就是求两个顶点的最短路径
    // 新的可选路径 beginVertex 到edge.from的最短路径+edge.weight
    let newWeight = this.weightManager.add(fromPath.weight, edge.weight as E);
    // 以前的最短路径 beginVertex到edge.to的最短路径
    let oldPath = paths.get(edge.to);
    if (oldPath && this.weightManager.compare(newWeight, oldPath.weight) > 0)
      return;
    if (!oldPath) {
      oldPath = new PathInfo<V, E>();
    }
    // let path = new PathInfo<V, E>();
    oldPath.weight = newWeight;
    // pathinfo.edgeInfos.push(...pathinfo.edgeInfos);
    oldPath.edgeInfos.push(edge.Info());
    paths.set(edge.to, oldPath);
  }
  // 选择最短的路径出来
  getMinPath(paths: Map<Vertex<V, E>, PathInfo<V, E>>) {
    let it = paths.entries();
    let minEntry = it.next().value as [Vertex<V, E>, PathInfo<V, E>];
    let res!: IteratorResult<[Vertex<V, E>, PathInfo<V, E>], any>;
    while ((res = it.next()) && !res.done) {
      let entry = res.value as [Vertex<V, E>, PathInfo<V, E>];
      if (this.weightManager.compare(entry[1].weight, minEntry[1].weight) < 0) {
        minEntry = entry;
      }
    }
    return minEntry;
  }
}
