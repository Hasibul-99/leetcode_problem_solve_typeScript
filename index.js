function maximumWealth(accounts) {
    var max = 0;
    accounts.forEach(function (acc) {
        var amount = acc.reduce(function (total, num) { return total + num; });
        max = Math.max(max, amount);
    });
    return max;
}
;
console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
