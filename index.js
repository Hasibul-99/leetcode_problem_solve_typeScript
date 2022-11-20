function numIdenticalPairs(nums) {
    var arr = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && i < j) {
                arr.push({ i: nums[i], j: nums[j] });
            }
        }
    }
    return arr.length;
}
;
console.log("numIdenticalPairs", numIdenticalPairs([1, 2, 3, 1, 1, 3]));
