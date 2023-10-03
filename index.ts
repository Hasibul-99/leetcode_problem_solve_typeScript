function singleNumber(nums: number[]): number {
    let obj: any = {};

    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    };

    return Number(Object.keys(obj).find(k=>obj[k]===1));
};

console.log("singleNumber, ", singleNumber([4,1,2,1,2]));
