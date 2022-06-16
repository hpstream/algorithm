import {ListGraph} from "./ListGraph";

function test1() {
  let graph = new ListGraph<string, number>();

  graph.addEdge("V1", "V0", 9);
  graph.addEdge("V1", "V2", 3);
  graph.addEdge("V2", "V0", 2);
  graph.addEdge("V2", "V3", 5);
  graph.addEdge("V3", "V4", 1);
  graph.addEdge("V0", "V4", 6);
  console.log(graph.verticesSize(), graph.edgesSize());

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
}

test1();
