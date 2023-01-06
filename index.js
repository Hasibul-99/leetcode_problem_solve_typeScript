function maxIceCream(costs, coins) {
    var items = costs.sort(function (a, b) { return a - b; }), res = 0;
    for (var i = 0; i < items.length; i++) {
        var price = items[i];
        if (price <= coins) {
            coins = coins - price;
            res += 1;
        }
        else {
            break;
        }
    }
    return res;
}
;
console.log("maxIceCream", maxIceCream([10, 6, 8, 7, 7, 8], 5));
