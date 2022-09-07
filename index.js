function longestPalindrome(s) {
    if (!(s === null || s === void 0 ? void 0 : s.length))
        return 0;
    var counts = {}, total = 0, odds = [];
    for (var i = 0; i < s.length; i++) {
        var ele = s[i];
        if (counts[ele]) {
            counts[ele] += 1;
        }
        else {
            counts[ele] = 1;
        }
    }
    ;
    console.log("counts", counts);
    for (var _i = 0, _a = Object.keys(counts); _i < _a.length; _i++) {
        var key = _a[_i];
        if ((counts[key] % 2) === 0) {
            total = total + (counts[key]);
        }
        else {
            var data = {
                key: key,
                val: counts[key]
            };
            odds.push(counts[key]);
        }
    }
    console.log("oddCounts", odds);
    var maximum = Math.max.apply(Math, odds);
    var minimum = Math.min.apply(Math, odds);
    console.log("maximum", maximum);
    console.log("minimum", minimum);
    var counter = true;
    odds.forEach(function (odd) {
        if (minimum === 1) {
            if (odd === 1) {
                if (counter) {
                    total = total + 1;
                    counter = false;
                }
            }
            else {
                total = total + (odd - 1);
            }
        }
        else {
            if (odd === maximum && counter) {
                total = total + maximum;
                counter = false;
            }
            else {
                total = total + (odd - 1);
            }
        }
    });
    return total;
}
;
console.log("longestPalindrome", longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
