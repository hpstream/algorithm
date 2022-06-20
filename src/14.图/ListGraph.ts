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

class EdgeInfo<V, E> {
  // from!: Vertex<V, E>;
  // to!: Vertex<V, E>;
  // weight!: E;
  constructor(public from: V, public to: V, public weight?: E) {}
}
// 邻接表;
export class ListGraph<V, E> implements Graph<V, E> {
  vertices = new Map<V, Vertex<V, E>>();
  edges = new Set<Edge<V, E>>();

  constructor(
    public edgeComparator?: (el: Edge<V, E>, e2: Edge<V, E>) => number
  ) {}
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
  //拓扑排序
  topologicalSort() {
    let list: V[] = [];
    let queue: Vertex<V, E>[] = [];
    let ins = new Map();
    // 初始化(将度为0的节点都放入队列)
    this.vertices.forEach((vertex) => {
      if (vertex.inEdges.size == 0) {
        queue.push(vertex);
      } else {
        ins.set(vertex, vertex.inEdges.size);
      }
    });
    while (queue.length > 0) {
      let vertex = queue.shift();

      if (vertex) {
        list.push(vertex.value);
        vertex.outEdges.forEach((edge) => {
          let toIn = ins.get(edge.to) - 1;
          ins.set(edge.to, toIn);
          if (toIn === 0) {
            queue.push(edge.to);
          }
        });
      }
    }
    // 代表有环
    for (const value of ins.values()) {
      if (value !== 0) {
        return [];
      }
    }

    return list;
  }
  //最小生成树
  mst() {
    return this.kruskal();
    // return this.prim();
  }

  prim() {
    let vertex = this.vertices.values().next().value as Vertex<V, E>;
    let edgeInfos = new Set<EdgeInfo<V, E>>();
    let addedVertices = new Set();
    if (!vertex) edgeInfos;
    addedVertices.add(vertex);

    let heap = new PriorityQueue<Edge<V, E>>(
      [...vertex.outEdges],
      this.edgeComparator
    );
    // let edgeSize = this.vertices.size - 1;
    let verticesSize = this.verticesSize();
    while (!heap.isEmpty() && addedVertices.size < verticesSize) {
      let edge = heap.deQueue(); //相当于remove;

      if (edge) {
        if (addedVertices.has(edge.to)) continue;
        addedVertices.add(edge.to);
        edgeInfos.add(edge.Info());
        heap.addAll([...edge.to.outEdges]);
      }
    }

    return edgeInfos;
  }

  kruskal() {
    let edgeInfos = new Set<EdgeInfo<V, E>>();

    if (this.vertices.size < 2) return edgeInfos;
    let gUnionFind = new GenericUnionFind();
    // O[E]
    let heap = new PriorityQueue<Edge<V, E>>(
      [...this.edges],
      this.edgeComparator
    );
    // O[V]
    this.vertices.forEach((vertic, v) => {
      gUnionFind.makeSet(vertic);
    });
    let edgeSize = this.vertices.size - 1;
    // O(ELogE)
    while (!heap.isEmpty() && edgeInfos.size < edgeSize) {
      let edge = heap.deQueue(); //相当于remove;
      if (edge) {
        if (gUnionFind.isSame(edge.from, edge.to)) continue;
        edgeInfos.add(edge.Info());
        gUnionFind.union(edge.from, edge.to);
      }
    }
    return edgeInfos;
  }

  bfs(begin: V, cb: (vertex: Vertex<V, E>) => void) {
    let beginVertex = this.vertices.get(begin);
    if (!beginVertex) return;

    let queue = [beginVertex];
    let visitedVertices = new Set();
    visitedVertices.add(beginVertex);
    while (queue.length > 0) {
      let vertex = queue.shift() as Vertex<V, E>;
      cb && cb(vertex);

      for (const edge of [...vertex.outEdges]) {
        if (!visitedVertices.has(edge.to)) {
          queue.push(edge.to);
          visitedVertices.add(edge.to);
        }
      }
    }
  }
  dfs(begin: V, cb: (vertex: Vertex<V, E>) => void) {
    let beginVertex = this.vertices.get(begin);
    if (!beginVertex) return;
    let visitedVertices = new Set();
    let stack = [beginVertex];
    visitedVertices.add(beginVertex);
    while (stack.length > 0) {
      let vertex = stack.pop();
      if (vertex) {
        cb(vertex);
        let edgesArr: Vertex<V, E>[] = [];
        for (const edge of [...vertex.outEdges]) {
          if (visitedVertices.has(edge.to)) continue;
          edgesArr.unshift(edge.to);
          visitedVertices.add(edge.to);
        }

        stack.push(...edgesArr);
      }
    }
  }
  dfs1(begin: V, cb: (vertex: Vertex<V, E>) => void) {
    let beginVertex = this.vertices.get(begin);
    if (!beginVertex) return;
    let visitedVertices = new Set();
    let stack = [beginVertex];
    cb(beginVertex);
    while (stack.length > 0) {
      let vertex = stack.pop();
      if (vertex) {
        for (const edge of [...vertex.outEdges]) {
          if (visitedVertices.has(edge.to)) continue;
          stack.push(edge.from);
          stack.push(edge.to);
          visitedVertices.add(edge.to);
          cb(edge.to);
          break;
        }
      }
    }
  }

  dfs2(begin: V, cb: (vertex: Vertex<V, E>) => void) {
    let beginVertex = this.vertices.get(begin);
    if (!beginVertex) return;
    // let visitedVertices = new Set();
    this.dfsVertex(beginVertex, cb, new Set());
  }

  dfsVertex(
    begin: Vertex<V, E>,
    cb: (vertex: Vertex<V, E>) => void,
    visitedVertices: Set<Vertex<V, E>>
  ) {
    cb(begin);
    visitedVertices.add(begin);
    for (const edge of [...begin.outEdges]) {
      if (visitedVertices.has(edge.to)) continue;
      this.dfsVertex(edge.to, cb, visitedVertices);
    }
  }
}
