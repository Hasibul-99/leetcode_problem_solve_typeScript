function longestPath(parent: number[], s: string): number {
    let len = parent.length,
        result = 0,
        graph : number[][] = parent.map(p => []);
        
    for (let i = 1; i < len; i++) {
        graph[parent[i]].push(i)
    };

    const longestPathDownFrom = (node) => {
        let max1 = 0,
            max2 = 0;
        
        for (let sNode of graph[node]) {
            let res = longestPathDownFrom(sNode);

            if (s[node] === s[sNode]) continue;

            if (res > max1) {
                max2 = max1,
                max1 = res;
            } else if (res > max2) {
                max2 = res;
            }
        };

        result = Math.max(result, 1 + max1 + max2);
        return  1 + max1; 
    }

    longestPathDownFrom(0);

    return result;
};


console.log("longestPath", longestPath([-1,0,0,0], "aabc"));
