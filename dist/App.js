"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Grafo_1 = __importDefault(require("./Grafo"));
console.time('tempo de execução');
const grafo = Grafo_1.default.gerarGrafoAleatorio(100000, 0.3);
// let matriz = grafo.gerarMatriz();
// imprimirMatriz(matriz);
// const fechosTransitivos = grafo.fechoTransitivoWarshall(matriz);
// imprimirMatriz(diretos);
const fechoTransitivo = grafo.fechoTransitivoBFS();
console.timeEnd('tempo de execução');
console.log("Fim.");
// function imprimirMatriz(matriz: number[][]) {
//     let tabela = "";
//     let indice = "";
//     for (let i = 0; i < matriz.length; i++) {
//         tabela += `${i}\t`;
//         for (let j = 0; j < matriz[i].length; j++) {
//             if(i == 0){
//                 indice += `\t${j}`;
//             }
//             if (matriz[i][j] == Infinity) {
//                 tabela += "∞";
//                 tabela += "\t";
//             } else if (matriz[i][j] > 0) {
//                 tabela += `${matriz[i][j]}`;
//                 tabela += "\t";
//             } else {
//                 tabela += "0";
//                 tabela += "\t";
//             }
//         }
//         tabela += "\n";
//     }
//     console.log(indice);
//     console.log(tabela);
// }
