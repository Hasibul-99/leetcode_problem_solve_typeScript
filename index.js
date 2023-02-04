function maxCount(banned, n, maxSum) {
    var arr = [];
    for (var i = 1; i <= n; i++) {
        if (!banned.includes(i)) {
            var total = arr.length ? arr.reduce(function (total, val) { return (total || 0) + val; }) : 0;
            if (total + i <= maxSum) {
                arr.push(i);
            }
        }
    }
    console.log('aa', arr);
    return arr.length;
}
;
console.log("maxCount", maxCount([11], 7, 50));
