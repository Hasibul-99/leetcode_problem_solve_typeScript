function isValid(s) {
    var data = [
        { s: '(', n: ')' },
        { s: '{', n: '}' },
        { s: '[', n: ']' }
    ];
    var str = s.split(''), result = true;
    var _loop_1 = function (i) {
        if ((i + 1) % 2 === 0) {
            var s_1 = str[i - 1], n_1 = str[i];
            var findIdx = data.findIndex(function (item) { return item.s === s_1 && item.n === n_1; });
            if (findIdx === -1) {
                result = false;
                return "break";
            }
        }
    };
    for (var i = 0; i < str.length; i++) {
        var state_1 = _loop_1(i);
        if (state_1 === "break")
            break;
    }
    return result;
}
;
console.log("kthSmallest", isValid("(]"));
// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/submissions/
