function targetIndices(nums, target) {
    var res = [], len = nums.length, sort = nums.sort(function (a, b) { return a - b; });
    for (var i = 0; i < len; i++) {
        if (target === sort[i])
            res.push(i);
    }
    return res;
}
;
console.log("targetIndices", targetIndices([1, 2, 5, 2, 3], 2));
