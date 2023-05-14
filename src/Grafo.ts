import Vertice from "./Vertice";

export default class Grafo {
    numVertices: number;
    // vertices: Map<number, Array<Aresta>>
    vertices: Vertice[];

    constructor(numVertices: number){
        this.numVertices = numVertices;
        // this.vertices = new Map<number, Array<Aresta>>();
        this.vertices = [];
    }
 
    
    localizarVertice(id: number): Vertice{
        return this.vertices[id];
    }
 

    /**
     * Adiciona um vértice com sua respectiva lista de vértices adjacentes ao grafo
     * @param {number} vertice 
     */
    addVertece(vertice: number): void{
        this.vertices.push(new Vertice(vertice));
    }

    /**
     * Adiciona uma aresta entre um vértice de origem e um vértice de destino
     * @param {number} verticeOrigem 
     * @param {number} verticeDestino
     * @param {number} peso peso da Aresta
     */
    addAresta(verticeOrigem: number, verticeDestino: number, peso: number): void{
        const origem = this.localizarVertice(verticeOrigem);
        const destino = this.localizarVertice(verticeDestino);

        origem.addAresta(origem, destino);
      
    
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
      

    

    gerarMatriz(): number[][]{
        const matriz: Array<Array<number>> = new Array(this.numVertices);
        for(let i = 0; i < this.numVertices; i++){
            matriz[i] = new Array(this.numVertices).fill(0);
        }

        for(let linha = 0; linha < this.numVertices; linha++){

            const adjacentes = this.vertices[linha].getAdjacentes;

            for(let coluna = 0; coluna < this.numVertices; coluna++){
                if(linha == coluna){
                    matriz[linha][coluna] = 0;
                }
                else{
                    for(const a of adjacentes){
                        if(a.getDestino.getId == coluna){
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
     * 
     * @param origem 
     * @returns 
     */
    bfs(origem: Vertice){
        const distancia: number[] = [];
        const arvore: Vertice[] | null[] = [];
        const fila: Vertice[] = [];

        for(let i = 0; i < this.numVertices; i++){
            this.vertices[i].setVisitado = false;
            distancia[i] = Infinity;
            arvore[i] = null
        }

        this.vertices[origem.getId].visitar();
        distancia[origem.getId] = 0;
        fila.push(this.vertices[origem.getId]);

        while(fila.length > 0){
            const v = fila.shift();
            if(v){
                const vizinhos = v.verticesVizinhos();

                for(const vizinho of vizinhos){
                    if(!vizinho.getVisitado){
                        vizinho.visitar();
                        arvore[vizinho.getId] = vizinho;
                        distancia[vizinho.getId] = distancia[v.getId] + 1;
                        fila.push(vizinho);
                    }
                }

            }
            
        }

        arvore[origem.getId] = origem;
        // console.log(arvore);
        return arvore;
    }

    /**
     * 
     * @returns 
     */
    fechoTransitivoBFS(){
        const fechosTransitivos: Array<Array<Vertice> | Array<null>>  = [];
        for(const vertice of this.vertices){
            fechosTransitivos.push(this.bfs(vertice));
        }

        return fechosTransitivos;
    }




    /**
     * ### Não recomendado para grafos acima de 3 mil vértices!
     * Método para gerar uma matriz de fechos transitivos diretos de um grafo qualquer utilizando o algoritmo de warshall. As linhas da matriz representam o fecho transitivo direto de um vértice e as colunas representam os fechos transitivos inversos
     * @param matriz um grafo em forma de matriz de adjacencia
     * @returns uma matriz que representa os fechos transitivos diretos que um grafo
     */
    fechoTransitivoWarshall(matriz: number[][]){
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




    /**
     * Concatena cada vértice do grafo apontando para todos os vértices que são adjacentes a ele em uma string
     */
    toString(): string{
        let print: string = "";

        for(let i = 0; i < this.vertices.length; i++){
            const verticesAdjacentes = this.vertices[i].getAdjacentes;

            for(const aresta of verticesAdjacentes){
                print += `${aresta.getOrigem} ---${aresta.getPeso}---> ${aresta.getDestino}\n`;
            }

        }
        
        return print;
    }
    
}
