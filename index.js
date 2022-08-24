function isPowerOfThree(n) {
    if (n === 1) {
        return true;
    }
    else if (n > 1 && n % 3 === 0) {
        return isPowerOfThree(n / 3);
    }
    else {
        return false;
    }
}
;
console.log("isPowerOfThree", isPowerOfThree(0));
