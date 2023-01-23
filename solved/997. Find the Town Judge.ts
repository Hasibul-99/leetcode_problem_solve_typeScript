function findJudge(n: number, trust: number[][]): number {
    if (!trust.length) {
        if (n=== 1) return 1;
        else return -1;
    };

    let list : any  = {};

    for (let i = 0; i < trust.length; i++) {
        const ele = trust[i];
        
        if (list[ele[0]]) {
            list[ele[0]]["start"] = (list[ele[0]] && list[ele[0]].start ? list[ele[0]].start : 0 ) + 1;
        } else {
            list[ele[0]] = {
                start: (list[ele[0]] && list[ele[0]].start ? list[ele[0]].start : 0 ) + 1
            }
        }

        if (list[ele[1]]) {
            list[ele[1]]["end"] = (list[ele[1]]["end"] || 0) + 1;
        } else {
            list[ele[1]] = {
                end: (list[ele[1]] && list[ele[1]]["end"] ? list[ele[1]]["end"] : 0) + 1
            }
        }
    };

    console.log("list",list);
    
    let maxContent = {
        key: 0,
        val: {
            start: 0,
            end: 0
        }
    };

    for (const i in list) {
        // console.log(`${i}: ${list[i].end}`);

        if (list[i].end >= maxContent.val.end) {
            maxContent = {
                key: parseInt(i),
                val: list[i]
            }
        }
    }

    console.log("maxContent",maxContent);
    
    return maxContent?.val?.end === (n-1) && !maxContent?.val?.start ? maxContent.key : -1;    
};

console.log("findJudge", findJudge(2, []));
