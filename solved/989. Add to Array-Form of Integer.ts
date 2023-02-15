function addToArrayForm(num: number[], k: number): number[] {
    // let res: number[] = [],
    //     remi = 0,
    //     str = k.toString(),
    //     len: number = str.length;

    // for (let i = num.length - 1; i >= 0; i--) {
    //     const first = num[i];
    //     let sec = parseInt(str[len - 1]);

    //     let total = first + (sec || 0) + remi;

    //     remi = 0;
    //     if (total <= 9) {
    //         res.unshift(total);
    //     } else {
    //         let item = total.toString().split(""),
    //             f = parseInt(item[1]),
    //             s = parseInt(item[0]);[...(BigInt(num.join(""))+BigInt(k)).toString()]

    //         res.unshift(f);
    //         remi = s;
    //     }

    //     if (i === 0 && remi) {
    //         res.unshift(remi);
    //     }
    //     len -= 1;
    // }

    // return res;

    return (BigInt(num.join("")) + BigInt(k)).toString().split("").map(i => parseInt(i));
};

console.log("addToArrayForm", addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516));
