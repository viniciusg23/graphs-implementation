import * as readline from 'node:readline/promises';
import * as fs from 'fs';

const scan = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
});

const filePath = await scan.question("Escreva o nome do arquivo:\n");

const rl = readline.createInterface({
    input: fs.createReadStream(`files/${filePath}`)
});

let graph;
const info = {
    iterates: 0,
    startTime: 0,
    endTime: 0
};

rl.on('line', (line) => {
    const [origin, destiny] = line.trim().split(/\s+/);
    const graphInfo = `${origin} ${destiny}`;

    if(info.iterates == 0){
        graph = constructGraph(graphInfo);
        console.log(graph)
    }
    else{
        insertIntoGraph(graph, graphInfo);
    }

   
    info.iterates++;
});




rl.on('close', () => {
    process.exit(0);
});



function insertIntoGraph(graph, line){
    const aresta = line.split(" ");

    console.log(`Origem: ${aresta[0]} -> Destino: ${aresta[1]}`);
}

function constructGraph(graphInfo){
    const info = graphInfo.split(" ");


    const graph = Array(parseInt(info[0])).fill(Array(parseInt(info[1])));

    return graph;
}