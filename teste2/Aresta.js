export default class Aresta{
    origem
    destino
    peso

    constructor(origem, destino, peso){
        this.origem = origem;
        this.destino = destino;
        this.peso = peso;
    }

    get getOrigem(){
        return this.origem;
    }

    set setOrigem(origem){
        this.origem = origem;
    }

    get getDestino(){
        return this.destino;
    }

    set setDestino(destino){
        this.destino = destino;
    }

    get getPeso(){
        return this.peso;
    }

    set setPeso(peso){
        this.peso = peso;
    }

}