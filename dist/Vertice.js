"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Aresta_1 = __importDefault(require("./Aresta"));
class Vertice {
    constructor(id) {
        this.id = id;
        this.adjacentes = [];
        this.visitado = false;
    }
    get getAdjacentes() {
        return this.adjacentes;
    }
    get getId() {
        return this.id;
    }
    get getVisitado() {
        return this.visitado;
    }
    set setVisitado(valor) {
        this.visitado = valor;
    }
    addAresta(origem, destino) {
        this.adjacentes.push(new Aresta_1.default(origem, destino));
    }
    visitar() {
        this.visitado = true;
    }
    verticesVizinhos() {
        const vizinhos = [];
        for (const a of this.adjacentes) {
            const vizinho = a.getDestino;
            vizinhos.push(vizinho);
        }
        return vizinhos;
    }
}
exports.default = Vertice;
