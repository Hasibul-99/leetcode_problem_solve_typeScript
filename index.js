function countSeniors(details) {
    var res = 0, maxAge = 0;
    for (var i = 0; i < details.length; i++) {
        var age = parseInt(details[i].slice(11, 13));
        if (age > 60) {
            res++;
        }
    }
    return res;
}
;
console.log('====================================');
console.log("countSeniors", countSeniors(["5612624052M0130", "5378802576M6424", "5447619845F0171", "2941701174O9078"]));
console.log('====================================');
// 7868190130 M 75 22
