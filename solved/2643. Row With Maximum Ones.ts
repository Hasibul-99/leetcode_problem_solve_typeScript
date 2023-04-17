function rowAndMaximumOnes(mat: number[][]): number[] {
    let res : number[] = [0, 0];

    for (let i = 0; i < mat.length; i++) {
        const ele = mat[i];
        let con = ele.filter(q => q === 1).length;
        let max = Math.max(con, res[1]);

        if (max > res[1]) {
            res = [i, max]
        }
    }

    return res;
};

console.log("rowAndMaximumOnes",rowAndMaximumOnes([[0,0],[1,1],[0,0]]));
