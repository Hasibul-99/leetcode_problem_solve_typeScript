function createTargetArray(nums, index) {
    var res = [];
    for (var i = 0; i < index.length; i++) {
        var idx = index[i];
        res.splice(idx, 0, nums[i]);
    }
    return res;
}
;
console.log("createTargetArray", createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
