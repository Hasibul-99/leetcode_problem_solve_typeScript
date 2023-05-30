var flat = function (arr, n) {
    if (n === 0)
        return arr;
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        var el = arr[i];
        if (n > 0 && Array.isArray(el)) {
            // console.log("el", flat(el, n-1));
            res.push.apply(res, flat(el, n - 1));
        }
        else {
            res.push(el);
        }
    }
    return res;
};
console.log("flat", flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2));
