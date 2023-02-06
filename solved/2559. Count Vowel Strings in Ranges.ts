function vowelStrings(words: string[], queries: number[][]): number[] {

    let arr : number[] = [];

    for (let i = 0; i < words.length; i++) {
        let ele = words[i];

        if (["a", "e", "i", "o", "u"].includes(ele[0]) && ["a", "e", "i", "o", "u"].includes(ele[ele.length -1])) {
            arr.push(1)
        } else {
            arr.push(0)
        }
    }

    let res : number[] = [];

    for (let i = 0; i < queries.length; i++) {
        const ele = queries[i];

        let total = 0;
        
        for (let j = ele[0]; j <= ele[1]; j++) {
            total = total + arr[j];
        }

        res.push(total);
    }

    return res;
};

console.log("vowelStrings", vowelStrings(["aba","bcb","ece","aa","e"], [[0,2],[1,4],[1,1]]));
