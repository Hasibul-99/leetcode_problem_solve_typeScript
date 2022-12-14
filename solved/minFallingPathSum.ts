function minFallingPathSum(matrix: number[][]): number {
    // const m = matrix.length,
    //     n = matrix[0].length,
    //     dp = Array(n).fill(0);


    // console.log("dp",dp);
    
    // for (let i = 0; i < m; i++) {
    //     let prev = [...dp]
    //     for (let j = 0; j < n; j++) {
    //         dp[j] = Math.min(prev[j - 1] || Infinity, prev[j], prev[j + 1] || Infinity) +
    //             matrix[i][j]
    //     }
    // }
    // return Math.min(...dp)


    const dp : number[] = Array(matrix[0].length).fill(0);

    for (let i = 0; i < matrix.length; i++) {
        let prev = [...dp];

        for (let j = 0; j < matrix[0].length; j++) {
            dp[j] = Math.min(prev[j - 1] || Infinity, prev[j], prev[j + 1] || Infinity) + matrix[i][j];
        }
    }

    return Math.min(...dp)
};

console.log("minFallingPathSum", minFallingPathSum([[100,-42,-46,-41],[31,97,10,-10],[-58,-51,82,89],[51,81,69,-51]]));
