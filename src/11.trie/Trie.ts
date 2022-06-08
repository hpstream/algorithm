import {HashMap} from "../8.哈希表/HashMap";

export class Node<V> {
  children!: HashMap<string, Node<V>>;
  // parent?: Node<V>;
  value?: V;
  character!: string;
  word: boolean = false;
  constructor(public parent?: Node<V>) {
    this.children = new HashMap();
  }
}

export class Trie<V> {
  root?: Node<V>;
  size = 0;
  constructor() {
    this.root = new Node();
  }
  isEmpty() {
    return this.size == 0;
  }
  clear() {
    this.root && this.root.children.clear();
    this.size = 0;
  }
  findNode(key: string) {
    this.keyCheck(key);
    let node = this.root;
    if (!node) return;
    let len = key.length;

    for (let i = 0; i < len; i++) {
      node = node.children.get(key[i]);
      if (!node) return;
    }
    return node.word ? node : undefined;
  }
  keyCheck(key: string) {
    if (!key || key.length === 0) {
      throw new Error("key must not be empty");
    }
  }
  startsWith(prefix: string): boolean {
    this.keyCheck(prefix);
    let node = this.root;
    if (!node) return false;
    let len = prefix.length;

    for (let i = 0; i < len; i++) {
      if (!node) return false;
      let cNode = node.children.get(prefix[i]);
      if (cNode) {
        node = cNode;
      } else {
        return false;
      }
    }
    if (!node) return false;
    return true;
  }
  add(key: string, value: V) {
    this.keyCheck(key);
    let node = this.root;
    if (!node) return;
    let len = key.length;
    let childNode: Node<V>;
    for (let i = 0; i < len; i++) {
      if (!node) return;
      let cNode = node.children.get(key[i]);
      if (cNode) {
        node = cNode;
      } else {
        childNode = new Node<V>(node);
        childNode.character = key[i];
        node.children.put(key[i], childNode);
        node = childNode;
      }
    }
    if (!node) return;
    if (!node.word) {
      node.word = true;
      node.value = value;
      this.size++;
      return;
    }
    let oldValue = node.value;
    node.value = value;
    return oldValue;
  }
  get(key: string) {
    let node = this.findNode(key);
    if (!node) return;
    return node.value;
  }
  contains(key: string) {
    return !!this.findNode(key);
  }
  remove(str: string) {
    let node = this.findNode(str);

    if (node) {
      this.size--;
      let oldValue = node.value;
      if (node && node.word) return oldValue;
      if (node.children.isEmpty()) {
        node.word = false;
        node.value = undefined;
        return oldValue;
      } else {
        let parent: Node<V> | undefined;
        while ((parent = node.parent)) {
          parent.children.remove(node.character);
          if (parent.word || !parent.children.isEmpty()) break;
          node = parent;
        }
      }
      return oldValue;
    }
    return;
  }
}
