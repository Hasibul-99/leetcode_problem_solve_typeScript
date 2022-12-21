function tribonacci(n) {
    var memo = new Array(n + 1);
    function tri_seq(n) {
        if (n === 0)
            return 0;
        if (n === 1)
            return 1;
        if (n === 2)
            return 1;
        if (memo[n] !== undefined)
            return memo[n];
        memo[n] = tri_seq(n - 1) + tri_seq(n - 2) + tri_seq(n - 3);
        return memo[n];
    }
    return tri_seq(n);
}
;
console.log("tribonacci", tribonacci(25));
