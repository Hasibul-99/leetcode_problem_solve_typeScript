function buyChoco(prices, money) {
    var sort = prices.sort(function (a, b) { return a - b; });
    var totalBuy = sort[0] + sort[1];
    var mon = money - totalBuy;
    return mon < 0 ? money : mon;
}
;
console.log("buyChoco", buyChoco([3, 2, 3], 3));
