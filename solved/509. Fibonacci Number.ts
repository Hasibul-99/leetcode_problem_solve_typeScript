function fib(n: number): number {
    return fibReturn(n);
};

const fibReturn = (n, memo = {}) => {
    if (n in memo) return memo[n];

    if (n < 2) return n;
    memo[n] = fibReturn(n-1, {memo}) + fibReturn(n-2, memo);

    return memo[n];
}
console.log("validPath", fib(4));
