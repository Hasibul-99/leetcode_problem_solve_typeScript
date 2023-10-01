function reverseWords(s) {
    console.log(s.split(' '));
    var res = '';
    s.split(' ').forEach(function (item) {
        res = res + item.split("").reverse().join('') + ' ';
    });
    return res.trim();
}
;
console.log("reverseWords", reverseWords("Let's take LeetCode contest"));
