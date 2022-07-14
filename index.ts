function twoSum(nums: number[], target: number): number[] {
    let arr = [0, 0];

    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                arr = [i, j];
            }
        }
    }

    return arr
};

console.log(twoSum([3, 3], 6));
