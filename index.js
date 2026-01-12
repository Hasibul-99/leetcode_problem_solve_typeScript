function topKFrequent(nums, k) {
    var res = [];
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]] += 1;
        }
        else {
            obj[nums[i]] = 1;
        }
    }
    var sorted = Object.entries(obj).sort(function (a, b) { return b[1] - a[1]; });
    for (var i = 0; i < k; i++) {
        res.push(Number(sorted[i][0]));
    }
    return res;
}
;
console.log("containsDuplicate", topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2));
