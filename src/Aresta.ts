import Vertice from "./Vertice";

export default class Aresta{
    private origem: Vertice;
    private destino: Vertice;
    private peso: number;

    public constructor(origem: Vertice, destino: Vertice, peso?: number){
        this.origem = origem;
        this.destino = destino;
        this.peso = 0;
    }

    get getOrigem(): Vertice{
        return this.origem;
    }

    set setOrigem(origem: Vertice){
        this.origem = origem;
    }

    get getDestino(): Vertice{
        return this.destino;
    }

    set setDestino(destino: Vertice){
        this.destino = destino;
    }

    get getPeso(): number{
        return this.peso;
    }

    set setPeso(peso: number){
        this.peso = peso;
    }

    idDestino(){
        return this.destino.getId;
    }

}