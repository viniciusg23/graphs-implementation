"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Aresta {
    constructor(origem, destino, peso) {
        this.origem = origem;
        this.destino = destino;
        this.peso = 0;
    }
    get getOrigem() {
        return this.origem;
    }
    set setOrigem(origem) {
        this.origem = origem;
    }
    get getDestino() {
        return this.destino;
    }
    set setDestino(destino) {
        this.destino = destino;
    }
    get getPeso() {
        return this.peso;
    }
    set setPeso(peso) {
        this.peso = peso;
    }
    idDestino() {
        return this.destino.getId;
    }
}
exports.default = Aresta;
