function minExtraChar(s, dictionary) {
    var n = s.length, dp = Array(n + 1).fill(0).map(function (_, i) { return i; });
    for (var i = 0; i < n; i++) {
        // Check each word in the dictionary
        for (var _i = 0, dictionary_1 = dictionary; _i < dictionary_1.length; _i++) {
            var word = dictionary_1[_i];
            var wl = word.length;
            // If the word fits in the current substring
            if (i + wl <= n && s.substring(i, i + wl) === word) {
                dp[i + wl] = Math.min(dp[i + wl], dp[i]);
            }
        }
        // Increment the count of extra characters
        dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1);
    }
    return dp[n];
}
;
console.log("minExtraChar", minExtraChar("leetscode", ["leet", "code", "leetcode"]));
