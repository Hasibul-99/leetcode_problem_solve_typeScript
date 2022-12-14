var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function minFallingPathSum(matrix) {
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
    var dp = Array(matrix[0].length).fill(0);
    for (var i = 0; i < matrix.length; i++) {
        var prev = __spreadArray([], dp, true);
        for (var j = 0; j < matrix[0].length; j++) {
            dp[j] = Math.min(prev[j - 1] || Infinity, prev[j], prev[j + 1] || Infinity) + matrix[i][j];
        }
    }
    return Math.min.apply(Math, dp);
}
;
console.log("minFallingPathSum", minFallingPathSum([[100, -42, -46, -41], [31, 97, 10, -10], [-58, -51, 82, 89], [51, 81, 69, -51]]));
