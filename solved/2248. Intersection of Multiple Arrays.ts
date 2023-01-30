function intersection(nums: number[][]): number[] {
    let res : number[] = nums[0];

    if (nums.length > 1) {
        for (let i = 1; i < nums.length; i++) {
            const ele = nums[i];
            res = res.filter(value => ele.includes(value));
        }
    }

    return res.sort((a,b) => a - b);
};

console.log("intersection", intersection([[1,2,3], [4,5,6]]));
