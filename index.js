function repeatedCharacter(s) {
    if (s.length === 1)
        return s;
    var result = '';
    var arr = [];
    var _loop_1 = function (i) {
        var index = arr.findIndex(function (e) { return e === s[i]; });
        if (index === -1) {
            arr.push(s[i]);
        }
        else {
            result = s[i];
            return "break";
        }
    };
    for (var i = 0; i < s.length; i++) {
        var state_1 = _loop_1(i);
        if (state_1 === "break")
            break;
    }
    return result;
}
;
console.log("repeatedCharacter", repeatedCharacter("abcdd"));
