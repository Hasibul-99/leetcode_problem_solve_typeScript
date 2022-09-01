function pivotIndex(nums: number[]): number {
    let index = -1;

    // for (let i = 0; i < nums.length; i++) {
    //     let left = nums.slice(0, i);
    //     let right = nums.slice(i + 1);

    //     console.log("arr2.splice(0,1)", {left, right});

    //     let leftTotal = left?.length ? left.reduce((total, val) => (total || 0) + val) : 0;
    //     let rightTotal = right?.length ? right.reduce((total, val) => (total || 0) + val) : 0;

    //     console.log({leftTotal, rightTotal});

    //     if (leftTotal === rightTotal) {
    //         index = i;
    //         break;
    //     }
    // }

    let total = nums.reduce((total, val) => (total || 0) + val);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];

        total = total - element;

        console.log({leftSum, total});

        if (leftSum === total) {
            index = i;
            break;
        }
        
        leftSum += element;
        
    }

    return index;
};

console.log("pirvotIndex", pivotIndex([1,7,3,6,5,6]));
