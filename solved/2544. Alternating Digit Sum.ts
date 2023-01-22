function alternateDigitSum(n: number): number {
    let s: string[] = n.toString().split(""),
        res = 0;

    for (let i = 0; i < s.length; i++) {
        const ele = parseInt(s[i]);
        
        if (i % 2 === 0) {
            res = res + ele;
        } else {
            res = res + (-ele);
        }
    }

    return res;
};

console.log("alternateDigitSum", alternateDigitSum(886996));
