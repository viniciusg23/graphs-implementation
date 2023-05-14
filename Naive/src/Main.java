import java.util.List;
import java.util.Scanner;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Digite a quantidade de vertices que seu grafo terá (100/ 1000/ 10000/ 100000)");
        int numVertices = scan.nextInt();

        Grafo grafo = Grafo.gerarGrafoAleatorio(numVertices, 0.3);
        int menu = -1;
        while(menu == -1){
            System.out.println("1- Visualizar grafo");
            System.out.println("2- Fecho transitivo direto");
            System.out.println("3- Fecho transitivo inverso");
            System.out.println("4- Visualizar base");
            System.out.println("5- Visualizar antibase");
            System.out.println("0- Sair");
            menu = scan.nextInt();
            if(menu == 1){
                grafo.printGrafo();
                 menu = -1;
            }else if(menu ==2){
                for(int i=0;i<numVertices;i++){
                    List<Integer>  a = grafo.bfs(new Vertice(i));
                    System.out.print("Fecho transitivo direto de " + i + " : ");
                    if (a.isEmpty()) {
                        System.out.println("Não há fecho transitivo direto para este vértice.");
                    } else {
                        System.out.println(a.toString());
                    }
                }
                menu = -1;

            }else if(menu ==3){
                for(int i=0;i<numVertices;i++){
                    List<Integer>  a = grafo.transitivoInverso(new Vertice(i));
                    System.out.print("Fecho transitivo Inverso de " + i + " : ");
                    if (a.isEmpty()) {
                        System.out.println("Não há fecho transitivo inverso para este vértice.");
                    } else {
                        System.out.println(a.toString());
                    }
                }
                menu = -1;

            }else if(menu ==4){
                List<Integer> base = grafo.encontrarBase();
                System.out.print("base é [ ");
                for(Integer v : base){
                    System.out.print(v + " ");
                }
                System.out.print("]\n");

                menu = -1;
            }else if(menu ==5){

                List<Integer> antiBase = grafo.encontrarAntiBase();
                System.out.print("Anti base é [");
                for(Integer v : antiBase){
                    System.out.print(v + " ");
                }
                System.out.print("]");
                menu = -1;
            }else if( menu ==0){
                break;
            }else{
                System.out.println("Digite um numero valido");
                menu = -1;
            }
        }







    }






    }
