function diagonalSum(mat) {
    var total = 0;
    for (var i = 0; i < mat.length; i++) {
        total += mat[i][i];
        total += mat[i][mat.length - 1 - i];
    }
    if (mat.length % 2 !== 0) {
        var x = Math.floor(mat.length / 2);
        console.log(mat[x][x]);
        total -= mat[x][x];
    }
    return total;
}
;
console.log("diagonalSum", diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
