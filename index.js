function getCommon(nums1, nums2) {
    var numsSort = nums1.sort(function (a, b) { return a - b; }), res = -1;
    console.log("numsSort", numsSort);
    var _loop_1 = function (i) {
        var ele = numsSort[i];
        console.log("ele", ele);
        var idx = nums2.findIndex(function (item) { return item === ele; });
        console.log("idx", idx);
        if (idx !== -1) {
            res = ele;
            return "break";
        }
    };
    for (var i = 0; i < numsSort.length; i++) {
        var state_1 = _loop_1(i);
        if (state_1 === "break")
            break;
    }
    return res;
}
;
console.log("getCommon", getCommon([3, 4, 5, 10, 12, 15, 16, 16, 25, 48, 51, 69, 74, 74, 78, 78, 78, 82, 82, 88], [3, 8, 9, 10, 13, 16, 24, 25, 27, 29, 34, 39, 55, 62, 70, 80, 83, 87, 92, 94]));
