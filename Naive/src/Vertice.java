import java.util.ArrayList;
import java.util.List;

public class Vertice {
    private ABB<Aresta> arestas;
    private int id;
    private boolean visitado;
    private List<Vertice> verticesAdjacentes;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Vertice(int id) {
        this.id = id;
        this.verticesAdjacentes = new ArrayList<>();
        this.visitado = false;
        this.arestas = new ABB<Aresta>();
    }

    public void visitar(){
        this.visitado = true;
    }

    public void limparVisita(){
        this.visitado = false;
    }

    public boolean visitado(){
        return this.visitado;
    }

    public Aresta[] todasAsArestas() {
        Aresta[] todasAsArestas = new Aresta[arestas.size()];
        return this.arestas.allElements(todasAsArestas);
    }
    public List<Vertice> vizinhos(){
        Aresta[] arestas = todasAsArestas();
        List<Vertice> vizinhos = new ArrayList<>();

        for (int i = 0; i < arestas.length; i++){
            vizinhos.add(arestas[i].destino());
        }

        return vizinhos;
    }






}
