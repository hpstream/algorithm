export abstract class Visitor<T> {
  stop: boolean = false;
  abstract visit(element: T): boolean;
}
export interface Set<T> {
  size(): number;
  isEmpty(): boolean;
  clear(): void;
  contains(element: T): boolean;
  add(element: T): void;
  remove(element: T): void;
  traversal(visitor: Visitor<T>): void;
}
