function divide(dividend, divisor) {
    var a = dividend / divisor;
    // return Math.round(a);
    var str = a.toString(), b = str.split('.');
    return parseInt(b[0]);
}
;
console.log(divide(1, 2));
// 29. Divide Two Integers
