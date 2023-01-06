function minimumRounds(tasks) {
    var items = {};
    var res = 0;
    for (var i = 0; i < tasks.length; i++) {
        items[tasks[i]] = (items[tasks[i]] || 0) + 1;
    }
    // console.log(items);
    for (var j in items) {
        var item = items[j];
        if (item === 1) {
            res = -1;
            break;
        }
        else {
            var ans = parseInt((item / 3).toString());
            if (item % 3 === 0) {
                res = res + item / 3;
            }
            else {
                res = res + ans + 1;
            }
        }
    }
    return res;
}
;
console.log("minimumRounds", minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4]));
