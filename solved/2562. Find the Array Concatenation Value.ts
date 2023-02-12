function findTheArrayConcVal(nums: number[]): number {
    let output = 0;
    let i = 0;
    let j = nums.length - 1;

    while (i <= j) {
        output += Number(i === j ? nums[i] : `${nums[i]}` + `${nums[j]}`);
        i++;
        j--;
    };

    return output;
};

console.log("findTheArrayConcVal", findTheArrayConcVal([7,52,2,4]));
