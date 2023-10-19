function backspaceCompare(s, t) {
    var st1 = "", st2 = "";
    for (var i = 0; i < Math.max(s.length, t.length); i++) {
        if (s[i] === "#") {
            st1 = st1.slice(0, -1);
        }
        else {
            st1 = st1 + (s[i] || '');
        }
        if (t[i] === "#") {
            st2 = st2.slice(0, -1);
        }
        else {
            st2 = st2 + (t[i] || '');
        }
    }
    return st1 === st2;
}
;
console.log("backspaceCompare", backspaceCompare("xywrrmp", "xywrrmu#p"));
