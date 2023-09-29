function isMonotonic(nums) {
    var increasing = 1, decreasing = 1;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i - 1] >= nums[i]) {
            increasing++;
        }
        if (nums[i - 1] <= nums[i]) {
            decreasing++;
        }
    }
    if (increasing === nums.length || decreasing === nums.length)
        return true;
    else
        return false;
}
;
console.log("isMonotonic", isMonotonic([1, 3, 2]));
