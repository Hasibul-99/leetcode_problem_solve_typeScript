function majorityElement(nums: number[]): number[] {
    let obj: any = {};

    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }

    let res: number[] = [];
    for (const n in obj) {
        if ((nums.length / 3) < obj[n]) {
            res.push(parseInt(n))
        }
    };

    return res;
};

console.log("majorityElement", majorityElement([3, 2, 3]));
