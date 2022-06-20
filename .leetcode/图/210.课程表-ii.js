/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
class Vertex {
  // value!: V;
  inEdges = new Set();
  outEdges = new Set();

  constructor(value) {
    this.value = value;
  }


}
// 边
class Edge {
  constructor(
    from,
    to,
    weight
  ) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }

}

function isSameEdge(edge1, edge2) {
  // 判断是不是同一条边
  return edge1.from === edge2.from && edge1.to === edge2.to;
}

class ListGraph {
  vertices = new Map();
  edges = new Set();

  // 添加一个点
  addVertex(v) {
    if (this.vertices.has(v)) return;
    this.vertices.set(v, new Vertex(v));
  }
  addEdge(from, to, weight) {

    // 看看from点在不，不再创建一个新点
    let fromVertex = this.vertices.get(from);
    if (!fromVertex) {
      fromVertex = new Vertex(from);
      this.vertices.set(from, fromVertex);
    }
    // 看看to点在不，不再创建一个新点
    let toVertex = this.vertices.get(to);
    if (!toVertex) {
      toVertex = new Vertex(to);
      this.vertices.set(to, toVertex);
    }
    let edge = new Edge(fromVertex, toVertex, weight);

    let keys = fromVertex.outEdges.keys();
    for (let item of keys) {
      if (isSameEdge(item, edge)) {
        fromVertex.outEdges.delete(item);
        toVertex.inEdges.delete(item);
        this.edges.delete(item);
        break;
      }
    }

    fromVertex.outEdges.add(edge);
    toVertex.inEdges.add(edge);
    this.edges.add(edge);
  }
  //拓扑排序
  topologicalSort() {
    let list = [];
    let queue = [];
    let ins = new Map();
    // 初始化(将度为0的节点都放入队列)
    this.vertices.forEach((vertex) => {
      if (vertex.inEdges.size == 0) {
        queue.push(vertex);
      } else {
        ins.set(vertex, vertex.inEdges.size);
      }
    });
    while (queue.length > 0) {
      let vertex = queue.shift();

      if (vertex) {
        list.push(vertex.value);
        vertex.outEdges.forEach((edge) => {

          let toIn = ins.get(edge.to) - 1;
          ins.set(edge.to, toIn);
          if (toIn === 0) {
            queue.push(edge.to);
          }
        });
      }
    }
    for (const value of ins.values()) {
      if (value !== 0) {
        return [];
      }
    }


    return list;
  }
}
var findOrder = function (numCourses, prerequisites) {
  if (prerequisites.length == 0) {
    let res = [];
    for (let i = 0; i < numCourses; i++) {
      res.push(i)
    }
    return res;
  }
  let graph = new ListGraph();
  for (let i = 0; i < prerequisites.length; i++) {
    let edge = prerequisites[i];
    graph.addEdge(edge[1], edge[0]);
  }


  let res = graph.topologicalSort();




  // console.log(res)
  if (res.length == 0) {
    return res;
  }


  for (let i = 0; i < numCourses; i++) {
    if (res.indexOf(i) === -1) {
      res.unshift(i)
    }
  }
  return res
};
// 2\n[[0,1]]
// 4\n[[1,0],[2,0],[3,1],[3,2]]
// 3\n[[1,0],[0,2],[2,1]]
// 3\n[[1,0],[1,2],[0,1]]
// 4\n[[2,0],[1,0],[3,1],[3,2],[1,3]]
// 7\n[[1,0],[0,3],[0,2],[3,2],[2,5],[4,5],[5,6],[2,4]]
// @lc code=end