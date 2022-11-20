function kidsWithCandies(candies, extraCandies) {
    var max = Math.max.apply(Math, candies), result = [];
    for (var i = 0; i < candies.length; i++) {
        var can = candies[i] + extraCandies;
        var value = can >= max ? true : false;
        result.push(value);
    }
    return result;
}
;
console.log("kidsWithCandies", kidsWithCandies([2, 3, 5, 1, 3], 3));
