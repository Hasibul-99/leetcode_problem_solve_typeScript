function maxProduct(nums) {
    var res = 0;
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            res = Math.max((nums[i] - 1) * (nums[j] - 1), res);
        }
    }
    return res;
}
;
console.log("maxProduct", maxProduct([1, 5, 4, 5]));
