function singleNumber(nums: number[]): number {
    let obj: object = {}

    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }

    for (const property in obj) {
        if (obj[property] === 1) return parseInt(property)
    }
};

console.log("singleNumber", singleNumber([0, 1, 0, 1, 0, 1, 99]));
