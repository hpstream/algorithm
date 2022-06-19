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
  zero?(): E;
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
    let benginVertex = this.vertices.get(begin);
    let paths = new Map<Vertex<V, E>, PathInfo<V, E>>(); // 等选择的
    let selectedPath = new Map<V, PathInfo<V, E>>(); // 最终结果
    if (!benginVertex) return paths;
    // 初始化paths;
    for (const edge of [...benginVertex.outEdges]) {
      // edge.weight;
      let path = new PathInfo<V, E>();
      path.weight = edge.weight as E;
      path.edgeInfos.push(edge.Info());
      paths.set(edge.to, path);
    }

    while (paths.size > 0) {
      // 选择最小的
      let minEntry = this.getMinPath(paths);
      let [vertex, pathinfo] = minEntry;
      // minVertex离开桌面

      selectedPath.set(vertex.value, pathinfo);
      paths.delete(vertex);
      // 对vertex松弛操作
      for (const edge of [...vertex.outEdges]) {
        //如果edge.to已经离开桌面就不用松弛
        if (selectedPath.has(edge.to.value)) continue;
        if (edge.to === benginVertex) continue;
        // 新的可选路径 beginVertex 到edge.from的最短路径+edge.weight
        let newWeight = this.weightManager.add(
          pathinfo.weight,
          edge.weight as E
        );
        // 以前的最短路径 beginVertex到edge.to的最短路径
        let oldPath = paths.get(edge.to);
        if (
          !oldPath ||
          this.weightManager.compare(newWeight, oldPath.weight) < 0
        ) {
          let path = new PathInfo<V, E>();
          path.weight = newWeight;
          path.edgeInfos.push(...pathinfo.edgeInfos);
          path.edgeInfos.push(edge.Info());
          paths.set(edge.to, path);
        }

        // this.relax();
      }
    }
    return selectedPath;
  }
  // relax() {}
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
