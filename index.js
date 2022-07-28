function isPalindrome(x) {
    var a = x.toString(), re = a.split('').reverse().join("");
    if (a === re)
        return true;
    else
        return false;
}
;
console.log(isPalindrome(101));
