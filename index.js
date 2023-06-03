function removeDuplicates(nums) {
    var res = 0;
    var n = nums[0];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[res] = nums[i];
            res++;
        }
        else {
            n = nums[i];
        }
    }
    return res;
}
;
console.log("removeDuplicates", removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
