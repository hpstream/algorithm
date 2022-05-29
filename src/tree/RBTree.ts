import {BBST} from "./BBST";
import {Comparator} from "./BinaryTree";
import {BST} from "./BST";
import {Node} from "./Node";
class RBNode<T> extends Node<T> {
  color: boolean = true;
  left?: RBNode<T>;
  right?: RBNode<T>;
  public parent?: RBNode<T>;
  constructor(element: T, parent?: RBNode<T>) {
    super(element, parent);
  }
}
export class RBTree<T> extends BBST<T> {
  static RED = true;
  static BlACK = false;
  constructor(
    comparator?: (
      newVal: number | Comparator<T>,
      oldVal: number | Comparator<T>
    ) => number
  ) {
    super(comparator);
  }
  protected afterAdd(node: Node<T>): void {
    let parent = node.parent as RBNode<T>;
    // 添加的节点是根节点，或者上溢到达了根节点
    if (!parent) {
      this.black(node);
      return;
    }
    // 如果父节点是黑色，直接返回
    if (this.isBlack(parent)) return;

    // 叔父 节点
    let uncle = parent.sibling();
    let grand = parent.parent;
    if (uncle && this.isRed(uncle)) {
      // 叔父节点是红色【B树节点上溢】
      this.black(parent);
      this.black(uncle);
      grand && this.afterAdd(this.red(grand));
      return;
    } else {
      // LL\RR
      if (parent.isLeftChild()) {
        // L

        grand && this.red(grand);
        if (node.isLeftChild()) {
          // LL
          this.black(parent);
        } else {
          // R
          this.black(node);
          parent && this.rotateLeft(parent);
        }
        grand && this.rotateRight(grand);
      } else {
        //R

        grand && this.red(grand);
        if (node.isLeftChild()) {
          // RL
          this.black(node);
          this.rotateRight(parent);
        } else {
          // RR
          this.black(parent);
        }
        grand && this.rotateLeft(grand);
      }
    }
  }
  // 染色操作
  private color(node: Node<T>, color: boolean) {
    if (!node) return node;
    (node as RBNode<T>).color = color;
    return node as RBNode<T>;
  }
  private red(node: Node<T>) {
    return this.color(node, RBTree.RED);
  }
  private black(node: Node<T>) {
    return this.color(node, RBTree.BlACK);
  }
  private isBlack(node?: Node<T>) {
    return this.colorOf(node) === RBTree.BlACK;
  }
  private isRed(node?: Node<T>) {
    return this.colorOf(node) === RBTree.RED;
  }
  protected createNode(e: T, parent?: RBNode<T>) {
    return new RBNode(e, parent);
  }

