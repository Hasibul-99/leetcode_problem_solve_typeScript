function fizzBuzz(n: number): string[] {
    let srtArr: string[] = [];

    for (let i = 1; i <= n; i++) {
        if (i%3 === 0 && i%5=== 0 ) {
            srtArr.push("FizzBuzz")
        } else if (i%3 === 0) {
            srtArr.push("Fizz")
        } else if (i%5 === 0) {
            srtArr.push("Buzz")
        } else {
            srtArr.push(i.toString())
        }
    };

    return srtArr;
};

console.log("fizzBuzz,", fizzBuzz(15))
