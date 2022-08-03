function rotate(matrix) {
    // Firstly Transpose The Matrix
    for (var i = 0; i < matrix.length; i++) {
        for (var j = i; j < matrix.length; j++) {
            var Temp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = Temp;
        }
    }
    // Secondly Make Reflected Image Of Matrix
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix.length / 2; j++) {
            var Temp = matrix[i][j];
            matrix[i][j] = matrix[i][matrix.length - j - 1];
            matrix[i][matrix.length - j - 1] = Temp;
        }
    }
    console.log("matrix", matrix);
}
;
console.log("rotate", rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
