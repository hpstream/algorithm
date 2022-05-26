import {BinaryTree, Comparator} from "./BinaryTree";
import {Node} from "./Node";

export class BST<T> extends BinaryTree<T> {
  constructor(
    comparator?: (
      newVal: number | Comparator<T>,
      oldVal: number | Comparator<T>
    ) => number
  ) {
    super(comparator);
  }

  add(e: T) {
    this.elementNotNullCheck(e);

    if (!this.root) {
      this.root = this.createNode(e);
      this.size++;
      this.afterAdd(this.root);
    } else {
      let node: Node<T> | undefined = this.root;
      let parent!: Node<T>;
      let cmp = 0;
      while (node) {
        cmp = this.compare(e, node.element);
        parent = node;
        if (cmp > 0) {
          node = node.right;
        } else if (cmp < 0) {
          node = node.left;
        } else {
          node.element = e;
          return;
        }
      }
      let newNode = this.createNode(e, parent);
      // console.log(parent)
      if (cmp > 0) {
        parent.right = newNode;
      } else {
        parent.left = newNode;
      }
      this.afterAdd(newNode);
      this.size++;
    }
  }
  protected afterAdd(node: Node<T>) {}
  protected afterRemove(node: Node<T>) {}
  protected createNode(e: T, parent?: Node<T>) {
    return new Node(e, parent);
  }

  public remove(node: Node<T>): Node<T>;
  public remove(e: T): Node<T>;
  public remove(node: Node<T> | T | undefined): Node<T> | undefined {
    if (!node) return;
    if (node instanceof Node) {
      // 度为2，怎么删除；
      this.size--;
      if (node.hasTwoChildren()) {
        let s = this.successor(node);
        if (s) {
          node.element = s.element;
          node = s;
        }
      }
      // 删除node节点, 度为0或1；
      let replacement = node.left ? node.left : node.right;
      // console.log(replacement?.element);
      if (replacement) {
        // 更改parent
        replacement.parent = node.parent;
        if (node.parent) {
          if (node.parent.left === node) {
            node.parent.left = replacement;
          } else {
            node.parent.right = replacement;
          }
        } else {
          this.root = replacement;
        }
      } else {
        // 度为0的节点
        if (node.parent) {
          let parent = node.parent;
          if (parent.left === node) {
            parent.left = undefined;
          } else {
            parent.right = undefined;
          }
        } else {
          this.root = undefined;
        }
      }
      // 真正被删除的节点
      this.afterRemove(node);
    } else {
      let targeNode = this.findNode(node);
      targeNode && this.remove(targeNode);
    }
  }

  contains(e: T) {
    return !!this.findNode(e);
  }

  protected findNode(e: T) {
    let node = this.root;

    while (node) {
      let val = this.compare(e, node.element);
      if (val === 0) return node;
      if (val > 0) {
        node = node.right;
      } else if (val < 0) {
        node = node.left;
      }
    }
    return node;
  }
}
