function minCost(colors, neededTime) {
    var res = 0;
    var num = [];
    var arr = [neededTime[0]];
    for (var i = 1; i < colors.length; i++) {
        if (colors[i - 1] === colors[i]) {
            arr.push(neededTime[i]);
        }
        else {
            num.push(arr);
            arr = [neededTime[i]];
        }
    }
    num.push(arr);
    for (var i = 0; i < num.length; i++) {
        if (num[i].length > 1) {
            var maxIndex = num[i].indexOf(Math.max.apply(Math, num[i]));
            console.log("maxIndex", maxIndex);
            num[i].splice(maxIndex, 1);
            res = res + num[i].reduce(function (sum, num) { return sum + num; }, 0);
        }
    }
    return res;
}
;
console.log("minCost", minCost("aaaaaaaaaaaaa", [1, 3, 6, 5, 4, 5, 4, 4, 2, 8, 3, 10, 6, 6]));
