function shuffle(nums, n) {
    var result = [];
    for (var i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[n + i]);
    }
    return result;
}
;
console.log("shuffle", shuffle([1, 1, 2, 2], 2));
