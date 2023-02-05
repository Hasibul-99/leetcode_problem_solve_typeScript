function vowelStrings(words, queries) {
    var arr = [];
    for (var i = 0; i < words.length; i++) {
        var ele = words[i];
        if (["a", "e", "i", "o", "u"].includes(ele[0]) && ["a", "e", "i", "o", "u"].includes(ele[ele.length - 1])) {
            arr.push(1);
        }
        else {
            arr.push(0);
        }
    }
    var res = [];
    for (var i = 0; i < queries.length; i++) {
        var ele = queries[i];
        var total = 0;
        for (var j = ele[0]; j <= ele[1]; j++) {
            total = total + arr[j];
        }
        res.push(total);
    }
    return res;
}
;
console.log("vowelStrings", vowelStrings(["aba", "bcb", "ece", "aa", "e"], [[0, 2], [1, 4], [1, 1]]));
