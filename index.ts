function topKFrequent(nums: number[], k: number): number[] {
    const res: number[] = [];
    let obj: any = {};

    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]] += 1;
        } else {
            obj[nums[i]] = 1;
        }
    }

    const sorted = Object.entries(obj).sort((a: any, b: any) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
        res.push(Number(sorted[i][0]));
    }

    return res;
    
};

console.log("containsDuplicate", topKFrequent([1,2,1,2,1,2,3,1,3,2], 2));

