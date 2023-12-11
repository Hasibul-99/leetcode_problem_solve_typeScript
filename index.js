function findSpecialInteger(arr) {
    var unique = arr.filter(function (x, i, a) { return a.indexOf(x) === i; }), res = 0;
    var _loop_1 = function (i) {
        if (((arr.filter(function (a) { return a === unique[i]; }).length * 100) / arr.length) > 25) {
            res = unique[i];
            return "break";
        }
    };
    for (var i = 0; i < unique.length; i++) {
        var state_1 = _loop_1(i);
        if (state_1 === "break")
            break;
    }
    return res;
}
;
console.log("findSpecialInteger", findSpecialInteger([1, 2, 3, 3]));
