function mergeAlternately(word1, word2) {
    var res = "", len = Math.max(word1.length, word2.length);
    for (var i = 0; i < len; i++) {
        res = res + (word1[i] || '') + (word2[i] || '');
    }
    return res;
}
;
console.log("mergeAlternately", mergeAlternately("abcd", "pq"));
