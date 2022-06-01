import {Set, Visitor} from "../6.集合/Set";
// import { Visitor } from "./Map";
import {TreeMap} from "./TreeMap";

export class TreeSet<E> implements Set<E> {
  map = new TreeMap<E, any>((oldkey, newkey) => {
    // console.log(oldkey, newkey);
    return oldkey > newkey ? 1 : 0;
  });
  size(): number {
    return this.map.size;
  }
  isEmpty(): boolean {
    return this.map.isEmpty();
  }
  clear(): void {
    return this.map.clear();
  }
  contains(key: E): boolean {
    return this.map.containsKey(key);
  }
  add(key: E): void {
    return this.map.put(key, null);
  }
  remove(key: E): void {
    return this.map.remove(key);
  }
  traversal(visitor: Visitor<E>): void {
    this.map.traverasal({
      stop: false,
      visitor: visitor.visit,
    });
  }
}
