function majorityElement(nums: number[]): number {
    let res : any = nums[0],
        obj : any = {},
        max: number = 0;

    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
        max = Math.max(obj[nums[i]], max);

        let key : any = Object.keys(obj).find(key => obj[key] === max) || 0;
        res =  key *1
    }
    
    return res;
};

console.log("majorityElement", majorityElement([2,2,1,1,1,2,2]));
