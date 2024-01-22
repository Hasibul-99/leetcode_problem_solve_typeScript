function findErrorNums(nums) {
    var dup = -1, miss = -1;
    var _loop_1 = function (i) {
        var count = nums.filter(function (num) { return num === i; }).length;
        if (count === 2) {
            dup = i;
        }
        else if (count === 0) {
            miss = i;
        }
    };
    for (var i = 1; i <= nums.length; i++) {
        _loop_1(i);
    }
    return [dup, miss];
}
;
console.log("findErrorNums", findErrorNums([1, 1]));
