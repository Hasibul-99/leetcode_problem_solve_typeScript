function separateDigits(nums) {
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        var ele = nums[i];
        if (ele > 9) {
            var item = ele.toString();
            for (var j = 0; j < item.length; j++) {
                var n = parseInt(item[j]);
                res.push(n);
            }
        }
        else {
            res.push(ele);
        }
    }
    return res;
}
;
console.log("separateDigits", separateDigits([13, 25, 83, 77]));
