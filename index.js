function removeDuplicates(nums) {
    var res = 0, n = nums.length;
    for (var i = 0; i < n; i++) {
        if (nums[i] !== nums[res - 2]) {
            nums[res] = nums[i];
            res++;
            console.log(nums);
        }
    }
    return res;
}
;
console.log("removeDuplicates", removeDuplicates([1, 1, 1, 2, 2, 3]));
