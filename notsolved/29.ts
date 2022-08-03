function divide(dividend: number, divisor: number): number {
    let a = dividend/divisor;
    // return Math.round(a);
    
    let str = a.toString(),
        b = str.split('.');

        return parseInt(b[0]);
};

console.log(divide(1, 2));
// 29. Divide Two Integers