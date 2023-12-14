<<<<<<< HEAD
function maxProduct(nums: number[]): number {
    let res: number = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            res = Math.max((nums[i]-1)*(nums[j]-1), res);
=======
function onesMinusZeros(grid: number[][]): number[][] {
    const m = grid.length;
    const n = grid[0].length;
    const res = Array.from({ length: m }, () => Array(n).fill(0));
    const onesRow = grid.map(row => row.filter(val => val === 1).length);
    const onesCol = Array.from({ length: n }, (_, j) => grid.map(row => row[j]).filter(val => val === 1).length);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res[i][j] = onesRow[i] + onesCol[j] - (m - onesRow[i]) - (n - onesCol[j]);
>>>>>>> 5711638 (2482. Difference Between Ones and Zeros in Row and Column)
        }
    }

    return res;  
};

<<<<<<< HEAD
console.log("maxProduct", maxProduct([1,5,4,5]));
=======
console.log(onesMinusZeros([[1,1,1],[1,1,1]]));
>>>>>>> 5711638 (2482. Difference Between Ones and Zeros in Row and Column)
