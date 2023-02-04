function separateDigits(nums: number[]): number[] {
    let res : number[] = [];

    for (let i = 0; i < nums.length; i++) {
        const ele = nums[i];
        
        if (ele > 9) {
            let item : string = ele.toString();

            for (let j = 0; j < item.length; j++) {
                const n = parseInt(item[j]);
                res.push(n);
            }
            
        } else {
            res.push(ele);
        }
    }

    return res;
};

console.log("separateDigits", separateDigits([13,25,83,77]));
