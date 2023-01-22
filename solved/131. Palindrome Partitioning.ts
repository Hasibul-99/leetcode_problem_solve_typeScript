function partition(s: string): string[][] {
    const getDp = (s) => {
        let len = s.length,
            dp = Array(len);

        for (let i = 0; i < len; i++) {
            for (let j = 0; j <= i; j++) {
                if (!dp[j]) dp[j] = Array(len);
                dp[j][i] = (s[i] === s[j]) && (i - j <= 2 || dp[j + 1][i - 1]);
            }
        }

        return dp;
    };

    const dfs = (dp, res, now, s, index) => {
        var len = s.length;
        if (index === len) {
            res.push(Array.from(now));
            return;
        }
        for (var i = index; i < len; i++) {
            if (dp[index][i]) {
                now.push(s.substring(index, i + 1));
                dfs(dp, res, now, s, i + 1);
                now.pop();
            }
        }
    };


    let res: string[][] = [],
        now: string[] = [];

    let dp = getDp(s);

    dfs(dp, res, now, s, 0);

    console.log("dp", dp);


    return res;
};

console.log("partition", partition("aab"));
