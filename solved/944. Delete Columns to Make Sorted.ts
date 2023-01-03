function minDeletionSize(strs: string[]): number {

    let n = strs.length,
        len = strs[0].length,
        res = 0;

    for (let j = 0; j < len; j++) {
        for (let i = 0; i < n; i++) {
            if (strs[i + 1] && strs[i][j] > strs[i +1][j]) {
                res += 1;
                break;
            }
        }
    }

    return res;
};

console.log("minDeletionSize",minDeletionSize(["cba","daf","ghi"]));
