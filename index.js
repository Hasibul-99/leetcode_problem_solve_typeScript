function majorityElement(nums) {
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }
    var res = [];
    for (var n in obj) {
        if ((nums.length / 3) < obj[n]) {
            res.push(parseInt(n));
        }
    }
    ;
    return res;
}
;
console.log("majorityElement", majorityElement([3, 2, 3]));
