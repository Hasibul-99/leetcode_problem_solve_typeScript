function canBeIncreasing(nums) {
    var count = 0;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i - 1] >= nums[i]) {
            count += 1;
            if (i > 1 && nums[i - 2] >= nums[i]) {
                nums[i] = nums[i - 1];
            }
        }
    }
    return count <= 1 ? true : false;
}
;
console.log("canBeIncreasing", canBeIncreasing([6, 7, 2, 8, 9]));
