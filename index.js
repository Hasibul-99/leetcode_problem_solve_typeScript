function alternateDigitSum(n) {
    var s = n.toString().split(""), res = 0;
    for (var i = 0; i < s.length; i++) {
        var ele = parseInt(s[i]);
        if (i % 2 === 0) {
            res = res + ele;
        }
        else {
            res = res + (-ele);
        }
    }
    return res;
}
;
console.log("alternateDigitSum", alternateDigitSum(886996));
