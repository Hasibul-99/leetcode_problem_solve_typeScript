function strStr(haystack: string, needle: string): number {

    if (haystack.includes(needle)) {
        let arr = haystack.split(needle),
            f = arr[0];

        return f.length;
    } else return -1;
};

console.log("strStr", strStr("hello", "ll"));
