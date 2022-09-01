// 205. Isomorphic Strings
function isIsomorphic(s, t) {
    var first = s.split(''), sec = t.split('');
    var strU = first.filter(function (item, pos) {
        return first.indexOf(item) == pos;
    }), TexU = sec.filter(function (item, pos) {
        return sec.indexOf(item) == pos;
    });
    if ((strU === null || strU === void 0 ? void 0 : strU.length) === (TexU === null || TexU === void 0 ? void 0 : TexU.length))
        return true;
    else
        return false;
}
;
console.log("isIsomorphic", isIsomorphic("egg", "add"));
