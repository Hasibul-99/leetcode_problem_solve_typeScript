function numIdenticalPairs(nums) {
    var res = 0;
    for (var i = 0; i < nums.length; i++) {
        for (var j = nums.length; j >= 0; j--) {
            if (nums[i] === nums[j] && i < j) {
                res = res + 1;
            }
        }
    }
    return res;
}
;
console.log("numIdenticalPairs", numIdenticalPairs([1, 1, 1, 1]));
