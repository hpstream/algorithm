## 跳表 (SkipList)

跳表，又叫做跳跃表，跳跃表，在有序链表的基础上增加了“跳跃”的功能
设计初衷是为了取代平衡树（比如红黑树）

- Redis的SortedSet,LevelDB中的MemTable都用到了跳表
  - Redis,LevelDB都是著名的key-value数据库

- 对比平衡树
  - 跳表的实现和维护会更加简单
  - 跳表的搜索，删除，添加的平均时间复杂度是O(logn)

