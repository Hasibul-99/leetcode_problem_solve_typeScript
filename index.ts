function largestAltitude(gain: number[]): number {

    let res = 0,
        start = 0;

    for (let i = 0; i < gain.length; i++) {
        const ele = start + gain[i];
        
        console.log({start, ele}, Math.max(ele, start));
        
        res = Math.max(ele, start, res)
        start = ele; 
    }


    return res > 0 ? res : 0;
};

console.log("largestAltitude", largestAltitude([52,-91,72]));
