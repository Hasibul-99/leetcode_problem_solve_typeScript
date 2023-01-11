function minTime(n: number, edges: number[][], hasApple: boolean[]): number {
    let child = new Array(n);

    for (let i = 0; i < n; i++) {
        child[i] = new Array();
    };

    for (let edge of edges) {
        child[edge[0]].push(edge[1]);
        child[edge[1]].push(edge[0]);
    };

    console.log("child",child);
    let res = 0;

    const dfs = (node, parent) => {
        let val = false;

        console.log("child[node]", child[node]);
        
        for (let c of child[node]) {
            if (c === parent) continue;
            res++;

            let bol = dfs(c, node);
            if (bol) res++;
            else res--;

            val =  val || bol;
        }

        if (hasApple[node]) return true;

        return val
    }

    dfs(0, null)

    return res;
}

console.log("minTime", minTime(7, [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], [false,false,true,false,true,true,false]));
