function findJudge(n, trust) {
    var _a, _b;
    if (!trust.length) {
        if (n === 1)
            return 1;
        else
            return -1;
    }
    ;
    var list = {};
    for (var i = 0; i < trust.length; i++) {
        var ele = trust[i];
        if (list[ele[0]]) {
            list[ele[0]]["start"] = (list[ele[0]] && list[ele[0]].start ? list[ele[0]].start : 0) + 1;
        }
        else {
            list[ele[0]] = {
                start: (list[ele[0]] && list[ele[0]].start ? list[ele[0]].start : 0) + 1
            };
        }
        if (list[ele[1]]) {
            list[ele[1]]["end"] = (list[ele[1]]["end"] || 0) + 1;
        }
        else {
            list[ele[1]] = {
                end: (list[ele[1]] && list[ele[1]]["end"] ? list[ele[1]]["end"] : 0) + 1
            };
        }
    }
    ;
    console.log("list", list);
    var maxContent = {
        key: 0,
        val: {
            start: 0,
            end: 0
        }
    };
    for (var i in list) {
        // console.log(`${i}: ${list[i].end}`);
        if (list[i].end >= maxContent.val.end) {
            maxContent = {
                key: parseInt(i),
                val: list[i]
            };
        }
    }
    console.log("maxContent", maxContent);
    return ((_a = maxContent === null || maxContent === void 0 ? void 0 : maxContent.val) === null || _a === void 0 ? void 0 : _a.end) === (n - 1) && !((_b = maxContent === null || maxContent === void 0 ? void 0 : maxContent.val) === null || _b === void 0 ? void 0 : _b.start) ? maxContent.key : -1;
}
;
console.log("findJudge", findJudge(2, []));
