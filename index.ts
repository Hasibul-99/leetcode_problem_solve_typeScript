function findSpecialInteger(arr: number[]): number {
    let unique = arr.filter((x, i, a) => a.indexOf(x) === i),
        res: number = 0; 

    for (let i = 0; i < unique.length; i++) {
        if (((arr.filter(a => a === unique[i]).length * 100) / arr.length) > 25) {
            res = unique[i];
            break;
        }
    }

    return res;
};

console.log("findSpecialInteger", findSpecialInteger([1,2,3,3]));
