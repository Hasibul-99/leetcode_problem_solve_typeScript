function majorityElement(nums) {
    var res = nums[0], obj = {}, max = 0;
    for (var i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
        max = Math.max(obj[nums[i]], max);
        var key = Object.keys(obj).find(function (key) { return obj[key] === max; }) || 0;
        res = key * 1;
    }
    return res;
}
;
console.log("majorityElement", majorityElement([2, 2, 1, 1, 1, 2, 2]));
