function targetIndices(nums: number[], target: number): number[] {
    let res : number[] = [],
        len = nums.length,
        sort = nums.sort((a, b) => a-b);

    for (let i = 0; i < len; i++) {
        if (target === sort[i]) res.push(i);
    }

    return res;
};

console.log("targetIndices",targetIndices([1,2,5,2,3], 2));
