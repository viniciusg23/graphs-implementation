export default class Aresta{
    private origem: number;
    private destino: number;
    private peso: number;

    public constructor(origem: number, destino: number, peso: number){
        this.origem = origem;
        this.destino = destino;
        this.peso = peso;
    }

    get getOrigem(): number{
        return this.origem;
    }

    set setOrigem(origem: number){
        this.origem = origem;
    }

    get getDestino(): number{
        return this.destino;
    }

    set setDestino(destino: number){
        this.destino = destino;
    }

    get getPeso(): number{
        return this.peso;
    }

    set setPeso(peso: number){
        this.peso = peso;
    }

}