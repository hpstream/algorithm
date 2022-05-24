import {Comparator} from "./BinaryTree";
import {BST} from "./BST";

export class AVLTree<E> extends BST<E> {
  constructor(
    comparator?: (
      newVal: number | Comparator<E>,
      oldVal: number | Comparator<E>
    ) => number
  ) {
    super(comparator);
  }
}
