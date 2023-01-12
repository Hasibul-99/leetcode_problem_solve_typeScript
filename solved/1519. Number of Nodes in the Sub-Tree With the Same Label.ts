function countSubTrees(n: number, edges: number[][], labels: string): number[] {
    let adj : any = [],
        countMap = {},
        result : number[] = [];

    for (let i = 0; i < n; i++) {
        adj.push([]);
        result.push(0);
        countMap[labels[i]] = 0;
    };

    for (let j = 0; j < edges.length; j++) {
        let edge = edges[j];

        adj[edge[0]].push(edge[1]);
        adj[edge[1]].push(edge[0]);
    };

    let visited = {};

    const dfs = (node) => {
        let label = labels[node];

        console.log(label);
        
        if (visited[node]) return false;

        visited[node] = true;
        let start = countMap[label];

        for (let next of adj[node]) {
            dfs(next);
        }

        countMap[label] = 1 + countMap[label];
        result[node] = countMap[label] -start;
    };

    dfs(0);

    return result;
};

console.log("countSubTrees", countSubTrees(4, [[0,2],[0,3],[1,2]], "aeed"));
