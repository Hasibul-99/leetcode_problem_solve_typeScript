function differenceOfSum(nums) {
    var total = nums.reduce(function (partialSum, a) { return partialSum + a; }, 0), subTotal = 0;
    var _loop_1 = function (i) {
        var ele = nums[i].toString();
        if (ele.length === 1) {
            subTotal = subTotal + parseInt(ele);
        }
        else {
            var sp = ele.split(""), to_1 = 0;
            sp.forEach(function (q) {
                to_1 = to_1 + parseInt(q);
            });
            subTotal = subTotal + to_1;
        }
    };
    for (var i = 0; i < nums.length; i++) {
        _loop_1(i);
    }
    return (total - subTotal) || 0;
}
;
console.log("differenceOfSum", differenceOfSum([1, 15, 6, 3]));
