const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    console.log(reachableNodes(input));
});

function reachableNodes(input) {

    const [N, M] = input[0].split(" ").map(Number);

    const graph = Array.from({ length: N + 1 }, () => []);

    for (let i = 1; i <= M; i++) {
        const [x, y] = input[i].split(" ").map(Number);
        graph[x].push(y);
        graph[y].push(x);
    }

    const visited = new Array(N + 1).fill(false);
    const queue = [1];
    visited[1] = true;
    let count = 0;

    while (queue.length > 0) {
        const node = queue.shift();

        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
                count++; 
            }
        }
    }

    return count;
}