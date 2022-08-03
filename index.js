function strStr(haystack, needle) {
    if (haystack.includes(needle)) {
        var arr = haystack.split(needle), f = arr[0];
        return f.length;
    }
    else
        return -1;
}
;
console.log("strStr", strStr("umbrella", "laa"));
