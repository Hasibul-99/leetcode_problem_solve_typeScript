function answerQueries(nums: number[], queries: number[]): number[] {
    let sort = nums.sort((a, b) => a - b),
        res: number[] = [];

    for (let i = 0; i < queries.length; i++) {
        let tar = queries[i],
            arr: number[] = [],
            total: number = 0;

        for (let j = 0; j < sort.length; j++) {
            total = total + sort[j];

            if (total > tar) {
                res.push(arr.length);
                break;
            } else {
                arr.push(sort[j]);

                if (sort.length-1 === j) {
                    res.push(arr.length)
                }
            }
        }
    };

    return res;
};

console.log("answerQueries", answerQueries([4, 5, 2, 1], [3, 10, 21]));
