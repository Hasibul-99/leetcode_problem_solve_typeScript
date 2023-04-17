function rowAndMaximumOnes(mat) {
    var res = [0, 0];
    for (var i = 0; i < mat.length; i++) {
        var ele = mat[i];
        var con = ele.filter(function (q) { return q === 1; }).length;
        var max = Math.max(con, res[1]);
        if (max > res[1]) {
            res = [i, max];
        }
    }
    return res;
}
;
console.log("rowAndMaximumOnes", rowAndMaximumOnes([[0, 0], [1, 1], [0, 0]]));
