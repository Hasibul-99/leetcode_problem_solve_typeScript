function differenceOfSums(n: number, m: number): number {
    let res : number = 0;

    for (let i = 1; i <= n; i++) {
        if (i % m === 0) {
            res = res - i;
        } else {
            res = res + i;
        }
    }

    return res;
};

console.log('hello', differenceOfSums(5, 1));
