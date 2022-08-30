function runningSum(nums: number[]): number[] {
    let result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        let val = i=== 0 ? nums[i] : nums[i] + result[i -1];
        result.push(val);
    }

    return result;
};

console.log("runningSum", runningSum([3,1,2,10,1]));
