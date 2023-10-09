function searchRange(nums, target) {
    var res = [-1, -1];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (res[0] === -1)
                res[0] = i;
            res[1] = i;
        }
        else if (nums[i] > target) {
            break;
        }
    }
    return res;
}
;
console.log("searchRange", searchRange([5, 7, 7, 8, 8, 10], 8));
