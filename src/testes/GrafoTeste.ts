import Grafo from "../Grafo";
import Vertice from "../Vertice";

const grafo = new Grafo(13);

for(let i = 0; i < 13; i++){
    grafo.addVertece(i)
}

grafo.addAresta(0, 1, 1)
grafo.addAresta(0, 2, 1)
grafo.addAresta(0, 3, 1)
grafo.addAresta(1, 4, 1)
grafo.addAresta(1, 6, 1)
grafo.addAresta(3, 8, 1)
grafo.addAresta(3, 9, 1)
grafo.addAresta(6, 12, 1)
grafo.addAresta(7, 2, 1)
grafo.addAresta(5, 6, 1)
grafo.addAresta(5, 1, 1)
grafo.addAresta(5, 10, 1)
grafo.addAresta(5, 11, 1)



let matriz = grafo.gerarMatriz();
console.log("Matriz de Adjacencia")
imprimirMatriz(matriz);


const fechosTransitivos = grafo.fechoTransitivoWarshall(matriz);
console.log("Matriz de Fechos Transitivos - Warshall")
imprimirMatriz(fechosTransitivos);

const baseWarshall = grafo.gerarBase(fechosTransitivos);
const antiBaseWarshall = grafo.gerarAntiBase(fechosTransitivos);

console.log("Vertices da Base do Grafo a partir da matriz de Warshall");
console.log(baseWarshall);

console.log("Vertices da AntiBase do Grafo a partir da matriz de Warshall");
console.log(antiBaseWarshall);

const bfsFechosTransitivosDiretos = grafo.fechoTransitivoNaive();
console.log("Fechos Transitivos - Naive");
imprimirMatriz(bfsFechosTransitivosDiretos);


const baseNaive = grafo.gerarBase(bfsFechosTransitivosDiretos);
const antiBaseNaive = grafo.gerarAntiBase(bfsFechosTransitivosDiretos);

console.log("Vertices da Base do Grafo a partir da matriz de Naive");
console.log(baseNaive);

console.log("Vertices da AntiBase do Grafo a partir da matriz de Naive");
console.log(antiBaseNaive);





console.log("Fim.");






function imprimirMatriz(matriz: number[][]) {
    let tabela = "";
    let indice = "";

    for (let i = 0; i < matriz.length; i++) {
        tabela += `${i}\t`;
        for (let j = 0; j < matriz[i].length; j++) {
            if(i == 0){
                indice += `\t${j}`;
            }
            if (matriz[i][j] == Infinity) {
                tabela += "∞";
                tabela += "\t";
            } else if (matriz[i][j] > 0) {
                tabela += `${matriz[i][j]}`;
                tabela += "\t";
            } else {
                tabela += "0";
                tabela += "\t";
            }
        }
        tabela += "\n";
    }

    console.log(indice);
    console.log(tabela);
}
  