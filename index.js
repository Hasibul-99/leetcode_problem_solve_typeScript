function minTime(n, edges, hasApple) {
    var child = new Array(n);
    for (var i = 0; i < n; i++) {
        child[i] = new Array();
    }
    ;
    for (var _i = 0, edges_1 = edges; _i < edges_1.length; _i++) {
        var edge = edges_1[_i];
        child[edge[0]].push(edge[1]);
        child[edge[1]].push(edge[0]);
    }
    ;
    console.log("child", child);
    var res = 0;
    var dfs = function (node, parent) {
        var val = false;
        console.log("child[node]", child[node]);
        for (var _i = 0, _a = child[node]; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c === parent)
                continue;
            res++;
            var bol = dfs(c, node);
            if (bol)
                res++;
            else
                res--;
            val = val || bol;
        }
        if (hasApple[node])
            return true;
        return val;
    };
    dfs(0, null);
    return res;
}
console.log("minTime", minTime(7, [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], [false, false, true, false, true, true, false]));
