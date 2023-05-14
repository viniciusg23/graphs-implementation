public class Aresta {
     public Vertice origem;
    public Vertice destino;



    private double peso;


    public Aresta(Vertice origem, Vertice destino,double peso) {
        this.origem = origem;
        this.destino = destino;
        this.peso =peso;
    }

    public Vertice getOrigem() {
        return this.origem;
    }

    public void setOrigem(Vertice origem) {
        this.origem = origem;
    }

    public Vertice getDestino() {
        return this.destino;
    }

    public void setDestino(Vertice destino) {
        this.destino = destino;
    }
    public double getPeso() {
        return peso;
    }
    public Vertice destino() {
        return this.destino;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }



}
