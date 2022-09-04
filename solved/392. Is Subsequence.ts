function isSubsequence(s: string, t: string): boolean {

    if (!s.length) return true;

    let point = 0;

    for (let i = 0; i < t.length; i++) {
        if (s[point] === t[i]) point++;
    }

    return point === s.length;
};

console.log("isSubsequence", isSubsequence("abc", "ahbgdc"));
