function pivotIndex(nums: number[]): number {
    let index = -1;

    for (let i = 0; i < nums.length; i++) {
        let left = nums.slice(0, i);
        let right = nums.slice(i + 1);

        console.log("arr2.splice(0,1)", {left, right});

        let leftTotal = left?.length ? left.reduce((total, val) => (total || 0) + val) : 0;
        let rightTotal = right?.length ? right.reduce((total, val) => (total || 0) + val) : 0;

        console.log({leftTotal, rightTotal});

        if (leftTotal === rightTotal) {
            index = i;
            break;
        }
    }

    return index;
};

console.log("pirvotIndex", pivotIndex([2,1,-1]));
