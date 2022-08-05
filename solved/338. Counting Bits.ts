function countBits(n: number): number[] {
    let arr : number[]  = [];

    for (let i = 0; i <= n; i++) {
        let bit = Number(i).toString(2);
        let sp = bit.split('');
        let total = 0;
        sp.forEach(n => {
            total += parseInt(n);
        })

        arr.push(total)
    }

    return arr;

};

console.log("removeElement", countBits(5));
// https://leetcode.com/problems/counting-bits/