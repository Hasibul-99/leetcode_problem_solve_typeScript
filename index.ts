function numIdenticalPairs(nums: number[]): number {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length; j >= 0; j--){
            if (nums[i] === nums[j] && i <j ) {
                res = res+1;
            }
        }
    }

    return res;
};

console.log("numIdenticalPairs", numIdenticalPairs([1,1,1,1]));
