function fib(n) {
    return fibReturn(n);
}
;
var fibReturn = function (n, memo) {
    if (memo === void 0) { memo = {}; }
    if (n in memo)
        return memo[n];
    if (n <= 2)
        return n;
    memo[n] = fibReturn(n - 1, { memo: memo }) + fibReturn(n - 2, memo);
    return memo[n];
};
console.log("validPath", fib(4));
