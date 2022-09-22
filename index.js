function reverseWords(s) {
    var arr = s.split(' ');
    var text = '';
    arr.forEach(function (a, i) {
        text = text + a.split("").reverse().join("") + "".concat(i === arr.length - 1 ? '' : ' ');
    });
    return text;
}
;
console.log("reverseWords", reverseWords("Let's take LeetCode contest"));
