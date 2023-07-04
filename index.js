function singleNumber(nums) {
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }
    for (var property in obj) {
        if (obj[property] === 1)
            return parseInt(property);
    }
}
;
console.log("singleNumber", singleNumber([0, 1, 0, 1, 0, 1, 99]));
