function detectCapitalUse(word) {
    var len = word.length;
    if (len === 0)
        return false;
    return word.toUpperCase() === word || word.slice(1).toLowerCase() === word.slice(1);
}
;
console.log("detectCapitalUse", detectCapitalUse("FlaG"));
