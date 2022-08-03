function runningSum(nums) {
    var arr = [];
    for (var i = nums.length - 1; i >= 0; i--) {
        var total = nums[i];
        for (var j = i - 1; j >= 0; j--) {
            total = total + nums[j];
        }
        arr.push(total);
    }
    return arr.reverse();
}
;
console.log("runningSum", runningSum([1, 2, 3, 4]));
