function rotate(nums, k) {
    for (var i = 0; i < k; i++) {
        var lasNam = nums.pop() || 0;
        nums.unshift(lasNam);
    }
}
;
console.log("rotate", rotate([1, 2, 3, 4, 5, 6, 7], 3));
