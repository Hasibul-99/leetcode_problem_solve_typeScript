function findMatrix(nums) {
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }
    var max = Math.max.apply(Math, Object.keys(obj).map(function (key) { return obj[key]; }));
    var res = [];
    for (var i = 0; i <= max; i++) {
        var arr = [];
        for (var j in obj) {
            if (obj[j] !== 0) {
                arr.push(Number(j));
                obj[j] -= 1;
            }
        }
        if (arr.length)
            res.push(arr);
    }
    return res;
}
;
console.log("findMatrix", findMatrix([1, 3, 4, 1, 2, 3, 1]));
