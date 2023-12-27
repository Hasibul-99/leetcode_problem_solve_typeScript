function minCost(colors: string, neededTime: number[]): number {
    let res: number = 0;
    let num: number[][] = [];
    let arr: number[] = [neededTime[0]];

    for (let i = 1; i < colors.length; i++) {
        if (colors[i - 1] === colors[i]) {
            arr.push(neededTime[i])
        } else {
            num.push(arr);
            arr = [neededTime[i]];
        }   
    }

    num.push(arr);

    for (let i = 0; i < num.length; i++) {
        if (num[i].length > 1) {
            const maxIndex = num[i].indexOf(Math.max(...num[i]));
            console.log("maxIndex",maxIndex);
            
            num[i].splice(maxIndex, 1);

            res = res + num[i].reduce((sum, num) => sum + num, 0)
        }
    }
    

    return res;
};

console.log("minCost", minCost("aaaaaaaaaaaaa", [1,3,6,5,4,5,4,4,2,8,3,10,6,6]));
