function largestGoodInteger(num) {
    var res = -1;
    for (var i = 2; i < num.length; i++) {
        if (num[i] === num[i - 1] && num[i] === num[i - 2]) {
            res = Math.max(Number(num[i]), res);
        }
    }
    return res === -1 ? "" : String(res).repeat(3);
}
;
console.log("largestGoodInteger", largestGoodInteger("6777133339"));
