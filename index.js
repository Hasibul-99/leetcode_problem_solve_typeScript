function lengthOfLastWord(s) {
    var trim = s.trim();
    var res = 0;
    for (var i = trim.length - 1; i >= 0; i--) {
        if (trim[i] === ' ') {
            break;
        }
        else {
            res = res + 1;
        }
    }
    return res;
}
;
console.log("lengthOfLastWord", lengthOfLastWord("   fly me   to   the moon  "));
