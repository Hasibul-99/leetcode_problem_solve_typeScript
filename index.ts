function rearrangeArray(nums: number[]): number[] {
    let pos: number[] = [],
        neg: number[] = [],
        res: number[] = [];
        
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            pos.push(nums[i]);
        } else {
            neg.push(nums[i]);
        }
    }

    for (let i = 0; i < pos.length; i++) {
        res.push(...[pos[i], neg[i]]);
    }

    return res;
};

console.log("rearrangeArray", rearrangeArray([-1,1]));
