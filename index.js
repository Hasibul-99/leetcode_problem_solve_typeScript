function findDuplicates(nums) {
    var res = [], obj = {};
    for (var i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            res.push(nums[i]);
        }
        else {
            obj[nums[i]] = (obj[nums[i]] || 0) + 1;
        }
    }
    return res;
}
;
console.log("findDuplicates", findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
