import Grafo from "../Grafo";

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
imprimirMatriz(matriz);


// const bfs = grafo.bfs(grafo.localizarVertice(0));
// console.log(bfs);

// const bfsFechosTransitivos = grafo.fechoTransitivoBFS();
// console.log(bfsFechosTransitivos);

// grafo.fechoTransitivoBFS();


// const inversos = grafo.fechoTransitivoWarshall(matriz);
// imprimirMatriz(inversos);





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
  