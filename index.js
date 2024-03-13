function pivotInteger(n) {
    var getSum = function (x) {
        return (x * (x + 1)) / 2;
    };
    var ans = -1;
    for (var i = 1; i <= n; i++) {
        var sum1 = getSum(i);
        var sum2 = getSum(n) - getSum(i - 1);
        if (sum1 === sum2) {
            ans = i;
            break;
        }
    }
    return ans;
}
;
console.log("pivotInteger", pivotInteger(8));
