var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function getConcatenation(nums) {
    return __spreadArray(__spreadArray([], nums, true), nums, true);
}
;
console.log("getConcatenation =>", getConcatenation([1, 3, 2, 1]));
