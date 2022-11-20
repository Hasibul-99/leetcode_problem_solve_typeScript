function smallerNumbersThanCurrent(nums) {
    var result = [];
    var _loop_1 = function (i) {
        var filter = nums.filter(function (item) { return item < nums[i]; });
        result.push(filter.length);
    };
    for (var i = 0; i < nums.length; i++) {
        _loop_1(i);
    }
    return result;
}
;
console.log("smallerNumbersThanCurrent", smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
