function mySqrt(x: number): number {
    let val = Math.sqrt(x);

    return Math.floor(val)
};

console.log("removeNthFromEnd", mySqrt(8));
