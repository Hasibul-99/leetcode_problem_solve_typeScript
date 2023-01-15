function differenceOfSum(nums: number[]): number {
    let total = nums.reduce((partialSum, a) => partialSum + a, 0),
        subTotal = 0;

    for (let i = 0; i < nums.length; i++) {
        let ele = nums[i].toString();

        if (ele.length === 1) {
            subTotal = subTotal + parseInt(ele);
        } else {
            let sp : string[] = ele.split(""),
                to = 0;

            sp.forEach(q => {
                to = to + parseInt(q);
            });
            subTotal = subTotal + to;
        }        
    }

    return (total - subTotal) || 0;
    
};

console.log("differenceOfSum",differenceOfSum([1,15,6,3]));
