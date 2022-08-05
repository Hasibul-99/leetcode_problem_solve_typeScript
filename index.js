function myAtoi(s) {
    var num = parseInt(s);
    if (Math.pow(2, 31) <= num) {
        return Math.pow(2, 31) - 1;
    }
    else if (Math.pow(-2, 31) > num) {
        return Math.pow(-2, 31);
    }
    else {
        return num ? num : 0;
    }
}
;
console.log("myAtoi", myAtoi("2147483648"));
