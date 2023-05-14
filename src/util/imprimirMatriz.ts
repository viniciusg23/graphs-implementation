export function imprimirMatriz(matriz: number[][]) {
    let tabela = "";
    let indice = "";

    for (let i = 0; i < matriz.length; i++) {
        tabela += `${i}\t`;
        for (let j = 0; j < matriz[i].length; j++) {
            if(i == 0){
                indice += `\t${j}`;
            }
            if (matriz[i][j] == Infinity) {
                tabela += "∞";
                tabela += "\t";
            } else if (matriz[i][j] > 0) {
                tabela += `${matriz[i][j]}`;
                tabela += "\t";
            } else {
                tabela += "0";
                tabela += "\t";
            }
        }
        tabela += "\n";
    }

    console.log(indice);
    console.log(tabela);
}
