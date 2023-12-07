function largestOddNumber(num: string): string {
    let oddIdx: number = -1;

    for (let i = num.length - 1; i >= 0; i--) {
        if ( Number(num[i])%2 === 1) {
            oddIdx = i;
            break;
        };
    }

    return oddIdx === -1 ? "" : num.slice(0, oddIdx + 1);
};

console.log("largestOddNumber", largestOddNumber("4206"));
