import Grafo from "./Grafo";


// const grafo = Grafo.gerarGrafoAleatorio(10000, 0.5);

// console.log(grafo.toString());

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
grafo.addAresta(7, 8, 1)
grafo.addAresta(5, 3, 1)
grafo.addAresta(5, 10, 1)
grafo.addAresta(5, 11, 1)


console.log(grafo.toString());

let matriz = grafo.gerarMatriz();
imprimirMatriz(matriz);


// const diretos = grafo.fechosDiretosWarshall(matriz);
// imprimirMatriz(diretos);

// matriz = grafo.gerarMatriz();
const inversos = grafo.fechosIndiretosWarshall(matriz);
imprimirMatriz(inversos);



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
  