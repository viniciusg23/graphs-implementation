import Grafo from "./Grafo";

console.time('tempo de execução');



const grafo = Grafo.gerarGrafoAleatorio(100000, 0.3);


// let matriz = grafo.gerarMatriz();
// imprimirMatriz(matriz);


// const fechosTransitivos = grafo.fechoTransitivoWarshall(matriz);
// imprimirMatriz(diretos);

const fechoTransitivo = grafo.fechoTransitivoBFS();



console.timeEnd('tempo de execução');
console.log("Fim.");

