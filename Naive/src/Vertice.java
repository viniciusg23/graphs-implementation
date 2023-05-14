import java.util.ArrayList;
import java.util.List;

public class Vertice {
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



}
