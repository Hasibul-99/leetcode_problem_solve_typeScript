function letterCombinations(digits) {
    if (digits.length === 0) {
        return [];
    }
    var mapping = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };
    var res = mapping[digits[0]];
    for (var i = 1; i < digits.length; i++) {
        var temp = [];
        for (var j = 0; j < res.length; j++) {
            for (var _i = 0, _a = mapping[digits[i]]; _i < _a.length; _i++) {
                var letter = _a[_i];
                temp.push(res[j].concat(letter));
            }
        }
        res = temp;
    }
    return res;
}
;
console.log("letterCombinations", letterCombinations("23"));
