export interface Graph<V, E> {
  edgesSize(): number;
  verticesSize(): number;
  addVertex(v: V): void;

  addEdge(from: V, to: V): void;
  addEdge(from: V, to: V, weight: E): void;

  removeVertex(v: V): void;
  removeEdge(from: V, to: V): void;
}
