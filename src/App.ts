import Grafo from "./Grafo";


const grafo = Grafo.gerarGrafoAleatorio(5, 0.9);

console.log(grafo.toString());

const matriz = grafo.gerarMatriz();

imprimirMatrizBooleana(matriz);


















function imprimirMatrizBooleana(matriz: number[][]) {
    let tabela = "";

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
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

    console.log(tabela);
}
  