function maxProfit(prices) {
    var sm = 0, max = 0;
    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < prices[i + 1]) {
            if ((!sm || !(sm < prices[i])) && prices[i] !== 0) {
                sm = prices[i];
            }
        }
    }
    var index = prices.findIndex(function (e) { return e === sm; });
    if (index !== -1) {
        for (var j = index; j < prices.length; j++) {
            if (!max || prices[j] > max) {
                max = prices[j];
            }
        }
    }
    console.log("sm", sm);
    console.log("max", max);
    return max < sm ? 0 : max - sm;
}
;
console.log("maxProfit", maxProfit([3, 2, 6, 5, 0, 3]));
// 121. Best Time to Buy and Sell Stock
