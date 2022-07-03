## B+树
B+ 树是B树的变体，常用于数据库和操作系统的文件系统
mySql数据库的索引就是基于B+树实现的

- B+树的特点：
  - 分为内部节点（非叶子），叶子结点2中节点
  - 内部节点之存储key,不存储数据
  - 叶子节点存储key和具体的数据
  - 所有的叶子结点形成有序链表