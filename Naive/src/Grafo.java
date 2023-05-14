import java.text.DecimalFormat;
import java.util.*;

public class Grafo {

    private Integer base;
    private Integer antibase;
    private int numVertices;
    private Map<Integer, List<Aresta>> vertices;
    public Grafo(int numVertices){
        this.numVertices = numVertices;
        this.vertices = new HashMap<Integer, List<Aresta>>();

    }

    public Integer getBase() {
        return base;
    }

    public Integer getAntibase() {
        return antibase;
    }

    public void addVertice(Vertice vertice){
        vertices.put(vertice.getId(), new ArrayList<>());
    }

    public void addAresta(Vertice verticeOrigem, Vertice verticeDestino,double peso) {
        List<Aresta> arestas = this.vertices.get(verticeOrigem.getId());
        if (arestas == null) {
            arestas = new ArrayList<>();
            this.vertices.put(verticeOrigem.getId(), arestas);
        }
        arestas.add(new Aresta(verticeOrigem, verticeDestino,peso));
    }



    public static Grafo gerarGrafoAleatorio(int nVertices, double probabilidade) {
        Grafo grafo = new Grafo(nVertices);

        for (int i = 0; i < nVertices; i++) {
            grafo.addVertice(new Vertice(i));
        }

        // Adicionar arestas aleatoriamente
        for (int i = 0; i < nVertices; i++) {
            for (int j = i + 1; j < nVertices; j++) {
                if(Math.random() < probabilidade){
                    double peso = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
                    grafo.addAresta(new Vertice(i), new Vertice(j),peso);
                }
            }
        }

        return grafo;
    }

    public void printGrafo(){
        for (Integer origem : vertices.keySet()){
            List<Aresta> arestas = vertices.get(origem);

            for (Aresta aresta : arestas){
                DecimalFormat df = new DecimalFormat("#.##");
                System.out.println(origem + " -----"+ df.format(aresta.getPeso())  + " -----> " + aresta.getDestino().getId() );

            }
        }
    }

    public List<Integer> bfs(Vertice origem) {
        List<Integer> visitados = new ArrayList<>();
        Queue<Vertice> fila = new LinkedList<>();

        fila.add(origem);
        visitados.add(origem.getId());

        while (!fila.isEmpty()) {
            Vertice atual = fila.poll();
            List<Aresta> vizinhos = this.vertices.get(atual.getId());
            if (vizinhos == null) {
                continue;
            }
            for (Aresta adjacente : vizinhos) {
                int idAdjacente = adjacente.destino.getId();
                if (!visitados.contains(idAdjacente)) {
                    fila.add(adjacente.destino);
                    visitados.add(idAdjacente);
                }
            }

        }
        return visitados;
    }


    public List<Integer> encontrarBase() {
        int maiorFechoTransitivo = -1;
        List<Integer> bases = new ArrayList<>();

        for (int i = 0; i < numVertices; i++) {
            List<Integer> fechoTransitivo = bfs(new Vertice(i));
            int tamanhoFechoTransitivo = fechoTransitivo.size();
            if (tamanhoFechoTransitivo > maiorFechoTransitivo) {
                bases.clear();
                bases.add(i);
                maiorFechoTransitivo = tamanhoFechoTransitivo;
            } else if (tamanhoFechoTransitivo == maiorFechoTransitivo) {
                bases.add(i);
            }
        }

        return bases;
    }


    public List<Integer> encontrarAntiBase() {
        int menorFechoTransitivo = Integer.MAX_VALUE;
        int indiceBase = -1;
        List<Integer> antibase = new ArrayList<>();

        for (int i = 0; i < numVertices; i++) {
            List<Integer> fechoTransitivo = bfs(new Vertice(i));
            int tamanhoFechoTransitivo = fechoTransitivo.size();

            if (tamanhoFechoTransitivo < menorFechoTransitivo) {
                menorFechoTransitivo = tamanhoFechoTransitivo;
                indiceBase = i;
                antibase.clear();
                antibase.add(i);
            } else if (tamanhoFechoTransitivo == 1) {
                antibase.add(i);
            }
        }

        return antibase;
    }





    public List<Integer> transitivoInverso(Vertice origem) {
        List<Integer> visitados = new ArrayList<>();
        Stack<Vertice> pilha = new Stack<>();
        Map<Integer, List<Aresta>> arestasInvertidas = inverterArestas();

        pilha.add(origem);
        visitados.add(origem.getId());

        while (!pilha.isEmpty()) {
            Vertice atual = pilha.pop();
            List<Aresta> vizinhos = arestasInvertidas.get(atual.getId());
            if (vizinhos == null) {
                continue;
            }
            for (Aresta adjacente : vizinhos) {
                int idAdjacente = adjacente.destino.getId();
                if (!visitados.contains(idAdjacente)) {
                    pilha.push(adjacente.destino);
                    visitados.add(idAdjacente);
                }
            }
        }

        return visitados;
    }

    private Map<Integer, List<Aresta>> inverterArestas() {
        Map<Integer, List<Aresta>> arestasInvertidas = new HashMap<>();
        for (Integer origem : vertices.keySet()) {
            List<Aresta> arestas = vertices.get(origem);
            for (Aresta aresta : arestas) {
                int destino = aresta.destino.getId();
                List<Aresta> arestasDestino = arestasInvertidas.get(destino);
                if (arestasDestino == null) {
                    arestasDestino = new ArrayList<>();
                    arestasInvertidas.put(destino, arestasDestino);
                }
                arestasDestino.add(new Aresta(aresta.destino, new Vertice(origem), aresta.getPeso()));
            }
        }
        return arestasInvertidas;
    }




}