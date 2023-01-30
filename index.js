function intersection(nums) {
    var res = nums[0];
    if (nums.length > 1) {
        var _loop_1 = function (i) {
            var ele = nums[i];
            res = res.filter(function (value) { return ele.includes(value); });
        };
        for (var i = 1; i < nums.length; i++) {
            _loop_1(i);
        }
    }
    return res.sort(function (a, b) { return a - b; });
}
;
console.log("intersection", intersection([[1, 2, 3], [4, 5, 6]]));
