function differenceOfSums(n, m) {
    var res = 0;
    for (var i = 1; i <= n; i++) {
        if (i % m === 0) {
            res = res - i;
        }
        else {
            res = res + i;
        }
    }
    return res;
}
;
console.log('hello', differenceOfSums(5, 1));
