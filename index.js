function transpose(matrix) {
    var res = [];
    for (var i = 0; i < matrix[0].length; i++) {
        var arr = [];
        for (var j = 0; j < matrix.length; j++) {
            arr.push(matrix[j][i]);
        }
        res.push(arr);
    }
    return res;
}
;
console.log("transpose", transpose([[1, 2, 3], [4, 5, 6]]));
