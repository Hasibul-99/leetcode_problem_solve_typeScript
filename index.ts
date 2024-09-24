function minExtraChar(s: string, dictionary: string[]): number {
    let n = s.length,
        dp: number[] = Array(n + 1).fill(0).map((_, i) => i);

    for (let i = 0; i < n; i++) {
        // Check each word in the dictionary
        for (let word of dictionary) {
            let wl = word.length;
            // If the word fits in the current substring

            if (i + wl <= n && s.substring(i, i + wl) === word) {
                dp[i + wl] = Math.min(dp[i + wl], dp[i])
            }
        }

        // Increment the count of extra characters
        dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1);
    }


    return dp[n]

};

console.log("minExtraChar", minExtraChar("leetscode", ["leet", "code", "leetcode"]));
