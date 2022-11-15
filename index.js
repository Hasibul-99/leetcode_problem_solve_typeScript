function reverseWords(s) {
    var str = "";
    if (s) {
        var q_1 = s.trim().split(" ").reverse(); //.join("");
        q_1.forEach(function (item, index) {
            if (item) {
                str = str + item + "".concat((q_1.length !== index + 1) ? ' ' : '');
            }
        });
    }
    return str;
}
;
console.log("reverseWords =>", reverseWords("a good   example"));
