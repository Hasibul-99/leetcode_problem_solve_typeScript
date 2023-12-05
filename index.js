function singleNumber(nums) {
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }
    ;
    return Number(Object.keys(obj).find(function (k) { return obj[k] === 1; }));
}
;
console.log("singleNumber, ", singleNumber([4, 1, 2, 1, 2]));
