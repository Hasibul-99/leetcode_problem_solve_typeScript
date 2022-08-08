function singleNumber(nums) {
    var arr = [], result = nums[0];
    var _loop_1 = function (i) {
        var ele = nums[i], l = nums.filter(function (n) { return n === ele; });
        var data = {
            val: ele,
            len: l.length
        };
        arr.push(data);
    };
    for (var i = 0; i < nums.length; i++) {
        _loop_1(i);
    }
    ;
    var fin = arr.find(function (a) { return a.len === 1; });
    return fin.val;
}
;
console.log("singleNumber", singleNumber([4, 1, 2, 1, 2]));
