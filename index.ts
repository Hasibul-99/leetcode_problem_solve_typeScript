function findErrorNums(nums: number[]): number[] {
    let dup = -1,
        miss = -1;

    for (let i = 1; i <= nums.length; i++) {
        let count = nums.filter(num => num === i).length;

        if (count === 2) {
            dup = i;
        } else if (count === 0) {
            miss = i;
        }
    }

    return [dup, miss];
};

console.log("findErrorNums", findErrorNums([1,1]));
