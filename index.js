function findWinners(matches) {
    var obj = {}, res = [[], []];
    for (var i = 0; i < matches.length; i++) {
        var win = matches[i][0], loss = matches[i][1];
        obj[win] = (obj[win] || 0) + 0;
        obj[loss] = (obj[loss] || 0) + 1;
    }
    for (var property in obj) {
        if (obj[property] === 0)
            res[0].push(Number(property));
        if (obj[property] === 1)
            res[1].push(Number(property));
    }
    return res;
}
;
console.log("findWinners", findWinners([[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]));
