function maximumCount(nums) {
    var p = 0, n = 0;
    for (var i = 0; i < nums.length; i++) {
        var e = nums[i];
        if (e > 0)
            p = p + 1;
        if (e < 0)
            n = n + 1;
    }
    return Math.max(p, n);
}
;
console.log("maximumCount", maximumCount([-2, -1, -1, 1, 2, 3]));
