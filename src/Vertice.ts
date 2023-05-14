import Aresta from "./Aresta";

export default class Vertice{
    private id: number;
    private adjacentes: Aresta[];
    private visitado: boolean;

    constructor(id: number){
        this.id = id;
        this.adjacentes = [];
        this.visitado = false;
    }

    get getAdjacentes(){
        return this.adjacentes;
    }

    get getId(){
        return this.id;
    }

    get getVisitado(){
        return this.visitado;
    }

    set setVisitado(valor: boolean){
        this.visitado = valor;
    }


    addAresta(origem: Vertice, destino: Vertice){
        this.adjacentes.push(new Aresta(origem, destino));
    }

    visitar(){
        this.visitado = true;
    }

    verticesVizinhos(){
        const vizinhos: Vertice[] = [];

        for(const a of this.adjacentes){
            const vizinho = a.getDestino;

            vizinhos.push(vizinho);
        }

        return vizinhos;
    }

}