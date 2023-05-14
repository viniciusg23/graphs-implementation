// import Vertice from "./Vertice";
import Aresta from "./Aresta";

export default class Grafo {
    numVertices: number;
    vertices: Map<number, Array<Aresta>>

    constructor(numVertices: number){
        this.numVertices = numVertices;
        this.vertices = new Map<number, Array<Aresta>>();
    }
 
 
    /**
     * Adiciona um vértice com sua respectiva lista de vértices adjacentes ao grafo
     * @param {number} vertice 
     */
    addVertece(vertice: number): void{
        const arestas: Aresta[] = [];
        this.vertices.set(vertice, arestas);
    }

    /**
     * Adiciona uma aresta entre um vértice de origem e um vértice de destino
     * @param {number} verticeOrigem 
     * @param {number} verticeDestino
     * @param {number} peso peso da Aresta
     */
    addAresta(verticeOrigem: number, verticeDestino: number, peso: number): void{
        const vertice = this.vertices.get(verticeOrigem);

        if(vertice){
            vertice.push(new Aresta(verticeOrigem, verticeDestino, peso));
        }
    
        //descomentar para que o grafo seja não-direcional
        //Fará com que toda aresta seja craida para as duas direções entre um vértice
        //this.vertices.get(w).push(new Aresta(v, w, peso));
    }

    /**
     * Função estática para criar grafos aleatórios baseado no algoritmo de Erdos Reyni
     * @param {number} nVertices exata quantidade de vertices no grafo
     * @param {number} probabilidade valor de 0 a 1 que representa a probabilidade de se criar uma aresta a cada par de vértice
     * @returns retorna um grafo
     */
    static gerarGrafoAleatorio(nVertices: number, probabilidade: number): Grafo {
        const grafo: Grafo = new Grafo(nVertices);

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
     * Concatena cada vértice do grafo apontando para todos os vértices que são adjacentes a ele em uma string
     */
    toString(): string{
        const todosVertices = this.vertices.keys();
        let print: string = "";

        for (const origem of todosVertices){
            const verticesAdjacentes = this.vertices.get(origem);

            if(verticesAdjacentes){
                for (const aresta of verticesAdjacentes){
                    print += `${origem} ---${aresta.getPeso}---> ${aresta.getDestino}\n`;
                    // console.log(`${origem} ---${aresta.getPeso}---> ${aresta.getDestino}`);
                }
            }
            
        }

        return print;
    }

    gerarMatriz(): number[][]{
        const matriz: Array<Array<number>> = new Array(this.numVertices);
        for(let i = 0; i < this.numVertices; i++){
            matriz[i] = new Array(this.numVertices).fill(0);
        }

        const todosVertices = this.vertices.keys();
        const vertices = Array.from(todosVertices);

        for(let linha = 0; linha < this.numVertices; linha++){
            const adjacentes = this.vertices.get(vertices[linha]);

            for(let coluna = 0; coluna < this.numVertices; coluna++){
                if(linha == coluna){
                    matriz[linha][coluna] = 0;
                }
                else if(adjacentes){
                    for(const a of adjacentes){
                        if(a.getDestino == coluna){
                            matriz[linha][coluna] = 1;
                            break;
                        }
                    }
                }
            }
        }

        return matriz;

    }

    /**
     * Método para gerar uma matriz de fechos transitivos diretos de um grafo qualquer utilizando o algoritmo de warshall
     * @param matriz um grafo em forma de matriz de adjacencia
     * @returns uma matriz que representa os fechos transitivos diretos que um grafo
     */
    fechosDiretosWarshall(matriz: number[][]){
        for(let i = 0; i < this.numVertices; i++){
            matriz[i][i] = 1;
        }    
        for(let k = 0; k < this.numVertices; k++){
            for(let i = 0; i < this.numVertices; i++){
                for(let j = 0; j < this.numVertices; j++){
                    if(matriz[i][j] == 0 && matriz[i][k] == 1 && matriz[k][j] == 1){
                        matriz[i][j] = 1;
                    }
                }
            }
        }

        return matriz;
    }

    fechosIndiretosWarshall(matriz: number[][]){
        for(let i = 0; i < this.numVertices; i++){
            matriz[i][i] = 1;
        }
    
        for(let k = 0; k < this.numVertices; k++){
            for(let i = 0; i < this.numVertices; i++){
                for(let j = 0; j < this.numVertices; j++){
                    if(matriz[i][j] == 0 && matriz[k][j] == 1 && matriz[i][k] == 1){
                        matriz[i][j] = 1;
                    }
                }
            }
        }
    
        return matriz;
    }
    
}
