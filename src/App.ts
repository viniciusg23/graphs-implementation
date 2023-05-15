import Grafo from "./Grafo";

console.time('tempo de execução');



const grafo = Grafo.gerarGrafoAleatorio(1000, 0.3);


let matriz = grafo.gerarMatriz();
console.log("Matriz de Adjacencia")


const fechosTransitivos = grafo.fechoTransitivoWarshall(matriz);
console.log("Matriz de Fechos Transitivos - Warshall")

const baseWarshall = grafo.gerarBase(fechosTransitivos);
const antiBaseWarshall = grafo.gerarAntiBase(fechosTransitivos);

console.log("Vertices da Base do Grafo a partir da matriz de Warshall");
console.log(baseWarshall);

console.log("Vertices da AntiBase do Grafo a partir da matriz de Warshall");
console.log(antiBaseWarshall);

const bfsFechosTransitivosDiretos = grafo.fechoTransitivoNaive();
console.log("Fechos Transitivos - Naive");


const baseNaive = grafo.gerarBase(bfsFechosTransitivosDiretos);
const antiBaseNaive = grafo.gerarAntiBase(bfsFechosTransitivosDiretos);

console.log("Vertices da Base do Grafo a partir da matriz de Naive");
console.log(baseNaive);

console.log("Vertices da AntiBase do Grafo a partir da matriz de Naive");
console.log(antiBaseNaive);





console.timeEnd('tempo de execução');
console.log("Fim.");

