// import Vertice from "./Vertice";
import Aresta from "./Aresta.js";


export default class Graph {
    numVertices;
    vertices;

    constructor(numVertices){
        this.numVertices = numVertices;
        
        //Map<Vertice, ArestasAdjacentes>
        this.vertices = new Map();
    }
 
 
    /**
     * Adiciona um vértice com sua respectiva lista de vértices adjacentes ao grafo
     * @param {*} vertice 
     */
    addVertece(vertice){
        this.vertices.set(vertice, []);
    }

    /**
     * Adiciona uma aresta entre um vértice de origem e um vértice de destino
     * @param {*} verticeOrigem 
     * @param {*} verticeDestino
     * @param {*} peso peso da Aresta
     */
    addAresta(verticeOrigem, verticeDestino, peso){
        const vertice = this.vertices.get(verticeOrigem);
        vertice.push(new Aresta(verticeOrigem, verticeDestino, peso));
    
        //descomentar para que o grafo seja não-direcional
        //Fará com que toda aresta seja craida para as duas direções entre um vértice
        //this.vertices.get(w).push(new Aresta(v, w, peso));
    }

    /**
     * Função estática para criar grafos aleatórios baseado no algoritmo de Erdos Reyni
     * @param {*} nVertices exata quantidade de vertices no grafo
     * @param {*} probabilidade valor de 0 a 1 que representa a probabilidade de se criar uma aresta a cada par de vértice
     * @returns retorna um grafo
     */
    static gerarGrafoAleatorio(nVertices, probabilidade) {
        const grafo = new Graph(nVertices);

        for (let i = 0; i < nVertices; i++) {
            grafo.addVertece(i);
        }
      
        // Adicionar arestas aleatoriamente
        for (let i = 0; i < nVertices; i++) {
            for (let j = i + 1; j < nVertices; j++) {
                if(Math.random() < probabilidade) {
                    const peso = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
                    grafo.addAresta(i, j, peso);
                }
            }
        }
      
        return grafo;
      }
      

    /**
     * Para cada vértice do grafo é impresso todos os vértices que são adjacentes a ele
     */
    printGrafo(){
        const todosVertices = this.vertices.keys();
  
        for (const origem of todosVertices){
            const verticesAdjacentes = this.vertices.get(origem);

            for (const aresta of verticesAdjacentes){
                console.log(`${origem} ---${aresta.getPeso}---> ${aresta.getDestino}`);
            }
        }
    }

    gerarMatriz(){
        
    }

    warshall(){

    }
}
