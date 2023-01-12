function countSubTrees(n, edges, labels) {
    var adj = [], countMap = {}, result = [];
    for (var i = 0; i < n; i++) {
        adj.push([]);
        result.push(0);
        countMap[labels[i]] = 0;
    }
    ;
    for (var j = 0; j < edges.length; j++) {
        var edge = edges[j];
        adj[edge[0]].push(edge[1]);
        adj[edge[1]].push(edge[0]);
    }
    ;
    var visited = {};
    var dfs = function (node) {
        var label = labels[node];
        console.log(label);
        if (visited[node])
            return false;
        visited[node] = true;
        var start = countMap[label];
        for (var _i = 0, _a = adj[node]; _i < _a.length; _i++) {
            var next = _a[_i];
            dfs(next);
        }
        countMap[label] = 1 + countMap[label];
        result[node] = countMap[label] - start;
    };
    dfs(0);
    return result;
}
;
console.log("countSubTrees", countSubTrees(4, [[0, 2], [0, 3], [1, 2]], "aeed"));
