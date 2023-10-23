function isPowerOfTwo(n: number): boolean {
    let i = 1;

    while (i < n) {
        i = i * 2
    }
    console.log(i);
    
    return i === n;
};

console.log("isPowerOfTwo", isPowerOfTwo(159));
