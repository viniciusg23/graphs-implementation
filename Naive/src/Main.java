import java.util.List;
import java.util.Set;

public class Main {
    public static void main(String[] args) {

        Grafo grafo = Grafo.gerarGrafoAleatorio(100, 0.3);
//        grafo.printGrafo();
        for(int i=0;i<100;i++){
            List<Integer>  joao = grafo.bfs(new Vertice(i));
            System.out.println("Fecho transitivo direto de : "+ i + " :" + "[ ");
            for(Integer a  : joao){
                System.out.print( a + " ");
            }
            System.out.println(" ] ");
        }


    }






    }
