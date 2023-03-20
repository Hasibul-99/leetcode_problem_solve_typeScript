function isHappy(n) {
    var arr = [];
    while (n !== 1) {
        if (arr.includes(n))
            return false;
        arr.push(n);
        var srtA = n.toString().split("");
        var total = 0;
        for (var i = 0; i < srtA.length; i++) {
            total = total + Math.pow(parseInt(srtA[i]), 2);
        }
        n = total;
    }
    ;
    return true;
}
;
console.log("isHappy", isHappy(2));
