import {BST} from "./BST";
import {Node} from "./Node";

export class BBST<T> extends BST<T> {
  rotate(
    r: Node<T>, // 根节点
    a: Node<T> | undefined,
    b: Node<T>, // 儿
    c: Node<T> | undefined,
    d: Node<T>, // 父
    e: Node<T> | undefined,
    f: Node<T>, // 祖
    g: Node<T> | undefined
  ) {
    // 让d成为子树的根节点
    d.parent = r.parent;
    if (r.parent) {
      if (r.isLeftChild()) {
        r.parent.left = d;
      } else if (r.isRightChild()) {
        r.parent.right = d;
      }
    } else {
      this.root = d;
    }
    // a-b-c
    b.left = a;
    b.right = c;
    if (a) {
      a.parent = b;
    }
    if (c) {
      c.parent = b;
    }

    //e-f-g
    f.left = e;
    if (e) {
      e.parent = f;
    }
    f.right = g;
    if (g) {
      g.parent = f;
    }

    // b-d-f
    d.left = b;
    if (b) {
      b.parent = d;
    }
    d.right = f;
    if (f) {
      f.parent = d;
    }
  }
  protected rotateLeft(GRAND: Node<T>) {
    let grand = GRAND as Node<T>;
    let parent = grand.right as Node<T>;
    let child = parent.left;

    grand.right = child;
    parent.left = grand;

    this.afterRotate(grand, parent, child);
  }
  protected rotateRight(GRAND: Node<T>) {
    let grand = GRAND;
    let parent = grand.left as Node<T>;
    let child = parent.right;

    grand.left = child;
    parent.right = grand;
    this.afterRotate(grand, parent, child);
  }
  protected afterRotate(grand: Node<T>, parent: Node<T>, child?: Node<T>) {
    parent.parent = grand.parent;
    if (grand.parent && grand.isLeftChild()) {
      grand.parent.left = parent;
    } else if (grand.parent && grand.isRightChild()) {
      grand.parent.right = parent;
    } else {
      this.root = parent;
    }
    if (child) {
      child.parent = grand;
    }
    grand.parent = parent;
  }
}
