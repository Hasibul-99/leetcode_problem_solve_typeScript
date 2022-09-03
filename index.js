// 205. Isomorphic Strings
function isIsomorphic(s, t) {
    if (s.length !== t.length)
        return false;
    var sObj = {}, tObj = {};
    for (var i = 0; i < s.length; i++) {
        if (sObj[s[i]] !== tObj[t[i]]) {
            return false;
        }
        else {
            sObj[s[i]] = i;
            tObj[t[i]] = i;
        }
        console.log({ sObj: sObj, tObj: tObj });
    }
    return true;
}
;
console.log("isIsomorphic", isIsomorphic("bbbaaaba", "aaabbbba"));
