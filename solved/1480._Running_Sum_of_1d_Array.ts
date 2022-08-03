function runningSum(nums: number[]): number[] {
    let arr : number[] = [];

    for (let i = nums.length -1; i >= 0; i--) {
        let total = nums[i];

        for (let j = i-1; j >= 0; j--) {
            total = total + nums[j];
        }
        arr.push(total);
    }

    return arr.reverse();
};

console.log("runningSum", runningSum([1,2,3,4]));
