function longestCommonPrefix(strs) {
    if (strs.length === 1)
        return strs[0];
    var result = "";
    var ss = strs.reduce(function (a, b) { return a.length <= b.length ? a : b; });
    strs.splice(strs.findIndex(function (s) { return s === ss; }), 1);
    var text = ss;
    while (text) {
        for (var i = 0; i < strs.length; i++) {
            if (!strs[i].startsWith(text)) {
                text = text.slice(0, text.length - 1);
                break;
            }
            if (i === strs.length - 1) {
                result = text;
                text = "";
            }
        }
    }
    return result;
}
;
console.log("longestCommonPrefix", longestCommonPrefix(["reflower", "flow", "flight"]));
