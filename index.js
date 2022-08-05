function countBits(n) {
    var arr = [];
    var _loop_1 = function (i) {
        var bit = Number(i).toString(2);
        var sp = bit.split('');
        var total = 0;
        sp.forEach(function (n) {
            total += parseInt(n);
        });
        arr.push(total);
    };
    for (var i = 0; i <= n; i++) {
        _loop_1(i);
    }
    return arr;
}
;
console.log("removeElement", countBits(5));
// https://leetcode.com/problems/counting-bits/
