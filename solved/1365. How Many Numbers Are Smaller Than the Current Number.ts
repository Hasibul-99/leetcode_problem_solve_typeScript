function smallerNumbersThanCurrent(nums: number[]): number[] {
    let result : number[] = [];
    
    for (let i = 0; i < nums.length; i++) {
        
        let filter = nums.filter(item => item < nums[i]);

        result.push(filter.length);
    }

    return result;
};

console.log("smallerNumbersThanCurrent", smallerNumbersThanCurrent([8,1,2,2,3]));
