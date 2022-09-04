function isSubsequence(s, t) {
    if (!s.length)
        return true;
    var point = 0;
    for (var i = 0; i < t.length; i++) {
        if (s[point] === t[i])
            point++;
    }
    return point === s.length;
}
;
console.log("isSubsequence", isSubsequence("abc", "ahbgdc"));
