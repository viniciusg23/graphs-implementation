class Vertice{
    id
    verticesAdjacentes

    constructor(id){
        this.id = id;
        this.verticesAdjacentes = [];
    }

    get getAdjacentes(){
        return this.verticesAdjacentes;
    }

    set setAdjacentes(vertice){
        this.verticesAdjacentes.push(vertice);
    }
}