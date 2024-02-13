function firstPalindrome(words) {
    var res = '';
    for (var i = 0; i < words.length; i++) {
        if (words[i].split('').reverse().join('') === words[i]) {
            res = words[i];
            break;
        }
    }
    return res;
}
;
console.log("firstPalindrome", firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
