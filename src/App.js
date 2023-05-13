import Graph from "./Graph.js";

// Using the above implemented graph class
var g = new Graph(6);
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
 
// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertece(vertices[i]);
}
 
// adding edges
g.addAresta('A', 'B');
g.addAresta('A', 'D');
g.addAresta('A', 'E');
g.addAresta('B', 'C');
g.addAresta('D', 'E');
g.addAresta('E', 'F');
g.addAresta('E', 'C');
g.addAresta('C', 'F');
 
// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();
console.log("----------------------------");

// g.buscaEmLargura("A");
console.log("----------------------------");

g.buscaEmProfundidade("A");