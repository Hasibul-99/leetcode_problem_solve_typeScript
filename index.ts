function diagonalSum(mat: number[][]): number {
    let total = 0;

    for (let i = 0; i < mat.length; i++) {
        total += mat[i][i];
        total += mat[i][mat.length -1 - i];
    }

    if (mat.length%2 !== 0) {
        let x = Math.floor(mat.length/2) 
        total -= mat[x][x];
    }

    return total;
};

console.log("diagonalSum", diagonalSum([[1,2,3], [4,5,6], [7,8,9]]));
