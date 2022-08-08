function singleNumber(nums: number[]): number {
    let arr: any = [],
        result = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let ele = nums[i],
            l = nums.filter(n => n === ele);

        let data = {
            val: ele,
            len: l.length
        }

        arr.push(data);
    };

    let fin = arr.find(a => a.len === 1);
    return fin.val;
};

console.log("singleNumber", singleNumber([4,1,2,1,2]));


