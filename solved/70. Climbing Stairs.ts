function climbStairs(n: number): number {
    console.log("fibReturn(n-1)", fibReturn(n-1));
    console.log("fibReturn(n-2)", fibReturn(n-2));
    
    return (fibReturn(n-1) || 1) + (fibReturn(n-2) || 1);
};

const fibReturn = (n, memo = {}) => {
    if (n in memo) return memo[n];

    if (n <= 2) return n;
    memo[n] = fibReturn(n-1, memo) + fibReturn(n-2, memo);

    return memo[n];
};

console.log("validPath", climbStairs(2));