  private colorOf(node?: Node<T>) {
    // this.color  node;
    let cNode = node as RBNode<T>;
    return !node ? RBTree.BlACK : cNode.color;
  }
  protected afterRemove(node: Node<T>): void {
    let cNode = node as RBNode<T>;
    // 如果是红色节点，直接删除
    // if (this.isRed(cNode)) return;

    // 用于取代node的子节点是红色
    if (this.isRed(node)) {
      this.black(node);
      return;
    }
    // 删除的是根节点
    let parent = node.parent;
    if (!parent) return;

    // 删除的是黑色叶子节点【下溢】
    // 判断被删除的node是左还是右
    let left = parent.left === undefined || node.isLeftChild();
    let sibling = (left ? parent.right : parent.left) as Node<T>;
    if (left) {
      // 被删除的节点在左边，兄弟节点在右边
      if (this.isRed(sibling)) {
        // 处理红色
        this.black(sibling);
        this.red(parent);
        this.rotateLeft(parent);
        sibling = parent.right as Node<T>;
      }
      // 兄弟节点必然是黑色
      if (this.isBlack(sibling.left) && this.isBlack(sibling.right)) {
        // 兄弟节点没有一个红色子节点，父节点向下跟兄弟节点合并
        let parentBlack = this.isBlack(parent);
        this.black(parent);
        this.red(sibling);
        if (parentBlack) {
          this.afterRemove(parent);
        }
      } else {
        // 兄弟节点至少有一个红色子节点
        // 兄弟节点左边是黑色，兄弟进行左旋转
        if (this.isBlack(sibling.right)) {
          this.rotateRight(sibling);
          sibling = parent.right as Node<T>;
        }
        this.color(sibling, this.colorOf(parent));
        sibling.right && this.black(sibling.right);
        this.black(parent);
        this.rotateLeft(parent);
      }
    } else {
      // 被删除的节点在右边，兄弟节点在左边

      if (this.isRed(sibling)) {
        // 处理红色
        this.black(sibling);
        this.red(parent);
        this.rotateRight(parent);
        sibling = parent.left as Node<T>;
      }
      // 兄弟节点必然是黑色
      if (this.isBlack(sibling.left) && this.isBlack(sibling.right)) {
        // 兄弟节点没有一个红色子节点，父节点向下跟兄弟节点合并
        let parentBlack = this.isBlack(parent);
        this.black(parent);
        this.red(sibling);
        if (parentBlack) {
          this.afterRemove1(parent, undefined);
        }
      } else {
        // 兄弟节点至少有一个红色子节点
        // 兄弟节点左边是黑色，兄弟进行左旋转
        if (this.isBlack(sibling.left)) {
          this.rotateLeft(sibling);
          sibling = parent.left as Node<T>;
        }
        this.color(sibling, this.colorOf(parent));
        sibling.left && this.black(sibling.left);
        this.black(parent);
        this.rotateRight(parent);
      }
    }
  }
  protected afterRemove1(node: Node<T>, replacement?: Node<T>): void {
    let cNode = node as RBNode<T>;
    // 如果是红色节点，直接删除
    if (this.isRed(cNode)) return;

    // 用于取代node的子节点是红色
    if (replacement && this.isRed(replacement)) {
      this.black(replacement);
      return;
    }
    // 删除的是根节点
    let parent = node.parent;
    if (!parent) return;

    // 删除的是黑色叶子节点【下溢】
    // 判断被删除的node是左还是右
    let left = parent.left === undefined || node.isLeftChild();
    let sibling = (left ? parent.right : parent.left) as Node<T>;
    if (left) {
      // 被删除的节点在左边，兄弟节点在右边
      if (this.isRed(sibling)) {
        // 处理红色
        this.black(sibling);
        this.red(parent);
        this.rotateLeft(parent);
        sibling = parent.right as Node<T>;
      }
      // 兄弟节点必然是黑色
      if (this.isBlack(sibling.left) && this.isBlack(sibling.right)) {
        // 兄弟节点没有一个红色子节点，父节点向下跟兄弟节点合并
        let parentBlack = this.isBlack(parent);
        this.black(parent);
        this.red(sibling);
        if (parentBlack) {
          this.afterRemove(parent);
        }
      } else {
        // 兄弟节点至少有一个红色子节点
        // 兄弟节点左边是黑色，兄弟进行左旋转
        if (this.isBlack(sibling.right)) {
          this.rotateRight(sibling);
          sibling = parent.right as Node<T>;
        }
        this.color(sibling, this.colorOf(parent));
        sibling.right && this.black(sibling.right);
        this.black(parent);
        this.rotateLeft(parent);
      }
    } else {
      // 被删除的节点在右边，兄弟节点在左边

      if (this.isRed(sibling)) {
        // 处理红色
        this.black(sibling);
        this.red(parent);
        this.rotateRight(parent);
        sibling = parent.left as Node<T>;
      }
      // 兄弟节点必然是黑色
      if (this.isBlack(sibling.left) && this.isBlack(sibling.right)) {
        // 兄弟节点没有一个红色子节点，父节点向下跟兄弟节点合并
        let parentBlack = this.isBlack(parent);
        this.black(parent);
        this.red(sibling);
        if (parentBlack) {
          this.afterRemove1(parent, undefined);
        }
      } else {
        // 兄弟节点至少有一个红色子节点
        // 兄弟节点左边是黑色，兄弟进行左旋转
        if (this.isBlack(sibling.left)) {
          this.rotateLeft(sibling);
          sibling = parent.left as Node<T>;
        }
        this.color(sibling, this.colorOf(parent));
        sibling.left && this.black(sibling.left);
        this.black(parent);
        this.rotateRight(parent);
      }
    }
  }

  print(
    node: RBNode<T>,
    sb: {
      value: string;
    },
    s: string
  ) {
    if (node) {
      let n: RBNode<T> | undefined = node;
      let val = `${node.color ? "R_" : "B_"}${node.element}p_(${
        node.parent?.element
      })`;

      val = val + "\n";
      while ((n = n.parent)) {
        val = `${" ".repeat(
          `${n.element}p_(${n.parent?.element})`.length
        )}${val}`;
      }

      node.left && this.print(node.left, sb, s);
      sb.value += val;

      node.right && this.print(node.right, sb, s);
    }
  }
}
