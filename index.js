function longestPath(parent, s) {
    var len = parent.length, result = 0, graph = parent.map(function (p) { return []; });
    for (var i = 1; i < len; i++) {
        graph[parent[i]].push(i);
    }
    ;
    var longestPathDownFrom = function (node) {
        var max1 = 0, max2 = 0;
        for (var _i = 0, _a = graph[node]; _i < _a.length; _i++) {
            var sNode = _a[_i];
            var res = longestPathDownFrom(sNode);
            if (s[node] === s[sNode])
                continue;
            if (res > max1) {
                max2 = max1,
                    max1 = res;
            }
            else if (res > max2) {
                max2 = res;
            }
        }
        ;
        result = Math.max(result, 1 + max1 + max2);
        return 1 + max1;
    };
    longestPathDownFrom(0);
    return result;
}
;
console.log("longestPath", longestPath([-1, 0, 0, 0], "aabc"));
