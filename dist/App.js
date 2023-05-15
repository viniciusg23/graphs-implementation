"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Grafo_1 = __importDefault(require("./Grafo"));
console.time('tempo de execução');
const grafo = Grafo_1.default.gerarGrafoAleatorio(1000, 0.3);
// let matriz = grafo.gerarMatriz();
// imprimirMatriz(matriz);
// const fechosTransitivos = grafo.fechoTransitivoWarshall(matriz);
// imprimirMatriz(diretos);
const fechoTransitivo = grafo.fechoTransitivoBFS();
console.timeEnd('tempo de execução');
console.log("Fim.");
