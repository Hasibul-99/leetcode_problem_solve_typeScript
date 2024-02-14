function rearrangeArray(nums) {
    var pos = [], neg = [], res = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            pos.push(nums[i]);
        }
        else {
            neg.push(nums[i]);
        }
    }
    for (var i = 0; i < pos.length; i++) {
        res.push.apply(res, [pos[i], neg[i]]);
    }
    return res;
}
;
console.log("rearrangeArray", rearrangeArray([-1, 1]));
