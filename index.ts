function reverse(x: number): number {
    if (x > 2147483647 || x < -2147483648) return 0;
    
    let res = 0;

    while (x != 0) {
        let lastDigit = x % 10;
        res = res * 10 + lastDigit;
        x = parseInt((x / 10).toString());
    }

    return (res > 2147483647 || res < -2147483648) ? 0 : res;
};

console.log("reverse", reverse(1534236469));
