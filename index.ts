function findMatrix(nums: number[]): number[][] {
    let obj: any = {};

    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }

    let max = Math.max(...Object.keys( obj ).map(function ( key ) { return obj[key]; }));

    let res : number[][] = [];
    for (let i = 0; i <= max; i++) {
        let arr: number[] = [];

        for (const j in obj) {
            if (obj[j] !== 0) {
                arr.push(Number(j));
                obj[j] -= 1;
            }
        }

        if (arr.length) res.push(arr);
    }

    return res;
};

console.log("findMatrix", findMatrix([1,3,4,1,2,3,1]));
