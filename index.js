var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function combine(n, k) {
    var res = [];
    var backtracking = function (start, arr) {
        if (arr.length === k) {
            res.push(__spreadArray([], arr, true));
            return;
        }
        if (start > n)
            return;
        arr.push(start);
        backtracking(start + 1, arr);
        arr.pop();
        backtracking(start + 1, arr);
    };
    backtracking(1, []);
    return res;
}
;
console.log("combine", combine(4, 2));
