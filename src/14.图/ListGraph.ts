import {isEqual, isEqualWith} from "lodash";
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

  equals(edge: Edge<V, E>) {
    // 边是否相等，看起点和终点是否相等
    return isEqual(this.from, edge.from) && isEqual(this.to, edge.to);
  }
}
// 邻接表;
export class ListGraph<V, E> implements Graph<V, E> {
  vertices = new Map<V, Vertex<V, E>>();
  edges = new Set<Edge<V, E>>();
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
        for (const edge of [...vertex.outEdges]) {
          if (visitedVertices.has(edge.to)) continue;
          stack.push(edge.to);
          visitedVertices.add(edge.to);
        }
      }
    }
  }
  dfs2(begin: V, cb: (vertex: Vertex<V, E>) => void) {
    let beginVertex = this.vertices.get(begin);
    if (!beginVertex) return;
    let visitedVertices = new Set();
    let stack = [beginVertex];

    while (stack.length > 0) {
      let vertex = stack.pop();

      if (vertex) {
        for (const edge of [...vertex.outEdges]) {
          if (visitedVertices.has(edge.to)) continue;
          // stack.push(edge.from);
          stack.push(edge.to);
          visitedVertices.add(edge.to);
          cb(edge.to);
          break;
          // cb(edge.to);
        }
      }
    }
  }

  dfs1(begin: V, cb: (vertex: Vertex<V, E>) => void) {
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
