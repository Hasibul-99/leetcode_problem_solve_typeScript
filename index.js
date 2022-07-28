function isAnagram(s, t) {
    if ((s === null || s === void 0 ? void 0 : s.length) !== (t === null || t === void 0 ? void 0 : t.length))
        return false;
    var a = s.split("").sort(), b = t.split("").sort();
    var result = true;
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            result = false;
            break;
        }
    }
    return result;
}
;
console.log(isAnagram("anagran", "nagaram"));
