function removeDuplicates(nums: number[]): number {
    let res : number = 0;
    let n = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[res] = nums[i];
            res++;
        } else {   
            n = nums[i];
        }
    }

    return res;
};

console.log("removeDuplicates", removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
