import {ListGraph} from "./ListGraph";

function test1() {
  let graph = new ListGraph<string, number>();

  function print() {
    graph.vertices.forEach((vertice) => {
      console.log(`[vertices] : ${vertice.value}`);
      let str = "[inEdges]:\n";
      vertice.inEdges.forEach((edge) => {
        str += `from:${edge.from.value},to:${edge.to.value},weight:${edge.weight}\n`;
      });

      str += "[outEdges]:\n";

      vertice.outEdges.forEach((edge) => {
        str += `from:${edge.from.value},to:${edge.to.value},weight:${edge.weight}\n`;
      });
      console.log(str);
    });
    let str = "[边]\n";
    graph.edges.forEach((edge) => {
      str += `[from:${edge.from.value},to:${edge.to.value},weight:${edge.weight}]\n`;
    });
    console.log(str);
  }

  graph.addEdge("V1", "V0", 9);
  graph.addEdge("V1", "V2", 3);
  graph.addEdge("V2", "V0", 2);
  graph.addEdge("V2", "V3", 5);
  graph.addEdge("V3", "V4", 1);
  graph.addEdge("V0", "V4", 6);
  // console.log(graph.verticesSize(), graph.edgesSize());
  // print();
  // graph.removeEdge("V0", "V4");
  // console.log("========");
  // print();
  console.log("========");
  graph.removeVertex("V0");
  print();
}
function test3() {
  let graph = new ListGraph<string, number>();

  function print() {
    graph.vertices.forEach((vertice) => {
      console.log(`[vertices] : ${vertice.value}`);
      let str = "[inEdges]:\n";
      vertice.inEdges.forEach((edge) => {
        str += `from:${edge.from.value},to:${edge.to.value},weight:${edge.weight}\n`;
      });

      str += "[outEdges]:\n";

      vertice.outEdges.forEach((edge) => {
        str += `from:${edge.from.value},to:${edge.to.value},weight:${edge.weight}\n`;
      });
      console.log(str);
    });
    let str = "[边]\n";
    graph.edges.forEach((edge) => {
      str += `[from:${edge.from.value},to:${edge.to.value},weight:${edge.weight}]\n`;
    });
    console.log(str);
  }

  graph.addEdge("V0", "V1");
  graph.addEdge("V1", "V0");

  graph.addEdge("V0", "V2");
  graph.addEdge("V2", "V0");

  graph.addEdge("V0", "V3");
  graph.addEdge("V3", "V0");

  graph.addEdge("V1", "V2");
  graph.addEdge("V2", "V1");

  graph.addEdge("V2", "V3");
  graph.addEdge("V3", "V2");

  print();
}
function test4() {
  let graph = new ListGraph<string, number>();
  graph.addEdge("V1", "V0", 9);
  graph.addEdge("V1", "V2", 3);
  graph.addEdge("V2", "V0", 2);
  graph.addEdge("V2", "V3", 5);
  graph.addEdge("V3", "V4", 1);
  graph.addEdge("V0", "V4", 6);

  graph.bfs("V1", (vertex) => {
    console.log(vertex.value);
  });
}
// test1();
// test3();
test4();

function test2() {
  let map = new Set();
  map.add(1);
  map.add(2);
  map.add(3);
  map.add(4);

  for (const iterator of [...map]) {
    map.delete(iterator);
    map.add(iterator);
  }
}
// test2();
