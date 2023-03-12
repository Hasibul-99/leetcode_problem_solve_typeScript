function minEatingSpeed(piles, h) {
    var left = 1, right = Math.max.apply(Math, piles), ans = 0;
    while (left <= right) {
        var mid = Math.floor(left + (right - left) / 2);
        var time = getTime(mid, piles);
        if (time <= h) {
            ans = mid;
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
        console.log({ left: left, right: right, ans: ans, mid: mid });
    }
    ;
    return ans;
}
;
var getTime = function (value, piles) {
    var total = 0;
    piles.forEach(function (item) {
        total = total + Math.ceil(item / value);
    });
    return total;
};
console.log("minEatingSpeed", minEatingSpeed([30, 11, 23, 4, 20], 5));
