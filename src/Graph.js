export default class Graph {
    // defining vertex array and
    // adjacent list
    numVertices;
    vertices;

    constructor(numVertices){
        this.numVertices = numVertices;
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
     */
    addAresta(v, w){
        this.vertices.get(v).push(w);
    
        //descomentar para que o grafo seja não-direcional
        this.vertices.get(w).push(v);
    }

    /**
     * Para cada vértice do grafo é impresso todos os vértices que são adjacentes a ele
     */
    printGraph(){
        const todosVertices = this.vertices.keys();
  
        for (const origem of todosVertices){
            const verticesAdjacentes = this.vertices.get(origem);

            for (const destino of verticesAdjacentes){
                console.log(`${origem} -> ${destino}`);
            }
        }
    }

    /**
     * Método para realizar uma busca em largura no grafo a partir de um vértice raiz
     * @param {*} raiz 
     */
    buscaEmLargura(raiz){
    
        // create a visited object
        const visited = {};
    
        // Create an object for queue
        const q = new Queue();
    
        // add the starting node to the queue
        visited.raiz = true;
        q.enqueue(raiz);
    
        // loop until queue is element
        while(!q.isEmpty()) {
            // get the element from the queue
            const getQueueElement = q.dequeue();
    
            // passing the current vertex to callback function
            console.log(getQueueElement);
    
            // get the adjacent list for current vertex
            const adjacentVertices = this.vertices.get(getQueueElement);
    
            // loop through the list and add the element to the
            // queue if it is not processed yet
            for (const i in adjacentVertices) {
                var neigh = adjacentVertices[i];
    
                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.enqueue(neigh);
                }
            }
        }
    }
 
    /**
     * Método responsável por chamar a função recursiva para uma busca em profundidade a partir de um vértice raiz.
     * @param {*} raiz 
     */
    buscaEmProfundidade(raiz){
        const visitados = {};
        this.buscaEmProfundidadeAux(raiz, visitados);
    }

    /**
     * Função recursiva para explorar todos os vértices adjacentes do vértice que foi passado como parâmetro
     * @param {*} raiz
     * @param {*} visitados 
     */
    buscaEmProfundidadeAux(raiz, visitados){
        visitados.vert = true;
        console.log(raiz);
    
        const vizinhos = this.vertices.get(raiz);
    
        for(const i in vizinhos) {
            const vizinho = vizinhos[i];
            if (!visitados[vizinho])
                this.buscaEmProfundidadeAux(vizinho, visitados);
        }
    }
}
