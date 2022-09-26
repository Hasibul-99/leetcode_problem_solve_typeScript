var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function findMedianSortedArrays(nums1, nums2) {
    var items = __spreadArray(__spreadArray([], nums1, true), nums2, true).sort(function (a, b) { return a - b; });
    console.log("items", items);
    if (items.length % 2 === 0) {
        var floor = items[Math.floor(items.length / 2) - 1], cling = items[Math.round(items.length / 2)];
        return (floor + cling) / 2;
    }
    else {
        return items[Math.floor(items.length / 2)];
    }
}
;
console.log("findMedianSortedArrays", findMedianSortedArrays([1, 2], [3, 4]));
