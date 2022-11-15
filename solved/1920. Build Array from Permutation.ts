function buildArray(nums: number[]): number[] {
    let result : any = [];

    // nums.forEach((item, idx) => {
    //     result[item] = nums[idx];
    // });
    for (let i = 0; i < nums.length; i++) {
        result.push(nums[nums[i]]);
    }

    return result;
};

console.log("buildArray =>", buildArray([5,0,1,2,3,4]));